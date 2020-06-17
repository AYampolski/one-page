import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-you',
  templateUrl: './about-you.component.html',
  styleUrls: ['./about-you.component.scss']
})
export class AboutYouComponent implements OnInit {
  inputNumberTitle = 'Years of school';
  inputNumberValue = 10;
  constructor() { }

  ngOnInit(): void {
  }

}
