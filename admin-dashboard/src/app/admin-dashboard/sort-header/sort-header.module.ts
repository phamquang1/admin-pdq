import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortHeaderRoutingModule } from './sort-header-routing.module';
import { SortHeaderComponent } from './sort-header.component';


@NgModule({
  declarations: [SortHeaderComponent],
  imports: [
    CommonModule,
    SortHeaderRoutingModule
  ]
})
export class SortHeaderModule { }
