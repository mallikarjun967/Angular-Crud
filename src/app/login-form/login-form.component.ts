import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers:[ProductService]
})
export class LoginFormComponent implements OnInit {

  loginForm!:FormGroup;
  msg!: string ;
  constructor(private fb:FormBuilder,private router:Router, private product:ProductService){}

  ngOnInit(): void 
  {
    this.loginForm = this.fb.group({
      userName:['',[Validators.required]],
      passWord:['',[Validators.required]]
    });
  }
  public myError = (controlName: string, errorName: string) =>{
    return this.loginForm.controls[controlName].hasError(errorName);
    }

    check(username:string,psw:string) {
      var output =this.product.cheackusenameandpassword(username,psw);
      if(output == true)
      {
        this.router.navigate(['/dashboard']);
      }
      else{
        this.msg ='*invalid username or password'
      }
      }
      
  
}