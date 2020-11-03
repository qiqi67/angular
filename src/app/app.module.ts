import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceService } from './componnets/service.service';
import { NewsComponent } from './component/news/news.component';
import { News1Component } from './component/news1/news1.component';
//导入自定义模块
import { UserModule } from './module/user/user.module';
import { DemoDirective } from './directives/demo.directive';
import { Demo1Directive } from './directives/demo1.directive';
import { SelfpipPipe } from './pip/selfpip.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    News1Component,
    DemoDirective,
    Demo1Directive,
    SelfpipPipe,
  ],
//引入自定义模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
