/*
 * These are globally available services in any component or any other service
 */

// Angular 2
import { HashLocationStrategy, PathLocationStrategy, LocationStrategy } from '@angular/common';
// Angular 2 Http
import { HTTP_PROVIDERS } from '@angular/http';
// Angular 2 Router
import { provideRouter } from '@angular/router';


// Angular 2 Material
// TODO(gdi2290): replace with @angular2-material/all
import { MATERIAL_PROVIDERS } from '../platform/browser/angular2-material2';



// Angular 2 forms
import { disableDeprecatedForms, provideForms } from '@angular/forms';

// AngularClass
import { provideWebpack } from '@angularclass/webpack-toolkit';
import { providePrefetchIdleCallbacks } from '@angularclass/request-idle-callback';

import { routes, asyncRoutes, prefetchRouteCallbacks } from '../app/app.routes';
/*
* Application Providers/Directives/Pipes
* providers/directives/pipes that only live in our browser environment
*/
export const APPLICATION_PROVIDERS = [
  // new Angular 2 forms TODO: Not sure what this is for but it is causing other errors
  // to diabled the next two lines
 // disableDeprecatedForms(),
 // provideForms(),

  provideRouter(routes),
  provideWebpack(asyncRoutes),
  providePrefetchIdleCallbacks(prefetchRouteCallbacks),

  ...HTTP_PROVIDERS,
  ...MATERIAL_PROVIDERS,
  { provide: LocationStrategy, useClass: PathLocationStrategy }
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
