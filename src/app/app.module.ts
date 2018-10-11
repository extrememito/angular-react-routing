import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ReactPortalComponent } from './react-portal/react-portal.component'
import { OrderTakingComponent } from './order-taking/order-taking.component'
import { reducers } from './store'
import { environment } from 'src/environments/environment'

@NgModule({
  declarations: [AppComponent, ReactPortalComponent, OrderTakingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
