import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppCreateKittenComponent } from './app-create-kitten/app-create-kitten.component';
import { AppListKittenComponent } from './app-list-kitten/app-list-kitten.component';
import { AppUserKittenComponent } from './app-user-kitten/app-user-kitten.component';
import { ROUTES } from './app.routes';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCreateKittenComponent,
    AppListKittenComponent,
    AppUserKittenComponent,
    MenuComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
