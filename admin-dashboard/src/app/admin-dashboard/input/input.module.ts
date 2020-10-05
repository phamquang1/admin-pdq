import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputRoutingModule } from './input-routing.module';
import { InputComponent } from './input.component';


@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    InputRoutingModule
  ]
})
export class InputModule { }
