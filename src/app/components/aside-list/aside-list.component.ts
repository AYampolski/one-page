import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aside-list',
  templateUrl: './aside-list.component.html',
  styleUrls: ['./aside-list.component.scss']
})
export class AsideListComponent implements OnInit {

  @Input() checkboxList;
  checked = '../../../assets/imgs/done.svg';
  unchecked = '../../../assets/imgs/undone.svg';
  constructor() { }

  ngOnInit(): void {
  }

}
