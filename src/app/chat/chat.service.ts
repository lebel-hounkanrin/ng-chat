import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { io } from "socket.io-client";

@Injectable()
export class ChatService {
    private url = '';
    private socket = io("http://localhost:3000", {
        withCredentials: true,
        extraHeaders: {
            "my-custom-header": "abcd"
        }
    })
    constructor(){}
    public sendMessage(message: any){
        const messageEmit = this.socket.emit("newMessage", message);
        return messageEmit.id
    }

    public getMessage(){
        const observable = new Observable((subscriber) => {
            this.socket.on("message", (message) => {
                subscriber.next({message, userId: this.socket.id})
            })
        });
        return observable;
    }
}