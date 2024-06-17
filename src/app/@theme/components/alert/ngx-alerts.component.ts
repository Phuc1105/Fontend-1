import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

export interface IAlertMessage {
  status: string;
  message: string;
}

@Component({
  selector: 'ngx-alerts',
  template: `
    <nb-alert *ngFor="let item of messages; let i = index" status="{{item.status}}" closable (close)="onClose(i)">
      {{item.message}}
    </nb-alert>
  `,
})
export class AlertShowcaseComponent implements OnChanges {
  @Input() messages: IAlertMessage[] = [];

  onClose(indexOfItem: number) {
    this.messages = this.messages.filter((item, index) => index !== indexOfItem);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['messages']) {
      setTimeout(() => {
        this.messages = [];
      }, 3000);
    }
  }

  addMessage(message: IAlertMessage) {
    this.messages.push(message);
    setTimeout(() => {
      this.messages = this.messages.filter(m => m !== message);
    }, 3000);
  }
}
