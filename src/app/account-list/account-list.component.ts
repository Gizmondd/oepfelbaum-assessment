import { Component, OnInit, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { getNumberOfCurrencyDigits } from '@angular/common';
import { Account } from '../interfaces/account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  accounts : Account[] = [];
  total : number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Account[]>(environment.serverAdress + '/accounts').subscribe(
      (data) => {
        this.accounts = data;
        this.total = this.accounts.reduce( (sum, current) => sum + current.balance, 0);
      }
    );
  }

}
