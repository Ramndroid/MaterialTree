import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';



// Array de módulos para agilizar la importación y exportación de los módulos de Material
const material = [
  MatTreeModule,
  MatCheckboxModule,
  MatIconModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatDividerModule
];

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    BrowserAnimationsModule,

    [...material]
  ], 
  
  exports: [

    [...material]
  ]
})
export class MaterialModule { }
