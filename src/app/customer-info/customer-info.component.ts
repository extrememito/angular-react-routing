import { Component } from '@angular/core'

import { App } from '../customer-info/App'

@Component({
  selector: 'app-customer-info',
  template: '<app-react-portal [app]="app"></app-react-portal>',
})
export class CustomerInfoComponent {
  app = App
}
