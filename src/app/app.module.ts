import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Virtual Assistant Module
import { VirtualAssistantModule } from './virtual-assistant/virtual-assistant.module';


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,

    VirtualAssistantModule // import Virtual Assistant    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
