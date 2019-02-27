# solid-links

This is a simple demonstration Progressive Web App, built to be hosted on a Solid Pod.  It is not intended for production use, but a running demo instance is here: https://neilrae.solid.community/public/apps/solid_links/index.html

The goal of writing the app was to begin exploring the art of the possible with Solid at this early stage. 

The app has the following dependencies:

* Vue.js: to provide simple html component templates, data binding and an event bus
* Material Design Components for CSS, icons, fonts and Vue.js
* Solid-auth: for user ID management
* Axios: to simplify handling of https requests

Material was chosen as it gives a familiar, responsive user experience and has a broad set of coherent components, icons, etc
Vue was chosen as a front end framework as it is relatively simple and easy to reason with - its architecture is similar to vanilla web components.
Axios was chosen as a way to simply handle https requests asynchronously.
Solid Auth was used to illustrate simple user login. This isn't used to do much more than display the user in the app at present. 

It is normally good practice to write the code for individual components in separate files and to combine these later using a tool, such as webpack. This app is deliberately minimal and all the components are in a single file so that it can be read as one document and easily followed.  The only additions are the manifest.json and serviceworker.js files that enable it to be a Progressive Web App, as well as the underlying data.

The javascript makes use of ES6 functions and let/const variable declarations.  These are worth searching and reading up on.

The Solid user interface and API documentation are very much still works in progress.  The Solid user interface only lets you save data in a small range of formats, eg. .txt, .html and turtle. 

However, using the Solside IDE (https://jeff-zucker.github.io/solid-ide/) lets you load and work with a much broader set of formats.  

Writing to Solid is still being worked on to simplify the process - particularly to allow web developers to reuse their current knowledge, without facing a steep learning curve to understand RDF and ontologies.  The Solid REST API spec is here: https://github.com/solid/solid-spec/blob/master/api-rest.md

LDFlex (https://github.com/solid/query-ldflex) holds promise for allowing developers to simply work with Linked Data in a JSON-LD context - see the article here: https://ruben.verborgh.org/blog/2018/12/28/designing-a-linked-data-developer-experience/

Inrupt are developing a React.js SDK for Solid on a fortnightly release cycle - keep an eye on it here: https://github.com/inrupt-inc/solid-react-sdk

They have also just published a modern UI style guide here - https://design.inrupt.com/atomic-core/?cat=Core


