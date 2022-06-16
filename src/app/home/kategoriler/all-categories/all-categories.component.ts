import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit {
  
  size:number = 4;
  products: any;
  constructor(private productService: ProductService) {
    console.log(window.screen.width)
    if(window.screen.width <=1200) {
      this.size = 2
    }
   }

   
  ngOnInit(): void {
    this.getProducts()
    
  }
  getProducts(): void{
    this.products = this.productService.getProducts();
  }

  
}
