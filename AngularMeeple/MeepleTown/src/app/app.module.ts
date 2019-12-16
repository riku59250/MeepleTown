import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './users/signup/signup.component';
import { SigninComponent } from './users/signin/signin.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
<<<<<<< HEAD
import { CreateSessionComponent } from './sessions/create-session/create-session.component';
import { ListSessionComponent } from './sessions/list-session/list-session.component';
import { SessionPageComponent } from './sessions/session-page/session-page.component';
=======
import { ListGamesComponent } from './games/list-games/list-games.component';
>>>>>>> b1d4a1b6e7d0058cee790564f7d38150625df825

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
<<<<<<< HEAD
    CreateSessionComponent,
    ListSessionComponent,
    SessionPageComponent
=======
    ListGamesComponent
>>>>>>> b1d4a1b6e7d0058cee790564f7d38150625df825
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
