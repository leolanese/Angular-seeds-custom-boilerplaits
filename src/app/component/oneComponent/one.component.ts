import { Component, OnInit } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';

import { faCoffee, faCloudRain, faDiceD6 } from '@fortawesome/free-solid-svg-icons';
import {ApiService} from '../../services';

const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


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


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.httpData$;

  fromChild($event: any) {
    console.log($event);
    this.fetchData();
  }

  private fetchData() {
    this.httpData$ = this.apiService.getData('todos');

    // TODO: pass Observable to the child one.component and parse
    // this.apiService.getData('users').subscribe(data => {
    //   this.httpData$ = data;
    //   console.log(data);
    // });
  }
}
