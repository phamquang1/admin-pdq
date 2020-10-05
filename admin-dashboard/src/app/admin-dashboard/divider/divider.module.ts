import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividerRoutingModule } from './divider-routing.module';
import { DividerComponent } from './divider.component';


@NgModule({
  declarations: [DividerComponent],
  imports: [
    CommonModule,
    DividerRoutingModule
  ]
})
export class DividerModule { }
