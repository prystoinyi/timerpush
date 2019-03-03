import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    Material.MatTabsModule,
    Material.MatToolbarModule
  ],
  exports: [
    Material.MatTabsModule,
    Material.MatToolbarModule
  ],
  declarations: []
})
export class MaterialModule { }
