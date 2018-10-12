import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { OrderTakingComponent } from './order-taking/order-taking.component'
import { CustomerInfoComponent } from './customer-info/customer-info.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/angular',
    pathMatch: 'full',
  },
  {
    path: 'orders',
    component: OrderTakingComponent,
  },
  {
    path: 'customerInfo',
    children: [
      {
        path: '**',
        component: CustomerInfoComponent,
      },
    ],
  },
  { path: '**', redirectTo: '/orders' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
