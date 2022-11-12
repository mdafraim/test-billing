import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'invoice-details', component: InvoiceDetailsComponent},
  {path: 'add-invoice', component: AddInvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
