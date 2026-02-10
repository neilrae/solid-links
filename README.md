# solid-links

This was my response to learning about Tim Berners-Lee's Solid project: https://solidproject.org/

This was a simple demonstration a Progressive Web App, built to be hosted on a Solid Pod.  It was not intended for production use and the goal of writing the app was to begin exploring the art of the possible with Solid at an early stage. 

The app had the following dependencies:

* Vue.js: to provide simple html component templates, data binding and an event bus
* Material Design Components for CSS, icons, fonts and Vue.js (v 2.x)
* Solid-auth: for user ID management
* Axios: to demonstrate simple handling of https requests
* Solid-file-client: to demonstrate saving JSON objects to a pod

Material was chosen as it gave a familiar, responsive user experience with a broad set of coherent components, icons, etc
Vue 2.x was chosen as a front end framework as it was relatively easy to reason with - its architecture is similar to vanilla web components.
Axios was chosen as a way to handle https requests asynchronously.
Solid Auth and Solid file client were used to illustrate standard Solid methods for user login and reading/writing to a pod.

It is normally good practice to write the code for individual components in separate files and to combine these later using a tool, such as webpack. This app was deliberately minimal and all the components are in a single file so that it can be read as one document and easily followed.  The only additions are the manifest.json and serviceworker.js files that enable it to be a Progressive Web App, as well as the underlying data set.

The javascript makes use of ES6 functions and let/const variable declarations.  These are now very common practice.

The Solid user interface and API documentation were very much still under development.  At the time, the Solid user interface only let you save data in a small range of formats, eg. .txt, .html and turtle. 

However, using the Solside IDE developed by Jeff Zucker, I was able to load and work with a much broader set of formats, such as javascript and json.  

A more recent catalogue of Solid apps, tools and links is here: https://solidproject.solidcommunity.net/catalog/#



