
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  productList: Product[]=[]
product: any;


  constructor( private productService : ProductService ){}

  ngOnInit(): void {

   this.productList = this.productService.getProducts();
  }
  getProduct() {
    return this.productService.getProducts

  }
  deleteProduct(id: string) {
    this.productService.deleteProduct(id);
     this.productList = this.productService.getProducts()
     alert("product delated successfully")
 
}
}
