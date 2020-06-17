import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  selectedAccordion = 'Loan application';
  backText = 'Back to Rate Quote';
  asideList = [
    {
      title: 'Loan application',
      body: [
        { name: 'Loan Terms', isChecked: true },
        { name: 'Property Details', isChecked: true },
        { name: 'About you', isChecked: false },
        { name: 'Track Record', isChecked: false },
        { name: 'Income and Employment', isChecked: false },
        { name: 'Government Monitoring', isChecked: false },
        { name: 'Declarations', isChecked: false },
        { name: 'Filling the Application', isChecked: false },
        { name: 'Signing the Documents', isChecked: false },
        { name: 'Loan Terms', isChecked: false },
      ],
    },
    {
      title: 'document gathering',
      body: [
        { name: 'Proin eros mauris', isChecked: false },
        { name: 'Mauris eget cursus', isChecked: true },
        { name: 'Curabitur non neque purus', isChecked: true },
        { name: 'Lorem ipsum dolor', isChecked: true },
        { name: 'Duis cursus', isChecked: true },
        { name: 'Aliquam tortor nulla', isChecked: true },
        { name: 'Maecenas in feugiat nisl', isChecked: true },
      ],
    },
    {
      title: 'Processing',
      body: [
        { name: 'Etiam blandit', isChecked: true },
        { name: 'Suspendisse faucibus', isChecked: false },
        { name: ' Curabitur luctus erat vitae ', isChecked: false },
        { name: 'Sed semper pulvinar mi', isChecked: false },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
