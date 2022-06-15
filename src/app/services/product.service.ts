import { Injectable } from '@angular/core';
import { Products } from './products.datasource';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(){
    return Products;
  }
  constructor() { }
}
