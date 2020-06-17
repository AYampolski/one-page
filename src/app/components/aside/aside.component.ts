import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit, AfterViewInit {
  selectedAccordion = 'Processing';
  asideList = [
    { title: 'Loan application',
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
      ]
    },
    { title: 'document gathering',
      body: [
        { name: 'ivan2' },
        { name: 'mary2' }
      ],
    },
    { title: 'Processing',
      body: [
        { name: 'ivan2' },
        { name: 'mary2' }
      ],
    }
  ];

  @ViewChildren('looped') things: QueryList<any>;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.things.forEach((t, index) => {
      let el: HTMLDivElement = t.nativeElement;
      el.setAttribute('name-' + index, 'dynamicAttrString');
    });
  }
}
