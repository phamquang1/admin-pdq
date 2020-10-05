import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BottomSheetRoutingModule } from './bottom-sheet-routing.module';
import { BottomSheetComponent } from './bottom-sheet.component';


@NgModule({
  declarations: [BottomSheetComponent],
  imports: [
    CommonModule,
    BottomSheetRoutingModule
  ]
})
export class BottomSheetModule { }
