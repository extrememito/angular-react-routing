import { Component, OnInit } from '@angular/core';
import { AppState, State, SET_LANGUAGE } from './store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  language: string

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.select('appState', 'language').subscribe(lang => this.language = lang)
  }

  onLangChange(lang: string) {
    this.store.dispatch({ type: SET_LANGUAGE, payload: lang })
  }
}
