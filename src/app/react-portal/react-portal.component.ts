import { Component, AfterViewInit, ElementRef, OnDestroy, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { State } from '../store'
import { App } from '../customer-info/App'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-react-portal',
  template: '',
})
export class ReactPortalComponent implements AfterViewInit, OnDestroy {
  @Input() app: React.ComponentClass

  private rootFactory: any
  private language: string
  private sub: Subscription

  constructor(private elementRef: ElementRef, private store: Store<State>) {}

  ngAfterViewInit() {
    this.rootFactory = React.createFactory(this.app)
    this.sub = this.store.select('appState', 'language').subscribe(lang => {
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

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.elementRef.nativeElement)
    this.sub.unsubscribe()
  }
}
