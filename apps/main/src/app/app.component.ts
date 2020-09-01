import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';
import { APP_FACTORY, AppFactory, APPS } from './app.tokens';

@Component({
  selector: 'main-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'main';

  @ViewChild('container') appContainer: ElementRef<HTMLElement>;

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document,
    @Inject(APPS) private apps$: Observable<string>,
    @Inject(APP_FACTORY) private appFactory: AppFactory
  ) {}

  ngAfterViewInit(): void {
    this.apps$
      .pipe(this.appFactory(this.appContainer.nativeElement))
      .subscribe();
  }
}
