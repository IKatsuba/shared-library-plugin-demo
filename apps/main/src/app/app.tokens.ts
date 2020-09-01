import { inject, InjectionToken } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import {
  distinctUntilChanged,
  filter,
  map,
  mapTo,
  switchMap,
  tap,
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

export const APPS = new InjectionToken<Observable<string>>('Apps', {
  providedIn: 'root',
  factory() {
    const router = inject(Router);

    return router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url.replace('/', '')),
      filter<string>(Boolean),
      distinctUntilChanged()
    );
  },
});

export type AppFactory = (
  container: HTMLElement
) => OperatorFunction<string, void>;

export const APP_FACTORY = new InjectionToken<AppFactory>('App initialize', {
  providedIn: 'root',
  factory() {
    const http = inject(HttpClient);
    const document = inject(DOCUMENT);

    return function runApp(container: HTMLElement) {
      return (source: Observable<string>) =>
        source.pipe(
          switchMap((app) =>
            http
              .get(`/${app}/static/index.html`, { responseType: 'text' })
              .pipe(
                map((html) =>
                  new DOMParser().parseFromString(html, 'text/html')
                ),
                tap((doc: Document) => {
                  const base = doc.querySelector('base');

                  document.querySelector('base').href = base.href;

                  const root = document.createElement(`${app}-root`);

                  container.innerHTML = '';
                  container.appendChild(root);

                  Array.from(doc.querySelectorAll('script')).forEach(
                    (originalScript) => {
                      const script = document.createElement('script');
                      script.defer = true;
                      script.src = originalScript.src;

                      document.body.appendChild(script);
                    }
                  );
                }),
                mapTo<any, void>(undefined)
              )
          )
        );
    };
  },
});
