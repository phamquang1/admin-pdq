import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChipsRoutingModule } from './chips-routing.module';
import { ChipsComponent } from './chips.component';


@NgModule({
  declarations: [ChipsComponent],
  imports: [
    CommonModule,
    ChipsRoutingModule
  ]
})
export class ChipsModule { }
