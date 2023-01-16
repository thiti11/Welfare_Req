import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  
})
export class RegisterComponent implements OnInit {

 
  formRegister: FormGroup;

  constructor(
    private http:HttpClient, 
    private formBuilder: FormBuilder,
    private router:Router,
    private dataService: ApiService

    ) { 
      this.formRegister = this.formBuilder.group({
        Username:['', Validators.required],
        Password:['', Validators.required] ,
        Firstname:['', Validators.required],
        Lastname:['', Validators.required] ,
        EmpNo:['', Validators.required] ,
        Position:['', Validators.required] ,
        Department:['', Validators.required] ,
        Section:['', Validators.required],
        Type_of_Employee:['', Validators.required] ,
        Employee_Detail:['', Validators.required], 
        Joined_date:['', Validators.required] ,
    
    
      }
      );
      
    

    }

    
 

  ngOnInit(): void {

  }
  Postdata(formRegister:any)
  {
    this.dataService.userregistration(
      formRegister.value.Username,
      formRegister.value.Password,
      formRegister.value.Firstname,
      formRegister.value.Lastname,
      formRegister.value.EmpNo,
      formRegister.value.Position,
      formRegister.value.Department,
      formRegister.value.Section,
      formRegister.value.Type_of_Employee,
      formRegister.value.Employee_Detail,
      formRegister.value.Joined_date,
      )
      .pipe(first())
      .subscribe( data => {
        console.log(data);
  
       this.router.navigate(['login']);
      },
      error => {
      
      });

  }

  
  

}
