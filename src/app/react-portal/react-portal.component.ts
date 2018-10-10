import { Component, AfterViewInit, ElementRef } from '@angular/core'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from '../customer-info/App'

@Component({
  selector: 'app-react',
  template: '',
})
export class ReactPortalComponent implements AfterViewInit {
  private app: HTMLElement

  private language = 'en_US'

  constructor(elementRef: ElementRef) { 
    this.app = elementRef.nativeElement
  }

  ngAfterViewInit() {
    const RootFactory = React.createFactory(App)
    setTimeout(() => {
      ReactDOM.render(RootFactory({
        language: this.language
      }), this.app)
    })
  }
}
