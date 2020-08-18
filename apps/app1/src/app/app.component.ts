import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app1';

  constructor(private http: HttpClient) { }

  runApp2() {
    this.http.get('/child', { responseType: 'text' }).pipe(
      map(html => new DOMParser().parseFromString(html, 'text/html')),
      tap((doc: Document) => {
        const base = doc.querySelector('base');
        document.querySelector('base').href = base.href;

        Array.from(doc.querySelectorAll('script')).forEach((originalScript) => {
          const script = document.createElement('script');
          script.defer = true;
          script.src = originalScript.src;

          document.body.appendChild(script);
        })
      })
    ).subscribe(console.log)
  }
}
