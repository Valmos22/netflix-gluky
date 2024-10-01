import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: ()=> import('./auth/components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: ()=> import('./auth/components/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'resetPassword',
    loadComponent: ()=> import('./auth/components/reset-password/reset-password.component').then(m => m.ResetPasswordComponent)
  },
  {
    path: 'movies',
    loadComponent: ()=> import('./movies/components/movies/movies.component').then(m=> m.MoviesComponent),
    canActivate: [authGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
