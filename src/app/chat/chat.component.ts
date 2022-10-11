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
  senderId:any = "";
  constructor(
    private chatService: ChatService,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.chatService.getMessage().subscribe(message => {
      console.log(message)
      this.data.push(message)
      console.log(this.data)
    })
  }

  forms = this.formBuilder.group({
    message: ""
  });

  onSubmit(){
    this.senderId = this.chatService.sendMessage(this.forms.value);
    this.forms.reset()
  }
  

}
