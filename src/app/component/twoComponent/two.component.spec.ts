import { LayoutModule } from '@angular/cdk/layout';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TwoComponent } from './two.component';
import { configureTestSuite } from 'ng-bullet';

describe('Validate TwoComponent', () => {
  let component: TwoComponent;
  let fixture: ComponentFixture<TwoComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [TwoComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
