import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividerRoutingModule } from './divider-routing.module';
import { DividerComponent } from './divider.component';
import {AgmCoreModule} from '@agm/core';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [DividerComponent],
  imports: [
    CommonModule,
    DividerRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDZNlWsKlQY79SrMNUD_tHFSrYVKd4VCPk',
      libraries: ["places", "geometry"]
    }),
    SharedModule

  ]
})
export class DividerModule { }
