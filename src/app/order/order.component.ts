
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { ApiService } from '../api.service';
import { user } from '../user';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

 /* loginbtn:boolean;
  logoutbtn:boolean;
  

  constructor(  private dataService: ApiService, private route: ActivatedRoute){

    dataService.getLoggedInName.subscribe(name => this.changeName (name));

    if(this.dataService.isLoggedIn()){
      console.log("loggedin");
        this.loginbtn=false;
        this.logoutbtn=true
    }else{
      this.loginbtn=true;
      this.logoutbtn=false

    }
  }
  private changeName(name: boolean):void{
    this.logoutbtn = !name;
    this.loginbtn = !name;
  }
  logout(){
    this.dataService.deleteToken();
    window.location.href = window.location.href;
  }
*/

  ngOnInit(): void { 
    
  }
    

}
