import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';

const route: Routes = [
  {
    path: '',
    component: HomePageComponent,
  }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(route);
