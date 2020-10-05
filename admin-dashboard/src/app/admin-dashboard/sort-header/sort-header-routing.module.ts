import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortHeaderComponent } from './sort-header.component';


const routes: Routes = [
  {
    path : '',
    component : SortHeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortHeaderRoutingModule { }
