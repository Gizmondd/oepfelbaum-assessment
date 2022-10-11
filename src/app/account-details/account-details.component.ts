import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Transaction } from '../interfaces/transaction';
import { Account } from '../interfaces/account';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  transactions! : Transaction[];
  balance: number = 0;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const accountId = routeParams.get('accountId');

    this.http.get<Account[]>('/assets/mockdata.json').subscribe(
      (data: Account[]) => {
        data.forEach(account => {
          if (account.id == accountId) {
            this.balance = account.balance;
          }
        });
      }
    )

    this.http.get<Transaction[]>('/assets/mockdata_transactions.json').subscribe(
      (data: Transaction[]) => {
        this.transactions = data;
      }
    )
  }

  sortBy(descending: Boolean) {
    this.transactions.sort( (a, b) => a.datetime.toString().localeCompare(b.toString()) )
  }

}
