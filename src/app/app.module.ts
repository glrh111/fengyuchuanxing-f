/**
 * Created by glrh11 on 16-11-4.
 */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatComponent } from "./chat/chat.component";


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ChatComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
