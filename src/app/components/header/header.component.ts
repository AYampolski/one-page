import { Component, OnInit } from '@angular/core';

import { INavLinks } from '../../models/navLinks.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mainLinks: INavLinks[] = [{ name: 'Loans', value: 'loans' }];
  secondaryLinks: INavLinks[] = [
    { name: 'My profile', value: 'myProfile', icon: 'assets/imgs/profile.svg' },
    { name: 'Log out', value: 'LogOut', icon: 'assets/imgs/logout.svg' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
