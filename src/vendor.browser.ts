// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

// AngularClass
import '@angularclass/webpack-toolkit';
import '@angularclass/request-idle-callback';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import 'jquery';
import 'bootstrap-loader';
// import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome-webpack';
// import 'angular2-google-maps/core';
import 'ng2-translate/ng2-translate';
import 'angular2-notifications/components';
import 'ng2-bootstrap/ng2-bootstrap';

import 'bootstrap-material-design';

// import 'contentful';
// import 'assets/bootstrap-material-design/js/material.min.js';
// import 'assets/bootstrap-material-design/js/ripples.min.js';

import 'firebase';
import 'angularfire2';

if ('production' === ENV) {
  // Production


} else {
  // Development
  require('angular2-hmr');

}
