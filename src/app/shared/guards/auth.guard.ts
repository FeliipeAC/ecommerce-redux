import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppStore } from './../../components/header/header.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<AppStore>,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const rotaAtual = next.url[0].path;
    if (rotaAtual === 'checkout') {
      this.store.pipe(select('carrinho'))
        .subscribe(cart => {
          if (cart.items.length === 0) {
            this.router.navigate(['/home']);
            return false;
          }
        }).unsubscribe();
    }
    return true;
  }

}
