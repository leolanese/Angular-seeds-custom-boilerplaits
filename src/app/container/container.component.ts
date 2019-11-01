import { Component, OnInit } from "@angular/core";

import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import {Observable, Subscribable, Subscription} from 'rxjs';
import { map } from "rxjs/operators";
import { faCoffee, faCloudRain, faDiceD6 } from "@fortawesome/free-solid-svg-icons";

import { PictureService, ApiService } from "../services";

@Component({
  selector: "test-app",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.css"]
})
export class ContainerComponent implements OnInit {
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
    private pictureService: PictureService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
      // TODO: pass Observable to the child one.component and parse
      this.apiService.getData('todos').subscribe(data => {
        this.httpData$ = data;
        console.log(data);
      });
    }

}

