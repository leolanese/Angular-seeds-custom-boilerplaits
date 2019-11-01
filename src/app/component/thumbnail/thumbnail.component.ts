import { Component, Input } from '@angular/core';

@Component({
  selector: 'thumbnail',
  styleUrls: ['./thumbnail.component.css'],
  templateUrl: './thumbnail.component.html'
})

export class ThumbnailComponent {
  @Input()
  public srcUrl = '';
}
