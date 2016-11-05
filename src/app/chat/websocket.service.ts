/**
 * Created by glrh11 on 16-11-5.
 * https://medium.com/@lwojciechowski/websockets-with-angular2-and-rxjs-8b6c5be02fac#.xev26pmcu
 */
import { Injectable } from '@angular/core';

import {Observer} from 'rxjs/Rx';
// import * as Rx from 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class WebSocketService{

    private socket: Subject<MessageEvent>;

    public connect(url: string): Subject<MessageEvent> {
        if (!this.socket) {
            this.socket = this.create(url);
        }
        return this.socket
    }

    private create(url: string): Subject<MessageEvent> {
        let ws = new WebSocket(url);

        let observable = Observable.create(
            (obs: Observer<MessageEvent>) => {
                ws.onmessage = obs.next.bind(obs);
                ws.onerror = obs.error.bind(obs);
                ws.onclose = obs.complete.bind(obs);
                return ws.close.bind(ws);
            }
        );
        let observer = {
            next: (data: Object)=> {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            },
        };
        return Observable.create(observer, observable);
    }

}