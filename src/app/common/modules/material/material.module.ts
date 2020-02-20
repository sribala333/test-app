import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

const matModule = [MatInputModule, MatFormFieldModule, MatSelectModule, MatTableModule, MatIconModule,
   MatButtonModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matModule
  ],
  exports: [
    matModule
  ]
})
export class MaterialModule { }
