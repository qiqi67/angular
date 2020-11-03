import { Directive,Input,ElementRef, SimpleChanges } from '@angular/core';
// 内置ElementRef  直接操作DOM元素
@Directive({
  selector: '[appDemo1]'
})
export class Demo1Directive {
  @Input() appDemo1:string;
  constructor(public el:ElementRef) { 
    //console.log(this.appDemo1+"===========") // undsfined

  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // console.log(JSON.stringify(changes)+"-----------")
    this.el.nativeElement.style.color=this.appDemo1
    
  }
}
