import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SocialAuthService } from 'angularx-social-login';
import { LoginComponent } from 'src/app/account/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthRouteGuard implements CanActivate {
  constructor(
    private router: Router
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      const accessToken = localStorage.getItem('access_token');
      if(accessToken){
        return true;
      } else {
        this.router.navigate(['/account/login'],{
          queryParams: { returnUrl: state.url },
        });
        return false ;
      }
    

  }

}
