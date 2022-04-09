import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Babcn32Component } from './modules/babcn32/babcn32.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    Babcn32Component
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
