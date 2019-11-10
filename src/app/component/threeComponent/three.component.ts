import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiCarService } from '../../services/api.car.service';
import { ApiResponse } from '../../../interfaces/response.interface';

@Component({
  selector: 'componentThree-app',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreeComponent implements OnInit {
  showDialog: boolean;
  valueLabelButton = 'View';

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  public httpDataCars$: Observable<ApiResponse>;
  public httpDataCar$: Observable<ApiResponse>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private apiCarService: ApiCarService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fromChild(e: Event) {
    this.showDialog = !this.showDialog;
  }

  fetchData() {
    this.httpDataCars$ = this.apiCarService.getDataCars();
  }

  onClickCar(event, i) {
    console.log(i);
    this.httpDataCar$ = this.apiCarService.getDataCar(i);
  }
}
