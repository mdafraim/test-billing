import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { ExpenseReportComponent } from './expense-report/expense-report.component';
import { ProfitLossComponent } from './profit-loss/profit-loss.component';
import { TaxReportComponent } from './tax-report/tax-report.component';


@NgModule({
  declarations: [
    SalesReportComponent,
    ExpenseReportComponent,
    ProfitLossComponent,
    TaxReportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
