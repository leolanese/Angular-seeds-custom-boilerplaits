import { Component, OnInit } from "@angular/core";

import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { faCoffee, faCloudRain, faDiceD6 } from "@fortawesome/free-solid-svg-icons";
import {ApiCarService} from '../../services/api.car.service';
import {ApiResponse} from '../../../interfaces/response.interface';

@Component({
  selector: "componentThree-app",
  templateUrl: "./three.component.html",
  styleUrls: ["./three.component.css"]
})
export class ThreeComponent implements OnInit {
  title = "app";
  faCoffee = faCoffee;
  faCloudRain = faCloudRain;
  faDiceD6 = faDiceD6;
  showDialog: boolean;
  valueLabelButton = 'View';

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  private httpDataCars$: Observable<ApiResponse>;
  private httpDataCar$: Observable<ApiResponse>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private apiCarService: ApiCarService,
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fromChild(e: Event) {
    this.showDialog = !this.showDialog;
  }

  fetchData () {
    this.httpDataCars$ = this.apiCarService.getDataCars();
  }

  onClickCar(event, i) {
    console.log(i);
    this.httpDataCar$ = this.apiCarService.getDataCar(i);
  }

}
