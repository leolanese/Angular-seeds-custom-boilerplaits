import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TwoComponent } from "./two.component";
import {MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [TwoComponent],
  imports: [CommonModule, MatIconModule, MatToolbarModule, MatSidenavModule],
  providers: [],
  exports: [TwoComponent]
})
export class TwoComponentModule {}
