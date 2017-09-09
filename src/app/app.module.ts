import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreComponent } from './store/store.component';
import { ParkComponent } from './park/park.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ParkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
