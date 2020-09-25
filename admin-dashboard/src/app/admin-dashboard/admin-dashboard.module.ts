import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';

import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LangugeComponent } from './components/languge/languge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    SlidebarComponent,
    ProfileComponent,
    LangugeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminDashboardRoutingModule,
    SharedModule,
    TranslateModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    SlidebarComponent,
    ProfileComponent,
    LangugeComponent,
  ]
})
export class AdminDashboardModule { }
