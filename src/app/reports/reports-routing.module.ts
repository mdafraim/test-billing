import { TaxReportComponent } from './tax-report/tax-report.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { ProfitLossComponent } from './profit-loss/profit-loss.component';
import { ExpenseReportComponent } from './expense-report/expense-report.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'expense-report', component: ExpenseReportComponent },
  { path: 'profit-loss', component: ProfitLossComponent },
  { path: 'sales-report', component: SalesReportComponent},
  { path: 'tax-report', component: TaxReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
