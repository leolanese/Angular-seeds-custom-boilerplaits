import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TwoComponent } from "./two.component";
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [TwoComponent],
  imports: [CommonModule, MatIconModule],
  providers: [],
  exports: [TwoComponent]
})
export class ContainerComponentModule {}
