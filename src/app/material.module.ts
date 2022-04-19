import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatTreeModule } from '@angular/material/tree';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatIconModule } from '@angular/material/icon';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatButtonModule } from '@angular/material/button';
// import { MatInputModule } from '@angular/material/input';

const material = [
  // MatTreeModule,
  // MatCheckboxModule,
  // MatIconModule,
  // MatFormFieldModule,
  // MatButtonModule,
  // MatInputModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule, // added by 'ng add @angular/material'
    // [...material]
  ], exports: [
    // [...material]
  ]
})
export class MaterialModule { }
