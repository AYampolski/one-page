import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { AsideListComponent } from './components/aside-list/aside-list.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { AboutYouComponent } from './components/about-you/about-you.component';
import { ToggleComponent } from './components/inputs/toggle/toggle.component';
import { DropdownComponent } from './components/inputs/dropdown/dropdown.component';
import { InputNumberComponent } from './components/inputs/input-number/input-number.component';
import { CheckCardComponent } from './components/check-card/check-card.component';
import { CheckStringComponent } from './components/check-items/check-string/check-string.component';
import { CheckCurrencyComponent } from './components/check-items/check-currency/check-currency.component';
import { CheckDateComponent } from './components/check-items/check-date/check-date.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    AsideListComponent,
    SubheaderComponent,
    AboutYouComponent,
    ToggleComponent,
    DropdownComponent,
    InputNumberComponent,
    CheckCardComponent,
    CheckStringComponent,
    CheckCurrencyComponent,
    CheckDateComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
