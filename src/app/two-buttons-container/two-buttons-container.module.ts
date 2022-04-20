import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

// COMPONENT - TWO BUTTONS CONTAINER
import { TwoButtonsContainerComponent } from './component/two-buttons-container.component';


@NgModule({
  declarations: [
    TwoButtonsContainerComponent
  ],
  imports: [
    CommonModule,
    
    // MATERIAL
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  exports: [
    TwoButtonsContainerComponent
  ]
})
export class TwoButtonsContainerModule { }
