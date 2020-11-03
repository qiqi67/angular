import { Directive,EventEmitter,Output } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})

export class DemoDirective {
@Output() sendMessage=new EventEmitter()
  constructor() {
    console.log("指令中的构造函数执行了")
    setTimeout(() => {
      this.sendMessage.emit({
        color:'red',
        message:"指令数据"
      })
    }, 2000);
   }

}
