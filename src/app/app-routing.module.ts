import { ReportsModule } from './reports/reports.module';
import { AccountModule } from './account/account.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)},
  { path: 'invoices', loadChildren:() => import('./invoices/invoices.module').then (m => m.InvoicesModule)},
  { path: 'account', loadChildren:() => import('./account/account.module').then (m => m.AccountModule)},
  { path: 'reports', loadChildren:() => import('./reports/reports.module').then (m => ReportsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
