import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  getdata(){
    //数据测试服务 service服务使用
    alert("数据获取成功")
  }
}
