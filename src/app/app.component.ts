import { Component, OnInit } from '@angular/core';
import { CurrencydataService } from './currencydata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currency1Value: number = 0;
  currency2Value: number = 0;
  currency1Select: string = 'UAH';
  currency2Select: string = 'UAH';
  uahToUsd: number = 0;
  uahToEur: number = 0;

  constructor(private currency: CurrencydataService) {}

  ngOnInit() {
    this.getBaseRates();
  }

  getBaseRates() {
    this.currency.getBaseCurrencyData('UAH').subscribe((data: any) => {
      const rates = data.rates;
      this.uahToUsd = rates['USD'];
      this.uahToEur = rates['EUR'];
    });
  }

  convertCurrency() {
    const currency1 = document.getElementById('currency1') as HTMLInputElement;
    const currency2 = document.getElementById('currency2') as HTMLInputElement;
    const currency1Select = document.getElementById(
      'currency1Select'
    ) as HTMLSelectElement;
    const currency2Select = document.getElementById(
      'currency2Select'
    ) as HTMLSelectElement;

    const value = parseFloat(currency1.value);
    const currency1Rate = currency1Select.value === 'UAH' ? 1 : this.uahToUsd;
    const currency2Rate = currency2Select.value === 'UAH' ? 1 : this.uahToEur;
    const convertedValue = (value / currency1Rate) * currency2Rate;

    currency2.value = convertedValue.toFixed(2);
  }
}
