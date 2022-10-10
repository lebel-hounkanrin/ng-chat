import { ChatService } from './chat.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [ChatService],
  exports: [ChatComponent]
})
export class ChatModule { }
