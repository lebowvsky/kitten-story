import { Routes } from '@angular/router';
import { AppListKittenComponent } from './app-list-kitten/app-list-kitten.component';
import { AppCreateKittenComponent } from './app-create-kitten/app-create-kitten.component';

const ROUTES: Routes = [
  { path: '', component: AppListKittenComponent },
  { path: 'create', component: AppCreateKittenComponent },
];

export { ROUTES };
