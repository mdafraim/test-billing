import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';


@NgModule({
  declarations: [
    InvoiceDetailsComponent,
    AddInvoiceComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
