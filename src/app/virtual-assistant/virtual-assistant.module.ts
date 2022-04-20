import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL MODULE
import { MaterialModule } from '../material.module';

// COMPONENT - VIRTUAL ASSISTANT
import { VirtualAssistantTreeComponent } from './component/virtual-assistant-tree.component';


@NgModule({
  declarations: [
    VirtualAssistantTreeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    VirtualAssistantTreeComponent
  ]
})
export class VirtualAssistantModule { }
