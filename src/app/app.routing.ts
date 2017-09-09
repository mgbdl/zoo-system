import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store/store.component';

const appRoutes: Routes = [
  {path: '', component: StoreComponent},
  {path: '', redirectTo: 'store', pathMatch: 'full'},
  {path: 'store', component: StoreComponent},
  {path: '**', component: StoreComponent},

];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
