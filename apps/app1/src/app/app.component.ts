import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app1';

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {}

  runApp(app: string) {
    this.http
      .get(`/${app}`, { responseType: 'text' })
      .pipe(
        map((html) => new DOMParser().parseFromString(html, 'text/html')),
        tap((doc: Document) => {
          const base = doc.querySelector('base');
          this.document.querySelector('base').href = base.href;

          Array.from(doc.querySelectorAll('script')).forEach(
            (originalScript) => {
              const script = this.document.createElement('script');
              script.defer = true;
              script.src = originalScript.src;

              this.document.body.appendChild(script);
            }
          );
        })
      )
      .subscribe();
  }
}
