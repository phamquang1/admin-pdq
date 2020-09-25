import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainWebsiteRoutingModule } from './main-website-routing.module';
import { MainWebsiteComponent } from './main-website.component';


@NgModule({
  declarations: [MainWebsiteComponent],
  imports: [
    CommonModule,
    MainWebsiteRoutingModule
  ]
})
export class MainWebsiteModule { }
