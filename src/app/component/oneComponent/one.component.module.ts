import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OneComponent } from "./one.component";
import {MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [OneComponent],
  imports: [CommonModule, MatIconModule, MatToolbarModule, MatSidenavModule],
  providers: [],
  exports: [OneComponent]
})
export class OneComponentModule {}
