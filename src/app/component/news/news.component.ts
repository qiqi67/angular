import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../../componnets/service.service'; //服务组件的使用
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  //viewchild可以获取dom节点
  //也可以获取子组件实例 在子组件上标明#组件名即可 可以获取子组件的实例
  //子组件也可通过output 与 eventmitter给父组件通信  在子组件中引入ouptu模块 与eventemitter模块 使用装饰器@output private outer:any= new eventmitter() 
  // 例如 子组件中  this.outer.emit("传递的数据")
  //   父组件中 <child (outer)="父组件的方法（$event）"></child>
  //非父子间的通信可使用 服务（service）与loaclstorage进行组件间的通信
  @ViewChild("box") box: any;
  @ViewChild("child") child: any;
  public cmsg: any;
  message = "数据测试";
  public data: any[] = ['输出测试', "sdf", 123]
  public msg: string = "这是父组件中的数据"
  constructor(public sevice: ServiceService) {

  }

  //初始化生命周期函数 
  ngOnInit(): void {
    
  }
  // ngAfterContentInit(): void {
  //   //Called after ngOnInit when the component's or directive's content has been initialized.
  //   //Add 'implements AfterContentInit' to the class.
  //   this.cmsg = this.child.pmsg;
  // }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    
  }
  //dom节点加载完毕后的生命周期函数
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let dom = this.box.nativeElement;
    dom.style.background = 'red'
    this.cmsg = this.child.pmsg;
    this.sevice.getdata()
    console.log(this.box)
  }

  showWindows() {
    confirm("父组件的方法")
  }
  showChild() {
    this.child.run();
    
  }
}
