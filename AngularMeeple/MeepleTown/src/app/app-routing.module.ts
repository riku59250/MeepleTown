import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './users/signup/signup.component';
import {SigninComponent} from './users/signin/signin.component';
<<<<<<< HEAD
import {CreateSessionComponent} from './sessions/create-session/create-session.component';
import {ListSessionComponent} from "./sessions/list-session/list-session.component";
import {SessionPageComponent} from "./sessions/session-page/session-page.component";
=======
import {ListGamesComponent} from "./games/list-games/list-games.component";
>>>>>>> b1d4a1b6e7d0058cee790564f7d38150625df825


const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
<<<<<<< HEAD
  {path: 'createSession', component: CreateSessionComponent},
  {path: 'listSessions', component: ListSessionComponent},
  {path: 'sessionPage', component: SessionPageComponent},
  {path: 'sessionPage/:id', component: SessionPageComponent},
=======
  {path: 'listGame', component: ListGamesComponent},
>>>>>>> b1d4a1b6e7d0058cee790564f7d38150625df825
  {path: '', redirectTo: '/signup', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
