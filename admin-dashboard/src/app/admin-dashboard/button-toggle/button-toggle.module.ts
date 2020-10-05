import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonToggleRoutingModule } from './button-toggle-routing.module';
import { ButtonToggleComponent } from './button-toggle.component';


@NgModule({
  declarations: [ButtonToggleComponent],
  imports: [
    CommonModule,
    ButtonToggleRoutingModule
  ]
})
export class ButtonToggleModule { }
