import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnackbarRoutingModule } from './snackbar-routing.module';
import { SnackbarComponent } from './snackbar.component';


@NgModule({
  declarations: [SnackbarComponent],
  imports: [
    CommonModule,
    SnackbarRoutingModule
  ]
})
export class SnackbarModule { }
