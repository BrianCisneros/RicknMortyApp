import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './mixed/comp/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', loadChildren: () => import('./comp/pag/home/home.module').then(m => m.HomeModule) },
  { path: 'char-list', loadChildren: () => import('./comp/pag/characters/char-list/char-list.module').then(m => m.CharListModule) }, 
  { path: 'char-det/:id', loadChildren: () => import('./comp/pag/characters/char-det/char-det.module').then(m => m.CharDetModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
