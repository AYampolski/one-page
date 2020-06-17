import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-check-date',
  templateUrl: './check-date.component.html',
  styleUrls: ['./check-date.component.scss']
})
export class CheckDateComponent implements OnInit {

  @Input() header: string;
  @Input() content: string;
  constructor() { }

  ngOnInit(): void {
  }

}
