import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'four-component',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
