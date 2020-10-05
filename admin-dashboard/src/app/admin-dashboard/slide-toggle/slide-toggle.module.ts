import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlideToggleRoutingModule } from './slide-toggle-routing.module';
import { SlideToggleComponent } from './slide-toggle.component';


@NgModule({
  declarations: [SlideToggleComponent],
  imports: [
    CommonModule,
    SlideToggleRoutingModule
  ]
})
export class SlideToggleModule { }
