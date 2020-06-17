import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCurrencyComponent } from './check-currency.component';

describe('ChechCurrencyComponent', () => {
  let component: CheckCurrencyComponent;
  let fixture: ComponentFixture<CheckCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
