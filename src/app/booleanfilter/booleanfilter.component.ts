import { Component, Input, OnInit } from '@angular/core';
import { FilterService } from '@progress/kendo-angular-grid';
import { FilterDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: 'app-booleanfilter',
  templateUrl: './booleanfilter.component.html',
  styleUrls: ['./booleanfilter.component.css'],
})
export class BooleanfilterComponent implements OnInit {
  @Input() public filterService: FilterService;
  @Input() public field;
  @Input() public currentFilter;
  @Input() public noFilterMessage = 'NO';
  @Input() public yesFilterMessage = 'YES';

  public filterValue = undefined;

  constructor() {}

  ngOnInit() {
    let currentFilterValue = this.currentFilter.filters[0] as FilterDescriptor;
    if (currentFilterValue) {
      this.filterValue = currentFilterValue.value;
    }
  }
  inputValuechange(val) {
    this.filterValue = val;
    this.handleFilterValueInput();
  }

  private _regexFilterFunction = function (item, value) {
    const regexp = new RegExp(value);
    return regexp.test(item);
  };
  public handleFilterValueInput(): void {
    const regexFilter = {
      field: this.field,
      operator: this._regexFilterFunction,
      value: this.filterValue,
    };
    this.filterService.filter({
      filters: [regexFilter],
      logic: 'or',
    });
  }
}
