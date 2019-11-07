import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'thumbnail',
  styleUrls: ['./thumbnail.component.css'],
  templateUrl: './thumbnail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ThumbnailComponent {
  @Input()
  public srcUrl = '';
}
