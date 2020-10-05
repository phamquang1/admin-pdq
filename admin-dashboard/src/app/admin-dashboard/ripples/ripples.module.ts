import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RipplesRoutingModule } from './ripples-routing.module';
import { RipplesComponent } from './ripples.component';


@NgModule({
  declarations: [RipplesComponent],
  imports: [
    CommonModule,
    RipplesRoutingModule
  ]
})
export class RipplesModule { }
