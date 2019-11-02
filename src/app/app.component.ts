import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export const ROOT_SELECTOR = 'app-container';

@Component({
  selector: ROOT_SELECTOR,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: '<test-app></test-app>'
})
export class AppComponent {
  title = 'test-app';

  constructor() {}

  public ngOnInit() {
    // console.log('Initial App State', this.appState.state);
  }

}



