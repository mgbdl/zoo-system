import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { StoreComponent } from './store/store.component';
import { ParkComponent } from './park/park.component';
import { HomeComponent } from './home/home.component';
import { AnimalComponent } from './animal/animal.component';
import { KeeperComponent } from './keeper/keeper.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ParkComponent,
    HomeComponent,
    AnimalComponent,
    KeeperComponent,
    ContactComponent,
    appRoutingProviders
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
