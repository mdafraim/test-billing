import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustoberDetailsComponent } from './custober-details/custober-details.component';
import { AddCustoberComponent } from './add-custober/add-custober.component';


@NgModule({
  declarations: [
    CustoberDetailsComponent,
    AddCustoberComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
