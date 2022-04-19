import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Babcn32Component } from './modules/babcn32/babcn32.component';
import { MaterialModule } from './material.module';
import { ArbolComponent } from './arbol/arbol.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    Babcn32Component,
    ArbolComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
