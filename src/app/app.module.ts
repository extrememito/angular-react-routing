import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactPortalComponent } from './react-portal/react-portal.component';
import { OrderTakingComponent } from './order-taking/order-taking.component';
import { state } from './store';

@NgModule({
  declarations: [
    AppComponent,
    ReactPortalComponent,
    OrderTakingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(state)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
