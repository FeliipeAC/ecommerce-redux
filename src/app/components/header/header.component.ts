import { Store, select } from '@ngrx/store';
import { CarrinhoModel } from './../../models/carrinho-model';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface AppStore { carrinho: CarrinhoModel; }

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  carrinho$: Observable<CarrinhoModel>;

  constructor(
    private store: Store<AppStore>,
    public iconReg: MatIconRegistry,
    public sanitizer: DomSanitizer,
    private route: Router) {

    this.carrinho$ = this.store.pipe(select('carrinho'));

    iconReg.addSvgIcon('icon-shopping-cart', sanitizer.bypassSecurityTrustResourceUrl('/assets/svgs/shopping-cart.svg'));
    iconReg.addSvgIcon('icon-smartphone', sanitizer.bypassSecurityTrustResourceUrl('/assets/svgs/smartphone.svg'));
  }

  ngOnInit(): void {
  }

  navigateToCart(): void {
    this.route.navigate(['/carrinho']);
  }

}
