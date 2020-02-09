import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {RentaComponent} from './components/renta/renta.component';


const appRoutes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'landing', component: LandingComponent},
    {path: 'renta', component: RentaComponent},
  ];

export const routing = RouterModule.forRoot(appRoutes);
