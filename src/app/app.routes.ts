import { Routes } from '@angular/router';
import { AppListKittenComponent } from './app-list-kitten/app-list-kitten.component';
import { AppCreateKittenComponent } from './app-create-kitten/app-create-kitten.component';
import { AppUserKittenComponent } from './app-user-kitten/app-user-kitten.component';

const ROUTES: Routes = [
  { path: 'list', component: AppListKittenComponent },
  { path: 'create', component: AppCreateKittenComponent },
  { path: 'user', component: AppUserKittenComponent },
];

export { ROUTES };
