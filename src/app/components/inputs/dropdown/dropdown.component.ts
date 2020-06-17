import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  options = [
    { name: 'Single (never been married)', value: 'single' },
    { name: 'Aenean sollicitudin', value: 'sollicitudin' },
    { name: 'Vestibulum non tellus blandit', value: 'blandit' },
    { name: 'Phasellus dapibus vulputate eros', value: 'dapibus' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
