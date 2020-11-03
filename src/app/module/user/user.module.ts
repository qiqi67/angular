import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './user.component';
import { CommonServiceService } from './services/common-service.service';



@NgModule({
  //当前模块中的组件
  declarations: [ProfileComponent, AddressComponent, OrderComponent, UserComponent],
  imports: [
    CommonModule
  ],
  //引入当前模块中的服务
  providers:[CommonServiceService],
  //导出组件 可以在其他模快中使用
  exports:[ProfileComponent]
})
export class UserModule { }
