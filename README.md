# audio book collection manager UI

This project is a sample application to showcase cucumber. This project itself does not contain any cucumber stuff. It only contains the web application that is to be tested by the cucumber features.

This application is done in [AngularJS](http://angularjs.org/). It was created using [angular-seed](https://github.com/angular/angular-seed).

## Setup

* The audiobook collection manager uses [Storra](https://github.com/basti1302/storra) as its backend, and Storra runs on Node.js, so you need to have Node.js installed. Anything from version 0.8.21 upwards should do. Go to http://nodejs.org/ and click on the green button that says "Install", or follow https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager.
* `git clone https://github.com/basti1302/storra`
* Set up Storra by following the instructions at https://github.com/basti1302/storra. Basically, this amounts to typing `npm install` in the storra directory.
* `git clone https://github.com/basti1302/audiobook-collection-manager-ui`
* Start storra by
    * `cd path/to/storra`
    * `node lib/index.js`
    * This should result in output similar to this:

```shell
2013-07-25T14:38:23.966Z - info: Now listening on port 1302.
2013-07-25T14:38:23.966Z - debug: Bind address: 0.0.0.0
2013-07-25T14:38:23.982Z - info: Startup took approximately 0 seconds (385 milliseconds, to be precise).
```

* Start a web-server that serves the assets for the audiobook collection manager UI. You can pick one of these options:
    * serve the complete repository with a webserver of your choice (Apache, nginx, ...) or
    * use the Node.js-based web-server that is included in scripts directory. Since you have Node.js already installed, this is the most convenient option.
        * `cd path/to/audiobook-collection-manager-ui`
        * `node scripts/web-server.js`
        * This should result in output similar to this:

```
Http Server running at http://localhost:8000/
```

Then navigate your browser to http://localhost:8000/app/index.html to see the app running in your browser.
