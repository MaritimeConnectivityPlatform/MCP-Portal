import {NgModule, ApplicationRef, ErrorHandler, Inject} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { routing } from './app.routing';

// App is our top level component
import { App } from './app.component';
import { AppState, InteralStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';
import {AuthGuard} from "./authentication/services/auth-guard.service";
import {LoginModule} from "./login/login.module";
import {MC_ERROR_HANDLER_PROVIDERS, MC_ERROR_HANDLER_OPTIONS} from "./shared/mc-error-handler";
import {ErrorLoggingService} from "./shared/error-logging.service";
import {AuthService} from "./authentication/services/auth.service";
import {SimpleNotificationsModule} from "angular2-notifications";
import {NotificationsService} from "angular2-notifications";
import {MCNotificationsService} from "./shared/mc-notifications.service";
import {IdentityRegistryApiModule} from "./backend-api/identity-registry/identity-registry-api.module";

// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState
];

type StoreType = {
  state: InteralStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};


/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    PagesModule,
    LoginModule,
    IdentityRegistryApiModule,
    SimpleNotificationsModule,
    routing
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    AuthGuard,
    AuthService,
    MCNotificationsService,
    NotificationsService, // See usage: https://github.com/flauc/angular2-notifications/blob/master/docs/toastNotifications.md
    ErrorLoggingService,
    MC_ERROR_HANDLER_PROVIDERS,
    // By default the custom ErrorHandler has rethrowError and unwrapError = false, but we set it here as an example on how to overwrite
    {
      provide: MC_ERROR_HANDLER_OPTIONS,
      useValue: {
        rethrowError: false,
        unwrapError: false
      }
    }
  ]
})

export class AppModule {

  constructor(public appRef: ApplicationRef, public appState: AppState) {
  }

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }
    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
