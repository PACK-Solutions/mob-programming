import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavAuthGuard implements CanActivate {

  isAuth = false;

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.isAuth) {
      this.router.navigate(['']).then();
    }
    return this.isAuth;
  }

  signIn(): void {
    this.isAuth = true;
    this.router.navigate(['/settings']).then();
  }

  signOut(): void{
    this.isAuth = false;
  }

}
