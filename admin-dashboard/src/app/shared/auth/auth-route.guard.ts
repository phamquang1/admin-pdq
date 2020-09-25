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
    
  ){
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return 
    
  }
  
}
