import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressSpinnerRoutingModule } from './progress-spinner-routing.module';
import { ProgressSpinnerComponent } from './progress-spinner.component';


@NgModule({
  declarations: [ProgressSpinnerComponent],
  imports: [
    CommonModule,
    ProgressSpinnerRoutingModule
  ]
})
export class ProgressSpinnerModule { }
