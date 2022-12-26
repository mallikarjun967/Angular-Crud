
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getUsersByID(id: any) {
    throw new Error('Method not implemented.');
  }
  
  
 URL = "http://localhost:4200/create";

   private ProductList:Product[]=[
    {
      id: '1',
      name:'mobile',
      image:'https://th.bing.com/th/id/OIP.eLpgn4VsDeBfjK10iNKkpgHaF_?w=252&h=203&c=7&r=0&o=5&dpr=1.2&pid=1.7',
      category:'electronic',
      discription:'good',
      date : '20-10-2000',
      price: 20000,
    },
    {
      id:'2',
      name:'fan',
      image:'https://th.bing.com/th/id/OIP.msuJUN0EAX30S0uXyHGingHaEA?w=321&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7',
      category:'electronic',
      discription:'good',
      date : '20-10-2000',
      price: 20000,
    },
    {
      id: '3',
      name:'mango',
      image:'https://th.bing.com/th/id/R.31fbf6020364143fc7bd164c9549a1ca?rik=MECceWuBflW8cQ&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2017%2f01%2fMango-Photos.jpg&ehk=7okhhJb9mePTWfFJMaEJfhzOreiVqySOJy9JfoZ9NF8%3d&risl=&pid=ImgRaw&r=0',
      category:'fruit',
      discription:'good',
      date : '20-10-2000',
      price: 20000,

    },
   
  ]

  
  constructor() { }
  cheackusenameandpassword(username:string,psw:string){
    if(username == "malli" && psw == "malli123" ){
      localStorage.setItem('username',"admin");
      return true;
    }
    else{
      return false;
    }

  }

  getProducts(){
   return this.ProductList
  }
  getProductsByID(id : string){
    return this.ProductList.find(x => x['id'] == id)
  }
  addProduct(product : Product){
    // product.id = new Date().getTime();
    this.ProductList.push(product);
  }
  deleteProduct(id:string){
   return this.ProductList=this.ProductList.filter(x => x.id != id);
  }
   editProduct(product: Product) {
    const productIndex = this.ProductList.findIndex(x => x.id == product.id);
    if (productIndex != null && productIndex != undefined) {
        this.ProductList[productIndex] = product;
    }
  }
}

  