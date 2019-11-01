import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ThreeComponent } from "./three.component";
import {MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [ThreeComponent],
  imports: [CommonModule, MatIconModule, MatToolbarModule, MatSidenavModule],
  providers: [],
  exports: [ThreeComponent]
})
export class ThreeComponentModule {}
