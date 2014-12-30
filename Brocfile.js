/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  lessOptions: {
    paths: [
      'bower_components/bootstrap/less',
      'bower_components/video.js/dist/video-js'
    ]
  },
  fingerprint: {
    exclude: ['images/avatars', '/images/logo-for-stripe.jpg'],
  }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/video.js/dist/video-js/video.js');
app.import('bower_components/exifreader/js/ExifReader.js');
app.import('bower_components/emojione/lib/js/emojione.js');
app.import('bower_components/jQuery-linkify/src/linkified.js');
app.import('bower_components/FitText.js/jquery.fittext.js');
app.import('bower_components/hammerjs/hammer.js');
app.import('bower_components/jquery.inputmask/dist/jquery.inputmask.bundle.js');
app.import('bower_components/masonry/dist/masonry.pkgd.js');
app.import('bower_components/imagesloaded/imagesloaded.js');
app.import('bower_components/css-element-queries/src/ResizeSensor.js');
app.import('bower_components/css-element-queries/src/ElementQueries.js');

app.import('bower_components/hint.css/hint.css');

module.exports = app.toTree();
