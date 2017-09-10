import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store/store.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { KeeperComponent } from './keeper/keeper.component';
import { ParkComponent } from './park/park.component';
import { AnimalComponent } from './animal/animal.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'store', component: StoreComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'keeper', component: KeeperComponent},
  {path: 'park', component: ParkComponent},
  {path: 'animal', component: AnimalComponent},
  {path: '**', component: HomeComponent}

];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
