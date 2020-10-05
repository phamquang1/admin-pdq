import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxRoutingModule } from './checkbox-routing.module';
import { CheckboxComponent } from './checkbox.component';


@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule,
    CheckboxRoutingModule
  ]
})
export class CheckboxModule { }
