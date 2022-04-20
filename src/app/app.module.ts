import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Virtual Assistant Module
import { VirtualAssistantModule } from './virtual-assistant/virtual-assistant.module';
import { TwoButtonsContainerModule } from './two-buttons-container/two-buttons-container.module';

// Two Buttons Container Module



@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,

    VirtualAssistantModule, // import Virtual Assistant   
    
    TwoButtonsContainerModule // import Two Buttons Container
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
