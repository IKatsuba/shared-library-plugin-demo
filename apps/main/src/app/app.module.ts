import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { BlankComponent } from './blank/blank.component';

@NgModule({
  declarations: [AppComponent, BlankComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    RouterModule.forRoot([
      {
        path: '**',
        component: BlankComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
