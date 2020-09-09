import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { StoreModule } from '@ngrx/store';
import { CustomerReducer } from './customer.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({customers: CustomerReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
