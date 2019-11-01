import { Component, OnInit } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';

import { faCoffee, faCloudRain, faDiceD6 } from '@fortawesome/free-solid-svg-icons';
import {ApiService} from '../../services';

@Component({
  selector: "oneComponent-app",
  templateUrl: "./one.component.html",
  styleUrls: ["./one.component.css"]
})
export class OneComponent {
  title = "app";
  faCoffee = faCoffee;
  faCloudRain = faCloudRain;
  faDiceD6 = faDiceD6;
  httpData$: any;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private apiService: ApiService,
  ) {}

  fromChild($event: any) {
    console.log($event);
    this.fetchData();
  }

  private fetchData() {
    // TODO: pass Observable to the child one.component and parse
    this.apiService.getData('users').subscribe(data => {
      this.httpData$ = data;
      console.log(data);
    });
  }
}
