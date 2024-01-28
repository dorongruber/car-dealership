import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ComponenRefDirective,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
