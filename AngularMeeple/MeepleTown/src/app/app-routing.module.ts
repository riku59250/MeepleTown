import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './users/signup/signup.component';
import {SigninComponent} from './users/signin/signin.component';
import {ListGamesComponent} from "./games/list-games/list-games.component";


const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'listGame', component: ListGamesComponent},
  {path: '', redirectTo: '/signup', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
