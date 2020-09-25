import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule } from "@angular/forms";

// đá ngôn ngữ
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
//login gg
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';


export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient],
      }
    })
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
