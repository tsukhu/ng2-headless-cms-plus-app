// App
export * from './app.component';
export * from './app.service';
export * from './app.routes';

import { AppState } from './app.service';
import { SessionService } from './shared/services/session.service';
import { HelperService } from './shared/services/helper.service';
import { BasicAuth } from './auth/auth-user';
import { UserService } from './users/user.service';
import { NotificationsService } from 'angular2-notifications';
import { SolrService } from './solr/solr.service';

import { AuthService } from './auth/auth.service';
import { SearchService } from './shared/search.service';
import { SettingsService } from './shared/settings.service';
import { AuthGuard } from './auth/auth-guard';
import { CanDeactivateGuard }    from './shared/interfaces';

import { TRANSLATE_PROVIDERS,
  TranslateService,
  TranslatePipe,
  TranslateLoader,
  TranslateStaticLoader } from 'ng2-translate/ng2-translate';
// Angular 2 Http
import { Http } from '@angular/http';
import { APP_CONFIG, CONFIG, Config } from './app.config';
import { provide } from '@angular/core';

// Register providers for browser, this is mandatory.
import { MODAL_BROWSER_PROVIDERS } from 'angular2-modal/platform-browser';

import {
  FIREBASE_PROVIDERS,
  defaultFirebase,
  FirebaseAppConfig,
  firebaseAuthConfig,
  AuthMethods,
  AuthProviders,
} from 'angularfire2';

const APP_FIREBASE_PROVIDERS =
  (CONFIG.fbAppEnabled) ?
    [FIREBASE_PROVIDERS,
      defaultFirebase(CONFIG.fbAppConfig),
      firebaseAuthConfig({
        method: AuthMethods.Popup,
        provider: AuthProviders.Google
      })] : [];

// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  SolrService,
  NotificationsService,
  BasicAuth,
  UserService,
  AuthService,
  SearchService,
  SessionService,
  SettingsService,
  HelperService,
  TranslateService,
  AuthGuard,
  CanDeactivateGuard,
  ...MODAL_BROWSER_PROVIDERS,
  APP_FIREBASE_PROVIDERS,
  provide(APP_CONFIG, { useValue: CONFIG }),
  {
    provide: TranslateLoader,
    useFactory: (http: any) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
    deps: [Http]
  }
];


