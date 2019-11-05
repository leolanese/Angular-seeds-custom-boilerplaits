import { Component, OnInit } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

import { faCoffee, faCloudRain, faDiceD6 } from '@fortawesome/free-solid-svg-icons';
import { ApiService, PictureService } from '../../services';

@Component({
  selector: 'oneComponent-app',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  title = 'app';
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
    private pictureService: PictureService
  ) {}

  fromChild($event: any) {
    this.fetchData();
  }

  ngOnInit(): void {
    this.fetchData();
  }

  getUpperCase(name: string): Observable<string> {
    console.log('getUpperCaseName', name);
    return of(name).pipe(
      // delay(2000),
      map((str: string) => str.toUpperCase()),
      tap((str: string) => console.log('uppercase:', str))
    );
  }

  public trackByData(index, user) {
    return !user ? null : user.userId;
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
