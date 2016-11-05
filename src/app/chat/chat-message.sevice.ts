/**
 * Created by glrh11 on 16-11-5.
 */
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {WebSocketService} from './websocket.service';

const CHAT_URL = 'ws://localhost:5000/chatsocket';

export interface ChatMessage {
    id: string;
    avatar: string;
    body: string;
}

@Injectable()
export class ChatMessageService {
    public messages: Subject<ChatMessage>;

    constructor(ws_service: WebSocketService) {
        this.messages = <Subject<ChatMessage>>ws_service
            .connect(CHAT_URL)
            .map((response: MessageEvent):ChatMessage=> {
                let data = JSON.parse(response.data);
                console.log('data:', data);
                return {
                    id: data.id,
                    avatar: data.avatar,
                    body: data.body,
                }
            });
    }
}