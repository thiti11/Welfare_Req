import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin: FormGroup;

  constructor(
    private http:HttpClient, 
    private formBuilder: FormBuilder,
    private router:Router,
    private dataService: ApiService

    ){
      this.formLogin = this.formBuilder.group({
        Username:['', [Validators.required]],
        Password:['', Validators.required] 
      });
    

    }

    Postdata(formLogin:any) {
      this.dataService.userlogin(
        formLogin.value.Username,
        formLogin.value.Password)
      .pipe(first())
      .subscribe(
        
        data=>{
         // console.log(data);
        //  if(data.message =='success'){
        
             //const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl :'/Order';
            //this.router.navigate(['/Order']);
         //  }
          
        },
        error => {
          alert("User name or password is incorrect")

        });
        }

    ngOnInit(): void{

    }
}