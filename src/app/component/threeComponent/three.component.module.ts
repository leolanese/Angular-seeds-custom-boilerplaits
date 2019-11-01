import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ThreeComponent } from "./three.component";
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [ThreeComponent],
  imports: [CommonModule, MatIconModule],
  providers: [],
  exports: [ThreeComponent]
})
export class ContainerComponentModule {}
