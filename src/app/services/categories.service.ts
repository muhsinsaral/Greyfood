import { Injectable } from '@angular/core';
import { Categories } from './categories.datasource';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  getCategories() {
    return Categories;
  }
  constructor() { }
}
