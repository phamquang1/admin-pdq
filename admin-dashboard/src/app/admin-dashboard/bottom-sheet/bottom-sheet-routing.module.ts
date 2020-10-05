import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BottomSheetComponent } from './bottom-sheet.component';


const routes: Routes = [
  {
    path : '',
    component : BottomSheetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottomSheetRoutingModule { }
