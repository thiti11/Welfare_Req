
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-order-equipment',
  templateUrl: './order-equipment.component.html',
  styleUrls: ['./order-equipment.component.css']
})
export class OrderEquipmentComponent implements OnInit {

  constructor(  private dataService: ApiService,
  
   
    ){}
  ngOnInit(): void {

  
   
  }

}
