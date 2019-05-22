import { Routes } from '@angular/router';

export const MainRouter: Routes = [
  {
    path: '',
    loadChildren: './routes/home-page/module#Module'
  },
  {
    path: 'register',
    loadChildren: './routes/register-page/module#Module'
  },
  {
    path: 'login',
    loadChildren: './routes/login-page/module#Module'
  },
  {
    path: 'user-page',
    loadChildren: './routes/user-page/module#Module'
  },
];
