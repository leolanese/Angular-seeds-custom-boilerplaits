import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'test-button',
  template: `<h3 (click)="onClick.emit($event)">Click</h3>`
})
export class ButtonComponent {

  @Input() input: string;
  @Output() onClick = new EventEmitter();
}
