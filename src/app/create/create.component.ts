import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormsModule,FormControl,FormBuilder,Validators, RequiredValidator} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { IdGenerate } from '../shared/id-generate';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit  {
  

  ProductForm!: FormGroup;
  id:number=0;
  constructor(public fb:FormBuilder,
    private productservice: ProductService,
    private router: ActivatedRoute,
    private route : Router,
  ){ 
 
}


  ngOnInit(): void{

    this.ProductForm = this.fb.group({
      Productid : ['',[Validators.required]],
      Productname : ['',[Validators.required]],
      Productimg : ['',[Validators.required]],                            
      Description : ['',[Validators.required]],
      Date : ['',[Validators.required]],
      Category :['',[Validators.required]],
      Price : ['',[Validators.required]],
    });
  }

  addProduct(){
    const id= new IdGenerate();
    console.log(this.ProductForm)
    const p ={id:'P'+id.idGenerate(),
      name:this.ProductForm.controls['Productname'].value,
      image:this.ProductForm.controls['Productimg'].value,
      category:this.ProductForm.controls['Category'].value,
      discription:this.ProductForm.controls['Description'].value,
      date :this.ProductForm.controls['Date'].value,
      price:this.ProductForm.controls['Price'].value,}

      this.productservice.addProduct(p)
      this.route.navigate(["/dashboard"])
  }
  // addProduct() {
  //   let formModel = this.ProductForm.value;
  //   formModel.id = this.id;
  //    this.productservice.addProduct(formModel);
      
    
   


  Close(){
    this.route.navigate(["/dashboard"])
  }

}
  


