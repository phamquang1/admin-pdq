import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RipplesComponent } from './ripples.component';


const routes: Routes = [
  {
    path : '',
    component : RipplesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RipplesRoutingModule { }
