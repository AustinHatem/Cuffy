import { Routes, RouterModule } from "@angular/router";
import { Router} from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
     
     { path: 'landing', component: LandingComponent},
     { path: 'home', component: HomeComponent},
    { path: '**', redirectTo: 'landing' }


];

export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: false });