import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceService } from './componnets/service.service';
import { NewsComponent } from './component/news/news.component';
import { News1Component } from './component/news1/news1.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    News1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
