import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {
    path: 'landing', 
    loadChildren: () => import("./landing/landing.module").then(m => m.LandingModule),
    data: { animation: "LandingPage"},
  },
  {
    path: 'car-request', 
    loadChildren: () => import("./car-request/car-request.module").then(m => m.CarRequestModule),
    data: { animation: "FormPage"},
  },
  {
    path: 'dashboard', 
    loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule),
    data: { animation: "DashboardModule"},
  },
  
  {
    path: 'page-not-found', 
    component: NotfoundComponent,
    data: { animation: "NotFoundPage"},
  },
  {path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
