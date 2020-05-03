import { ProdutoModel } from './../../models/produto-model';
import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {

  products: ProdutoModel[];

  constructor(private productsService: ProdutosService) { }

  ngOnInit(): void {
    this.productsService.getProducts()
      .then(produtos => {
        this.products = produtos;
        console.log(produtos);
      });
  }

}
