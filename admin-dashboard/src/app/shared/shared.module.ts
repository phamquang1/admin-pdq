import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';



import { FlexLayoutModule } from '@angular/flex-layout';

import { NotifierOptions, NotifierModule } from 'angular-notifier';
import { DialogConfirmComponent } from './dialog-component/dialog-confirm/dialog-confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './button/button.component';
import { AlertComponent } from './alert/alert.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicDemoComponent } from './dynamic-demo/dynamic-demo.component';

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};
@NgModule({
  declarations: [

    DialogConfirmComponent,
    ButtonComponent,
    AlertComponent,
    DynamicComponent,
    DynamicDemoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,

    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    MatTabsModule,

    FlexLayoutModule,
    RouterModule,
    NotifierModule.withConfig(customNotifierOptions),
    TranslateModule


  ],
  exports: [


    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    MatTabsModule,

    //noityfi
    NotifierModule,
    TranslateModule,
    // component
    ButtonComponent,
    AlertComponent
  ],
  entryComponents: [
    DialogConfirmComponent,
    DynamicDemoComponent,
    DynamicComponent
  ]
})
export class SharedModule { }
