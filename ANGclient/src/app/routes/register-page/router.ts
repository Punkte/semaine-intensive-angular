import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './register-page.component';

const route: Routes = [
  {
    path: '',
    component: RegisterPageComponent,
  }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(route);
