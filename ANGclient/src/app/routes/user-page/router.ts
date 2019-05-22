import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './user-page.component';

const route: Routes = [
  {
    path: '',
    component: UserPageComponent,
  }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(route);
