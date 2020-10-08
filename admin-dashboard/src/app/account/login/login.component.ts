import { Component, OnInit } from '@angular/core';
import { appModuleAnimation } from 'src/app/shared/animations/router-transition';
import { SocialAuthService, SocialUser, AmazonLoginProvider } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner.service';

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
    private spinner : SpinnerService,
    private route : Router
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
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
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
