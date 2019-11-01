import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OneComponent } from "./one.component";
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [OneComponent],
  imports: [CommonModule, MatIconModule],
  providers: [],
  exports: [OneComponent]
})
export class ContainerComponentModule {}
