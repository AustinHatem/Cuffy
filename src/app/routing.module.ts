import { Routes, RouterModule } from "@angular/router";
import { Router} from '@angular/router';

import { LandingComponent } from './landing/landing.component';

const APP_ROUTES: Routes = [
     
     { path: 'landing', component: LandingComponent},
    { path: '**', redirectTo: 'landing' }


];

export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: false });