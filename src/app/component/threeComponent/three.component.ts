import { Component, OnInit } from "@angular/core";

import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { faCoffee, faCloudRain, faDiceD6 } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: "componentThree-app",
  templateUrl: "./three.component.html",
  styleUrls: ["./three.component.css"]
})
export class ThreeComponent {
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
