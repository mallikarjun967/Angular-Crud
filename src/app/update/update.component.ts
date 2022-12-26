import { Component,OnInit } from '@angular/core';
import { FormGroup ,FormsModule,FormControl,FormBuilder,Validators, RequiredValidator} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  ProductForm!: FormGroup;
  id:any;

  constructor(public fb:FormBuilder,
    private productservice: ProductService,
    private router: ActivatedRoute,
    private route : Router){ 
  this.ProductForm = this.fb.group({
    Productid : ['',[Validators.required]],
    Productname : ['',[Validators.required]],
    Productimg : ['',[Validators.required]],                            
    Description : ['',[Validators.required]],
    Date : ['',[Validators.required]],
    Category :['',[Validators.required]],
    Price : ['',[Validators.required]],
  })

}

ngOnInit(): void{
  console.log(this.router.snapshot.params['id'])
  this.id = this.router.snapshot.params['id']
  const data = this.productservice.getProductsByID(this.id);
  console.log(data)
  if (data) {
    this.ProductForm.setValue({
      Productid:data.id,
      Productname:data.name,
      Productimg :data.image,                            
      Description :data.discription,
      Date :data.date,
      Category :data.category,
      Price :data.price,

    });
  }
  
}
updateProduct(){
  const p={id:this.id,
    name:this.ProductForm.controls['Productname'].value,
    image:this.ProductForm.controls['Productimg'].value,
    category:this.ProductForm.controls['Category'].value,
    discription:this.ProductForm.controls['Description'].value,
    date :this.ProductForm.controls['Date'].value,
    price:this.ProductForm.controls['Price'].value,}
  this.productservice.editProduct(p)
  this.route.navigate(["/dashboard"])
}
  Close(){
    this.route.navigate(["/dashboard"])
  }

}

