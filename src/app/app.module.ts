import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// MATERIAL
import { MatDividerModule } from '@angular/material/divider';

// Two Buttons Container Module
import { TwoButtonsContainerModule } from './two-buttons-container/two-buttons-container.module';

// Virtual Assistant Module
import { VirtualAssistantModule } from './virtual-assistant/virtual-assistant.module';


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,

    // MATERIAL
    MatDividerModule,

    // COMPONENT MODULES
    TwoButtonsContainerModule,
    VirtualAssistantModule    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
