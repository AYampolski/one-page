import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-check-currency',
  templateUrl: './check-currency.component.html',
  styleUrls: ['./check-currency.component.scss'],
})
export class CheckCurrencyComponent implements OnInit {
  @Input() header: string;
  @Input() content: string;

  constructor() {}

  ngOnInit(): void {}
}
