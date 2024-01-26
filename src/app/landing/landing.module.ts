import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './routes/main/main.component';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    
  ]
})
export class LandingModule { }
