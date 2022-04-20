import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENT - VIRTUAL ASSISTANT
import { VirtualAssistantTreeComponent } from './component/virtual-assistant-tree.component';

// MATERIAL MODULE
import { MaterialModule } from '../material.module';


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
