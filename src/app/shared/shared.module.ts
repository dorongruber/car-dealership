import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComponenRefDirective } from './directives/container-ref.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ComponenRefDirective
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ComponenRefDirective,
    MatDialogModule,
    MatCardModule
  ]
})
export class SharedModule { }
