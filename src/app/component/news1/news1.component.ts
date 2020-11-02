import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient, HttpClientModule } from "@angular/common/http";

// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-news1',
  templateUrl: './news1.component.html',
  styleUrls: ['./news1.component.less'] 
})
export class News1Component implements OnInit {

  @Input("msg") msg:any; //接受父组件的数据 使用 angular 内置 input 模块
  @Input("mh") mh:any; //接受父组件的数据 使用 angular 内置 input 模块
  public pmsg:string="子组件的数据"
  //private router:any
  constructor( private http:HttpClient) { }

  ngOnInit(): void {
    // this.router.queryParams.subscribe((data)=>{
    //   console.log(data)
    // })
  }
  run(){
    alert("子组件的方法")  
  }
  getdata(){
   
    alert("data")
  }
  getshuju(){
      this.http.get('http://a.itying.com/api/productlist')
        .subscribe((res: Response) => {
         console.log(res);
      })
  }
}
