import { Component } from '@angular/core';

@Component({
  selector: 'code-of-conduct-root',
  template: `
    <mat-toolbar color="accent">
      Child App
    </mat-toolbar>

    <div class="container">
      <markdown src="assets/CODE_OF_CONDUCT.md"></markdown>
    </div>
  `,
  styles: [
    `
      .container {
        margin: 20px;
      }
    `,
  ],
})
export class AppComponent {}
