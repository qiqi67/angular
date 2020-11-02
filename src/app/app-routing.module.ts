import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './component/news/news.component';
import { News1Component } from './component/news1/news1.component';

const routes: Routes = [
  {
    path:"index",component:NewsComponent
  },
  {
    path:"news",component:News1Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
