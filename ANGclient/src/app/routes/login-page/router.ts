import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page.component';

const route: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(route);
