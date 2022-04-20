import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL MODULE
import { MaterialModule } from '../material.module';

// COMPONENT - TWO BUTTONS CONTAINER
import { TwoButtonsContainerComponent } from './component/two-buttons-container.component';


@NgModule({
  declarations: [
    TwoButtonsContainerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TwoButtonsContainerComponent
  ]
})
export class TwoButtonsContainerModule { }
