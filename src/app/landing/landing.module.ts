import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './routes/main/main.component';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';

import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    MatCardModule
  ]
})
export class LandingModule { }
