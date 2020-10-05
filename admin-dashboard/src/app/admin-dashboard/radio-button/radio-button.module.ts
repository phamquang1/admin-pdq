import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioButtonRoutingModule } from './radio-button-routing.module';
import { RadioButtonComponent } from './radio-button.component';


@NgModule({
  declarations: [RadioButtonComponent],
  imports: [
    CommonModule,
    RadioButtonRoutingModule
  ]
})
export class RadioButtonModule { }
