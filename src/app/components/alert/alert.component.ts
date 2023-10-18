import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() alertOpen: boolean = false;
  @Input() status: string;
  @Input() message: string;
  @Output() closeAlertEvent: EventEmitter<void> = new EventEmitter<void>();

  public closeAlert(): void {
    this.closeAlertEvent.emit();
  }
}
