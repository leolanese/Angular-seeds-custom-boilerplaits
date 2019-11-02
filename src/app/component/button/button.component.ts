import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'test-button',
  template: `<h3 (click)="onClick.emit($event)">{{ value }}</h3>`
})
export class ButtonComponent {

  @Input()
    input: string;

  @Input()
    value: 'ClickMe!';

  @Output()
    onClick = new EventEmitter();
}
