import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'test-button',
  template: `<h3 (click)="onClick.emit($event)">{{ valueLabelButton }}</h3>`
})
export class ButtonComponent {

  @Input()
    input: string;

  @Input()
    valueLabelButton: 'ClickMe!';

  @Output()
    onClick = new EventEmitter();
}
