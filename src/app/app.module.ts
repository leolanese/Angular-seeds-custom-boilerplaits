import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from "@angular/material";
import { ContainerComponent } from "./container/container.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { environment } from "../environments/environment";
import { APP_RESOLVER_PROVIDERS } from "./app.resolver";

import {
  ApiService,
  SomeService
} from './services';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * Application wide providers
 */
const APP_PROVIDERS = [...APP_RESOLVER_PROVIDERS, ApiService, SomeService];

@NgModule({
  declarations: [AppComponent, ContainerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgbModule.forRoot()
  ],
  providers: [environment.ENV_PROVIDERS, APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
