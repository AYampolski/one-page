import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-card',
  templateUrl: './check-card.component.html',
  styleUrls: ['./check-card.component.scss']
})
export class CheckCardComponent implements OnInit {

  subheader = '#34957';
  header = '630 N Elm Dr Beverly Hills, CA 90210 USA';
  loanHeader = 'loan type';
  loanContent = 'Rehab Loan';
  approvalHeader = 'Est. approval date';
  approvalContent = 'Apr 28, 2020';
  totalHeader = 'Total Loan Amount';
  totalContent = '$ 200,000';
  purchaseHeader = 'Purchase Loan';
  purchaseContent = '$ 150,000';
  rehabHeader = 'Rehab Holdback';
  rehabContent = '$ 50,000';
  constructor() { }

  ngOnInit(): void {
  }

}
