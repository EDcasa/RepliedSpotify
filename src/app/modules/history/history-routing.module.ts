import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryPagesComponent } from './pages/history-pages/history-pages.component';

const routes: Routes = [
  {
    path:'',
    component: HistoryPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
