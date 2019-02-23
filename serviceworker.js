var cacheName = 'solid-links-cache';
var filesToCache = [
          'https://neilrae.solid.community/public/apps/solid_links//solid_logo.png',
          'https://neilrae.solid.community/public/apps/solid_links/manifest.json',
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
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
          console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
                return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});
