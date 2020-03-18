import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    if (confirm('您確定要刪除訊息嗎?')) {
      this.messages = [];
    }
  }

  clearTopFourMessages() {
    if (confirm('您確定要清除頁面底部(Messages)裡的前四筆訊息嗎?')) {
      if(this.messages.length <= 4) {
        this.messages = []
      } else {
        this.messages.splice(0, 4);
      }
    }
  }
}
