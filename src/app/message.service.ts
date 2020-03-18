import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    if(confirm('您確定要刪除訊息嗎?')) {
      this.messages = [];
    }
  }
}
