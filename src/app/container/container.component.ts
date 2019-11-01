import { Component, OnInit } from "@angular/core";

import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { faCoffee, faCloudRain, faDiceD6 } from "@fortawesome/free-solid-svg-icons";
import { SomeService } from "../services";

@Component({
  selector: "test-app",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.css"]
})
export class ContainerComponent {
  title = "app";
  faCoffee = faCoffee;
  faCloudRain = faCloudRain;
  faDiceD6 = faDiceD6;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private pictureService: SomeService
  ) {}
}

// test test
