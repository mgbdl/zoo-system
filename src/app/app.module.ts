import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreComponent } from './store/store.component';
import { ParkComponent } from './park/park.component';
import { HomeComponent } from './home/home.component';
import { AnimalComponent } from './animal/animal.component';
import { KeeperComponent } from './keeper/keeper.component';

import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ParkComponent,
    appRoutingProviders
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
