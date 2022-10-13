import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

const routes: Routes = [
  { path: '', component: AccountListComponent },
  { path: 'account/:accountId', component: AccountDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
