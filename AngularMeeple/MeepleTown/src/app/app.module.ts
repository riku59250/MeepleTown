import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './users/signup/signup.component';
import { SigninComponent } from './users/signin/signin.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateSessionComponent } from './sessions/create-session/create-session.component';
import { ListSessionComponent } from './sessions/list-session/list-session.component';
import { SessionPageComponent } from './sessions/session-page/session-page.component';
import { ListGamesComponent } from './games/list-games/list-games.component';
import { UserHeaderComponent } from './header/user-header/user-header.component';
import { SearchFilterPipe } from './filters/search-filter.pipe';
import {ListGroupComponent} from "./groups/list-group/list-group.component";
import {CreategroupComponent} from "./groups/creategroup/creategroup.component";
import {UserPageComponent} from "./users/user-page/user-page.component";
import { PagegroupComponent } from './groups/pagegroup/pagegroup.component';
import {ConfirmationComponent} from "./popup/confirmation/confirmation.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    CreateSessionComponent,
    ListSessionComponent,
    SessionPageComponent,
    ListGamesComponent,
    UserHeaderComponent,
    SearchFilterPipe,
      ListGroupComponent,
      CreategroupComponent,
    UserPageComponent,
    SearchFilterPipe,
    PagegroupComponent,
      ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule

  ],
  exports: [
    SearchFilterPipe
  ],
  entryComponents: [
    ConfirmationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
