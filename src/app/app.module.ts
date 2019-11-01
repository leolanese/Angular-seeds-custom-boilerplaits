import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from "@angular/material";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { environment } from "../environments/environment";
import { APP_RESOLVER_PROVIDERS } from "./app.resolver";

import { ApiService, BridgeService } from "./services";

import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { RouterModule, Routes, Router } from "@angular/router";

/**
 * Application wide providers
 */
const APP_PROVIDERS = [...APP_RESOLVER_PROVIDERS, ApiService, BridgeService];

/**
 * Importing Containers & Components
 */
import { AppComponent } from "./app.component";

import { ContainerComponent } from './container';

import { OneComponent } from "./component/oneComponent";
import { TwoComponent } from "./component/twoComponent";
import { ThreeComponent } from "./component/ThreeComponent";

const routes: Routes = [
  { path: "", redirectTo: "/LINK1", pathMatch: "full" },
  { path: "LINK1", component: OneComponent },
  { path: "LINK2", component: TwoComponent },
  { path: "LINK3", component: ThreeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    LayoutModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [environment.ENV_PROVIDERS, APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // Diagnostic only: inspect router configuration
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
    console.warn('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
