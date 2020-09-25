import { Component, OnInit } from '@angular/core';
import { appModuleAnimation } from 'src/app/shared/animations/router-transition';
import { SocialAuthService, SocialUser, AmazonLoginProvider } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

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
    private authService: SocialAuthService
  ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;
      console.log("user",this.user)
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
