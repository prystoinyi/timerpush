import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    Material.MatTabsModule,
    Material.MatToolbarModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatButtonModule
  ],
  exports: [
    Material.MatTabsModule,
    Material.MatToolbarModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatButtonModule
  ],
  declarations: []
})
export class MaterialModule { }
