/**
 * Created by glrh11 on 16-11-5.
 */
import { Component, ElementRef } from '@angular/core';
import { ChatMessage, ChatMessageService } from './chat-message.sevice';
import { WebSocketService } from './websocket.service';
import {Subject} from 'rxjs/Rx';

@Component({
    selector: 'chat',
    templateUrl: './templates/chat.component.html',
    styleUrls: ['./css/chat.component.css'],
    providers: [
        ChatMessageService
    ]
})
export class ChatComponent {
    // messages = [
    //     {
    //         avatar: 'http://localhost:8080/assets/angular.9db278d630f5fabd8e7ba16c2e329a3a.png',
    //         body: 'heiheihei'
    //     },
    //     {
    //         avatar: 'http://o9hjg7h8u.bkt.clouddn.com/favicon_blue.ico',
    //         body: 'wocaola'
    //     },
    //     {
    //         avatar: 'http://o9hjg7h8u.bkt.clouddn.com/favicon_blue.ico',
    //         body: 'level, gradation, stage, arrangement of ideas, administrative level, phase'
    //     },
    //     {
    //         avatar: 'http://o9hjg7h8u.bkt.clouddn.com/favicon_blue.ico',
    //         body: '中国国际航空公司-飞机票查询预订_航班查询_最新打折特价机票'
    //     },
    // ]
    public messages: ChatMessage[];

    constructor(private chat_message_service: ChatMessageService) {
        chat_message_service.messages.subscribe(msg=> {
            this.messages.push(msg);
        });
    }
}