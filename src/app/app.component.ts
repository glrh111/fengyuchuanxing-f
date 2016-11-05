/**
 * Created by glrh11 on 16-11-4.
 */
import { Component } from '@angular/core';
import '../../public/css/styles.css';
import {ChatMessage, ChatMessageService} from "./chat/chat-message.sevice";
import {WebSocketService} from './chat/websocket.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
      ChatMessageService,
      WebSocketService
  ]
})
export class AppComponent { }
