import { Component } from '@angular/core';
import { Product } from './model';
import { sampleProducts } from './products';

@Component({
  selector: 'my-app',
  template: `
        <kendo-grid [kendoGridBinding]="gridData" filterable="menu" [style.width.px]="400">
            <kendo-grid-column field="ProductID" title="ID" [width]="40" [filterable]="false"> </kendo-grid-column>
            <kendo-grid-column field="ProductName" title="Product Name">
                <ng-template kendoGridFilterMenuTemplate let-filter let-column="column" let-filterService="filterService">
                    <kendo-grid-string-filter-menu
                        [column]="column"
                        [filter]="filter"
                        [filterService]="filterService"
                        operator="startswith"
                    >
                        <kendo-filter-startswith-operator></kendo-filter-startswith-operator>
                        <kendo-filter-eq-operator></kendo-filter-eq-operator>
                    </kendo-grid-string-filter-menu>
                </ng-template>
            </kendo-grid-column>
            <kendo-grid-column
            [headerClass]="'headerCustomClass'"
            title="B2B Onboarded"
            field="isB2BEnabled"
            filter="boolean"
        >
        <kendo-grid-messages filterIsTrue="Yes" filterIsFalse="No"> </kendo-grid-messages>

        </kendo-grid-column>
        <kendo-grid-column
            [headerClass]="'headerCustomClass'"
            title="Status"
            field="isActive"
            filter="boolean"
        >
        <ng-template kendoGridFilterMenuTemplate
        let-column="column"
        let-filter="filter"
        let-filterService="filterService"
        >
        <app-booleanfilter  field="{{column.field}}" [currentFilter]="filter" [filterService]="filterService"
        yesFilterMessage="Active" noFilterMessage="InActive"></app-booleanfilter>
    </ng-template>
    <ng-template kendoGridCellTemplate let-dataItem>
    {{dataItem.Discontinued == true ? "Active" : "InActive"}}
</ng-template>

        </kendo-grid-column>
        </kendo-grid>

     
    `,
})
export class AppComponent {
  public gridData: Product[] = sampleProducts;
}
