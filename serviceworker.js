// This is a service worker with the Cache-first network - courtesy of https://www.pwabuilder.com

const CACHE = 'solid-links-cache';
const precacheFiles = [
  'https://neilrae.solid.community/public/apps/solid_links//solid_logo.png',
  'https://neilrae.solid.community/public/apps/solid_links/manifest.js',
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
  'https://unpkg.com/vue',
  'https://unpkg.com/axios/dist/axios.min.js',
  'https://unpkg.com/vue-mdc-adapter',
  'https://solid.github.io/solid-auth-client/dist/solid-auth-client.bundle.js',
  'https://neilrae.solid.community/public/apps/solid_links/docs.json',
  'https://neilrae.solid.community/public/apps/solid_links/index.json',
  'https://neilrae.solid.community/public/apps/solid_links/index.html'
];

self.addEventListener("install", function (event) {
  console.log("Solid Links: Install Event processing");

  console.log("Solid Links: Skip waiting on install");
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      console.log("Solid Links: Caching pages during install");
      return cache.addAll(precacheFiles);
    })
  );
});

// Allow sw to control of current page
self.addEventListener("activate", function (event) {
  console.log("Solid Links: Claiming clients for current page");
  event.waitUntil(self.clients.claim());
});

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fromCache(event.request).then(
      function (response) {
        // The response was found in the cache so we responde with it and update the entry

        // This is where we call the server to get the newest version of the
        // file to use the next time we show view
        event.waitUntil(
          fetch(event.request).then(function (response) {
            return updateCache(event.request, response);
          })
        );

        return response;
      },
      function () {
        // The response was not found in the cache so we look for it on the server
        return fetch(event.request)
          .then(function (response) {
            // If request was success, add or update it in the cache
            event.waitUntil(updateCache(event.request, response.clone()));

            return response;
          })
          .catch(function (error) {
            console.log("Solid Links: Network request failed and no cache." + error);
          });
      }
    )
  );
});

function fromCache(request) {
  // Check to see if you have it in the cache
  // Return response
  // If not in the cache, then return
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      if (!matching || matching.status === 404) {
        return Promise.reject("no-match");
      }

      return matching;
    });
  });
}

function updateCache(request, response) {
  return caches.open(CACHE).then(function (cache) {
    return cache.put(request, response);
  });
}
