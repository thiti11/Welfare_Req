import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from  'rxjs';
import { user } from './user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

 
  redirectUrl!: string;
  baseUrl:string = "http://localhost:8080/api/";

  @Output () getLoggedInName: EventEmitter<any> = new EventEmitter();
 
 

  constructor(private httpClient: HttpClient) {}

  public userregistration(
    Username: any, 
    Password: any, 
    Firstname: any, 
    Lastname: any, 
    EmpNo: any, 
    Position: any,
    Department: any,
    Section: any, 
    Type_of_Employee: any, 
    Employee_Detail: any, 
    Joined_date: any)
    {
      return this.httpClient.post<any>(this.baseUrl + '/registerr.php',
      {
        Username,
        Password,
        Firstname,
        Lastname,
        EmpNo,
        Position,
        Department,
        Section,
        Type_of_Employee,
        Employee_Detail,
        Joined_date,
      })
      .pipe(map( user=>{
        
        return user;
      }));
  
    }
    public userlogin(
      Username: any,
      Password: any) {
        return this.httpClient.post<any>(this.baseUrl + '/login.php', {
          Username,
          Password
          
        })
        .pipe(map(user=>{
         // console.log(User.Username)
        this.setToken(user.Username);
        this.getLoggedInName.emit(true);
        return user;
    
        }));
    }
  
        setToken(token: string) {
          localStorage.setItem('token', token);
         }
       
        getToken() {
          return localStorage.getItem('token');
        }
     
        deleteToken() {
          localStorage.removeItem('token');
         }
        
        isLoggedIn(){
          const usertoken = this.getToken();
          if(usertoken != null){
            return true
          }
            return false;
        }

   
   

}
