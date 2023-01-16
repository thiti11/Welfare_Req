import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { OrderEquipmentComponent } from './order-equipment/order-equipment.component';
import { AdminComponent } from './admin/admin.component';


import {FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule
    
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
 
    OrderEquipmentComponent,
    AdminComponent,
    OrderComponent,
 
   
  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
