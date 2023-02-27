import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderEquipmentComponent } from './order-equipment/order-equipment.component';
import { AdminComponent } from './admin/admin.component';
import { OrderComponent } from './order/order.component';



const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"Order",component:OrderComponent,},
  {path:"OrderEqu",component:OrderEquipmentComponent},
  {path:"Admin",component:AdminComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
