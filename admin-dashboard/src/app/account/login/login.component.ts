import { Component, OnInit } from '@angular/core';
import { appModuleAnimation } from 'src/app/shared/animations/router-transition';
import { SocialAuthService, SocialUser, AmazonLoginProvider } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner.service';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [appModuleAnimation()]
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  constructor(
    private authService: SocialAuthService,
    private spinner: SpinnerService,
    private route: Router,
    private http: HttpClient,
    private spinnerDemo: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;
      console.log("user",this.user)
      localStorage.setItem('access_token',user.idToken);
      localStorage.setItem('email',user.email);
      localStorage.setItem('name',user.name)
      setTimeout(()=>{
        this.route.navigate(['/admin/post'])
      },500)
      this.loggedIn = (user != null);
    });
  }
  
  signInWithGoogle(): void {
    this.spinnerDemo.show();
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    setTimeout(() => {
      this.http.get('https://reqres.in/api/users?page=2')
      .subscribe(data => {
        console.log(data);
        this.spinnerDemo.hide();
      });
    }, 4000);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithAmazon(): void {
    this.authService.signIn(AmazonLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
    
  }


}
