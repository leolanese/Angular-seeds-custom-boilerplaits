import { Component, OnInit } from "@angular/core";

import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { faCoffee, faCloudRain, faDiceD6 } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "componentTwo-app",
  templateUrl: "./two.component.html",
  styleUrls: ["./two.component.css"]
})
export class TwoComponent {
  title = "app";
  faCoffee = faCoffee;
  faCloudRain = faCloudRain;
  faDiceD6 = faDiceD6;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {}
}
