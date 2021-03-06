import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule } from "@angular/forms";
import { JwtModule } from '@auth0/angular-jwt';

// đá ngôn ngữ
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
// google MAP

// login gg
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';
import { HttpErrorInterceptor } from './cores/helpers/http-error.interceptor';
// ngx-spinner
import {NgxSpinnerModule, NgxSpinnerService} from 'ngx-spinner'
import { SpinnerInterceptor } from './cores/helpers/spinner.interceptor';


export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json' );
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    
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
    }),
    
   
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: function  tokenGetter() {
    //          return     localStorage.getItem('access_token');},  Chức năng này được sử dụng để tùy chỉnh cách JwtModule nhận mã thông báo truy cập JWT từ bộ nhớ cục bộ.
    //     whitelistedDomains: ['localhost:4300','abc.com'], Trong mảng này, bạn có thể thêm bất kỳ tê n miền nào được phép nhận JWT như API công khai.
    //     blacklistedRoutes: ['http://localhost:3000/auth/login'] rong mảng này, bạn có thể thêm các tuyến đường không được phép nhận mã thông báo JWT.
    //   }
    // })
  ],
  providers: [
    // {provide : HTTP_INTERCEPTORS, useClass : HttpErrorInterceptor, multi : true},
    {provide : HTTP_INTERCEPTORS , useClass : SpinnerInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
