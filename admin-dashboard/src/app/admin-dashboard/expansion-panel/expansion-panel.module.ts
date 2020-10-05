import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpansionPanelRoutingModule } from './expansion-panel-routing.module';
import { ExpansionPanelComponent } from './expansion-panel.component';


@NgModule({
  declarations: [ExpansionPanelComponent],
  imports: [
    CommonModule,
    ExpansionPanelRoutingModule
  ]
})
export class ExpansionPanelModule { }
