import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-check-string',
  templateUrl: './check-string.component.html',
  styleUrls: ['./check-string.component.scss']
})
export class CheckStringComponent implements OnInit {

  @Input() header: string;
  @Input() content: string;
  constructor() { }

  ngOnInit(): void {
  }

}
