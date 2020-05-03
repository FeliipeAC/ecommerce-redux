import { map } from 'rxjs/operators';
import { ProdutoModel } from './../models/produto-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Promise<ProdutoModel[]>
  getProducts(): Promise<ProdutoModel[]> {
    return this.http.get(this.url + '/products')
      .toPromise()
      .then((produtos: ProdutoModel[]) => {
        return produtos;
      });
  }
}
