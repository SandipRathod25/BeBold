import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Datatype } from '../datatype';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  shopProducts(page: number, perPage: number): Observable<any[]> {
    const start = (page - 1) * perPage;
    return this._http.get<Datatype[]>(`http://localhost:3000/all-products?_start=${start}&_limit=${perPage}`)
  }
  makeupProducts() {
    return this._http.get<Datatype[]>(`http://localhost:3000/all-products?_start=5&_end=9`)
  }
  hairProducts() {
    return this._http.get<Datatype[]>(`http://localhost:3000/all-products?_start=9&_end=16`)
  }
  skinProducts(page: number, perPage: number) {
    const start = (page - 1) * perPage;
    return this._http.get<Datatype[]>(`http://localhost:3000/all-products?_start=${start}&_limit=${perPage}`)
  }
  getProduct(id: string) {
    return this._http.get<Datatype>(`http://localhost:3000/all-products/${id}`)
  }
  postCartData(data: Datatype) {
    return this._http.post<Datatype[]>(`http://localhost:3000/cart`, data)
  }
  getCartData() {
    return this._http.get<Datatype[]>(`http://localhost:3000/cart`)
  }
  deleteProduct(id: number) {
    return this._http.delete<Datatype>(`http://localhost:3000/cart/${id}`)
  }
}
