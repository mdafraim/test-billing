import { AddCustoberComponent } from './add-custober/add-custober.component';
import { CustoberDetailsComponent } from './custober-details/custober-details.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'custoberDetails', component: CustoberDetailsComponent},
  {path: 'addCustober', component: AddCustoberComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
