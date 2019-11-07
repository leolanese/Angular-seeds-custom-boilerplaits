import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'test-button',
  template: `
    <h3 (click)="onClick.emit($event)">{{ valueLabelButton }}</h3>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input()
  input: string;

  @Input()
  valueLabelButton: 'ClickMe!';

  @Output()
  onClick = new EventEmitter();
}
