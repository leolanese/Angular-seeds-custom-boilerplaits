import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { faCoffee, faCloudRain, faDiceD6, faCloud } from '@fortawesome/free-solid-svg-icons';

import { PictureService, ApiService, ApiCarService } from '../services';

@Component({
  selector: 'test-app',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit {
  title = 'app';
  faCoffee = faCoffee;
  faCloudRain = faCloudRain;
  faCloud = faCloud;
  faDiceD6 = faDiceD6;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private pictureService: PictureService
  ) {}

  ngOnInit(): void {}
}
