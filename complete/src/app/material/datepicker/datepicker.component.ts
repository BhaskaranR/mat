import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  touch: boolean;
  filterOdd: boolean;
  yearView: boolean;
  minDate: Date;
  maxDate: Date;
  startAt: Date;
  date: Date;
  datepickerDisabled: boolean;
  dateFilter = (date: Date) => date.getMonth() % 2 === 1 && date.getDate() % 2 === 0;
  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
  }
}
