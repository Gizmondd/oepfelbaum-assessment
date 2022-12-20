import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { Transaction } from '../interfaces/transaction';
import { Account } from '../interfaces/account';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  transactions! : Transaction[];
  balance: number = 0;

  columnsToDisplay = ['description', 'datetime', 'amount']

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const accountId = routeParams.get('accountId');

    this.http.get<Account[]>(environment.serverAdress + '/accounts').subscribe(
      (data: Account[]) => {
        data.forEach(account => {
          if (account.id == accountId) {
            this.balance = account.balance;
          }
        });
      }
    )

    this.http.get<Transaction[]>(environment.serverAdress + '/transactions/' + accountId).subscribe(
      (data: Transaction[]) => {
        this.transactions = data;
      }
    )
  }

  sortData(sort: Sort) {
    if (sort.active === 'datetime') {

      if (sort.direction === 'asc') {
        this.transactions.sort((a, b) => a.datetime.toString().localeCompare(b.datetime.toString()));
      } else {
        this.transactions.sort((a, b) => -1 * a.datetime.toString().localeCompare(b.datetime.toString()));
      }

      // Trigger Table change
      this.transactions = this.transactions.slice();
    }

  }

}
