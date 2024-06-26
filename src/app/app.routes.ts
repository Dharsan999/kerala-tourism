import { RouterModule, Routes } from '@angular/router';
import { DistrictsComponent } from './districts/districts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DistrictDetailComponent } from './district-detail/district-detail.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'districts', component: DistrictsComponent },
  { path: 'districts/:title', component: DistrictDetailComponent },
  { path: 'auth', component: AuthComponent },
];


