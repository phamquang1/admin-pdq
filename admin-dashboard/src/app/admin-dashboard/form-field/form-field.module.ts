import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormFieldRoutingModule } from './form-field-routing.module';
import { FormFieldComponent } from './form-field.component';


@NgModule({
  declarations: [FormFieldComponent],
  imports: [
    CommonModule,
    FormFieldRoutingModule
  ]
})
export class FormFieldModule { }
