import { Component, AfterViewInit, ElementRef } from '@angular/core'
import { Store } from '@ngrx/store'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { State } from '../store'
import { App } from '../customer-info/App'

@Component({
  selector: 'app-react',
  template: '',
})
export class ReactPortalComponent implements AfterViewInit {
  private rootFactory
  private language: string

  constructor(private elementRef: ElementRef, private store: Store<State>) {}

  ngAfterViewInit() {
    this.rootFactory = React.createFactory(App)
    this.store.select('appState', 'language').subscribe(lang => {
      if (this.language !== lang) {
        ReactDOM.render(
          this.rootFactory({
            language: lang,
          }),
          this.elementRef.nativeElement,
        )
      }
      this.language = lang
    })
  }
}
