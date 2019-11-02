import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';

import { OneComponent } from './../component/oneComponent/one.component';
import { TwoComponent } from './../component/twoComponent/two.component';
import { ThreeComponent } from './../component/threeComponent/three.component';

import { configureTestSuite } from 'ng-bullet';

describe('Validate Container', () => {
  let component: OneComponent;
  let fixture: ComponentFixture<OneComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [
        OneComponent,
        TwoComponent,
        ThreeComponent
      ],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

});
