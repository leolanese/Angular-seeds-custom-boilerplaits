import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContainerComponent } from "./container.component";

@NgModule({
  declarations: [ContainerComponent],
  imports: [CommonModule],
  providers: [],
  exports: [ContainerComponent]
})
export class ContainerComponentModule {}
