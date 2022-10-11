import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  data: any[] = [];
  sender_id = ""
  constructor(
    private chatService: ChatService,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.chatService.getMessage().subscribe(message => this.data.push(message))
  }
  forms = this.formBuilder.group({
    message: ""
  });
  onSubmit(){
    this.sender_id = this.chatService.sendMessage(this.forms.value);
    this.forms.reset()
  }
  

}
