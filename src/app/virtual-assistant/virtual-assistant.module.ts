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

// COMPONENT - VIRTUAL ASSISTANT
import { VirtualAssistantTreeComponent } from './component/virtual-assistant-tree.component';


@NgModule({
  declarations: [
    VirtualAssistantTreeComponent,
  ],
  imports: [
    CommonModule,

    // MATERIAL
    BrowserAnimationsModule,
    MatTreeModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    VirtualAssistantTreeComponent
  ]
})
export class VirtualAssistantModule { }
