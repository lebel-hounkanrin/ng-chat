import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: any[] = []
  constructor(
    private chatService: ChatService,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.chatService.getMessage().subscribe(data => this.messages.push(data))
  }
  forms = this.formBuilder.group({
    message: ""
  });
  onSubmit(){
    console.log(this.forms.value)
    this.chatService.sendMessage(this.forms.value);
    this.forms.reset()
  }
  

}
