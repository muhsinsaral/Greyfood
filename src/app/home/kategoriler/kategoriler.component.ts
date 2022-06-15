import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-kategoriler',
  templateUrl: './kategoriler.component.html',
  styleUrls: ['./kategoriler.component.scss'],
})
export class KategorilerComponent implements OnInit {
  categories: any;
  
  constructor(private categoriesService: CategoriesService, private productService: ProductService) {}

  ngOnInit(): void {
    this.getCategories()
    
  }
  getCategories(): void {
    this.categories = this.categoriesService.getCategories();
  }
  
}
