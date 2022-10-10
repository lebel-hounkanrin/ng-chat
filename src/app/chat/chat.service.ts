import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { io } from "socket.io-client";

@Injectable()
export class ChatService {
    private url = '';
    private socket = io("http://localhost:3000")
    constructor(){}
    public sendMessage(message: any){
        const c = this.socket.emit("newMessage", message);
        console.log(c)
    }

    public getMessage(){
        const observable = new Observable((subscriber) => {
            this.socket.on("message", (message) => {
                subscriber.next(message)
            })
        });
        return observable;
    }
}