import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HandSelectorComponent } from './components/hand-selector/hand-selector.component';
import { SheldonComponent } from './components/sheldon/sheldon.component';

@NgModule({
  declarations: [
    AppComponent,
    HandSelectorComponent,
    SheldonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
