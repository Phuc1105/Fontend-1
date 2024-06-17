import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

export interface IAlertMessage {
  status: string;
  message: string;
}

@Component({
  selector: 'ngx-alerts',
  template: `
    <nb-alert class="alert-wrapper" *ngFor="let item of messages; let i = index" status="{{item.status}}" closable (close)="onClose(i)">
      {{item.message}}
    </nb-alert>
  `,
  styles: [`
    .alert-wrapper {
      position: fixed;
      width: 18.5%; 
      margin-top: 4%;
      top: 20px;
      right: 20px;
      background-color: #d4edda;
      color: #155724;
      padding: 15px 20px;
      border: 1px solid #c3e6cb;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }
  `]
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
