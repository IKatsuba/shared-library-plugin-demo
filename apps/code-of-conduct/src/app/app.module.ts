import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
  ],
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const AppElement = createCustomElement(AppComponent, {
      injector,
    });
    // Register the custom element with the browser.
    customElements.define('code-of-conduct-root', AppElement);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {}
}
