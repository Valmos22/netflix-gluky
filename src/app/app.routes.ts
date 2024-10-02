import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
  {
    path: 'detail/:id',
    loadComponent: ()=> import('./movies/components/detail/detail.component').then(m=> m.DetailComponent),
    canActivate: [authGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
