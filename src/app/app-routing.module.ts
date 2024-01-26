import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'landing', loadChildren: () => import("./landing/landing.module").then(m => m.LandingModule) },
  {path: 'car-request', loadChildren: () => import("./car-request/car-request.module").then(m => m.CarRequestModule) },
  {path: 'dashboard', loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule) },
  
  {path: 'page-not-found', component: NotfoundComponent},
  {path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
