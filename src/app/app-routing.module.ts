import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderTakingComponent } from './order-taking/order-taking.component';
import { ReactPortalComponent } from './react-portal/react-portal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/angular',
    pathMatch: 'full'
  },
  {
    path: 'angular',
    component: OrderTakingComponent
  },
  {
    path: 'react',
    children: [
      {
        path: '**',
        component: ReactPortalComponent
      }
    ]
  },
  { path: '**', redirectTo:'/angular' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
