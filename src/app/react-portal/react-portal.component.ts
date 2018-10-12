import { Component, AfterViewInit, ElementRef, OnDestroy, Input, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { State } from '../store'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-react-portal',
  template: '',
})
export class ReactPortalComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  app: React.ComponentClass

  private rootFactory: any
  private sub: Subscription

  constructor(private elementRef: ElementRef, private store: Store<State>) {}

  ngOnInit() {
    this.rootFactory = React.createFactory(this.app)
  }

  ngAfterViewInit() {
    this.sub = this.store.select('appState').subscribe(state => {
      this.render(state)
    })
  }

  private render(state) {
    ReactDOM.render(this.rootFactory({ ...state }), this.elementRef.nativeElement)
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.elementRef.nativeElement)
    this.sub.unsubscribe()
  }
}
