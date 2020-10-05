import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocompleteRoutingModule } from './autocomplete-routing.module';
import { AutocompleteComponent } from './autocomplete.component';


@NgModule({
  declarations: [AutocompleteComponent],
  imports: [
    CommonModule,
    AutocompleteRoutingModule
  ]
})
export class AutocompleteModule { }
