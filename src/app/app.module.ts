import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaiComponent } from './componentes/pai/pai.component';
import { Filho1Component } from './componentes/pai/filho1/filho1.component';
import { Filho2Component } from './componentes/pai/filho2/filho2.component';

@NgModule({
  declarations: [
    AppComponent,
    PaiComponent,
    Filho1Component,
    Filho2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
