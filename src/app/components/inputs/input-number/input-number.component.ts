import { Component, OnInit, AfterViewChecked, Input } from '@angular/core';
import 'bootstrap';
import * as $ from 'jquery';
@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit, AfterViewChecked {
  @Input() title: string;
  @Input() initValue: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    $('[data-toggle="tooltip"]').tooltip();
 }

}
