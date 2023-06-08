import { Component, ContentChildren, Input } from "@angular/core";
import * as i0 from "@angular/core";
export class AgGridColumn {
    hasChildColumns() {
        if (this.childColumns && this.childColumns.length > 0) {
            // necessary because of https://github.com/angular/angular/issues/10098
            return !(this.childColumns.length === 1 && this.childColumns.first === this);
        }
        return false;
    }
    toColDef() {
        let colDef = this.createColDefFromGridColumn(this);
        if (this.hasChildColumns()) {
            colDef["children"] = this.getChildColDefs(this.childColumns);
        }
        return colDef;
    }
    getChildColDefs(childColumns) {
        return childColumns
            // necessary because of https://github.com/angular/angular/issues/10098
            .filter(column => !column.hasChildColumns())
            .map((column) => {
            return column.toColDef();
        });
    }
    ;
    createColDefFromGridColumn(from) {
        let colDef = {};
        Object.assign(colDef, from);
        delete colDef.childColumns;
        return colDef;
    }
    ;
}
AgGridColumn.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AgGridColumn, deps: [], target: i0.ɵɵFactoryTarget.Component });
AgGridColumn.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AgGridColumn, selector: "ag-grid-column", inputs: { children: "children", sortingOrder: "sortingOrder", allowedAggFuncs: "allowedAggFuncs", menuTabs: "menuTabs", cellClassRules: "cellClassRules", icons: "icons", headerGroupComponent: "headerGroupComponent", headerGroupComponentFramework: "headerGroupComponentFramework", headerGroupComponentParams: "headerGroupComponentParams", cellStyle: "cellStyle", cellRendererParams: "cellRendererParams", cellEditorFramework: "cellEditorFramework", cellEditorParams: "cellEditorParams", pinnedRowCellRendererFramework: "pinnedRowCellRendererFramework", pinnedRowCellRendererParams: "pinnedRowCellRendererParams", filterFramework: "filterFramework", filterParams: "filterParams", headerComponent: "headerComponent", headerComponentFramework: "headerComponentFramework", headerComponentParams: "headerComponentParams", floatingFilterComponent: "floatingFilterComponent", floatingFilterComponentParams: "floatingFilterComponentParams", floatingFilterComponentFramework: "floatingFilterComponentFramework", tooltipComponent: "tooltipComponent", tooltipComponentParams: "tooltipComponentParams", tooltipComponentFramework: "tooltipComponentFramework", refData: "refData", headerName: "headerName", columnGroupShow: "columnGroupShow", headerClass: "headerClass", toolPanelClass: "toolPanelClass", headerValueGetter: "headerValueGetter", groupId: "groupId", colId: "colId", sort: "sort", field: "field", type: "type", tooltipField: "tooltipField", headerTooltip: "headerTooltip", cellClass: "cellClass", showRowGroup: "showRowGroup", filter: "filter", aggFunc: "aggFunc", cellRenderer: "cellRenderer", cellEditor: "cellEditor", pinned: "pinned", chartDataType: "chartDataType", sortedAt: "sortedAt", flex: "flex", width: "width", minWidth: "minWidth", maxWidth: "maxWidth", rowGroupIndex: "rowGroupIndex", pivotIndex: "pivotIndex", dndSourceOnRowDrag: "dndSourceOnRowDrag", valueGetter: "valueGetter", valueSetter: "valueSetter", filterValueGetter: "filterValueGetter", keyCreator: "keyCreator", cellRendererFramework: "cellRendererFramework", pinnedRowCellRenderer: "pinnedRowCellRenderer", valueFormatter: "valueFormatter", pinnedRowValueFormatter: "pinnedRowValueFormatter", valueParser: "valueParser", comparator: "comparator", equals: "equals", pivotComparator: "pivotComparator", suppressKeyboardEvent: "suppressKeyboardEvent", colSpan: "colSpan", rowSpan: "rowSpan", getQuickFilterText: "getQuickFilterText", newValueHandler: "newValueHandler", onCellValueChanged: "onCellValueChanged", onCellClicked: "onCellClicked", onCellDoubleClicked: "onCellDoubleClicked", onCellContextMenu: "onCellContextMenu", rowDragText: "rowDragText", tooltip: "tooltip", tooltipValueGetter: "tooltipValueGetter", cellRendererSelector: "cellRendererSelector", cellEditorSelector: "cellEditorSelector", suppressCellFlash: "suppressCellFlash", suppressColumnsToolPanel: "suppressColumnsToolPanel", suppressFiltersToolPanel: "suppressFiltersToolPanel", openByDefault: "openByDefault", marryChildren: "marryChildren", hide: "hide", rowGroup: "rowGroup", pivot: "pivot", checkboxSelection: "checkboxSelection", headerCheckboxSelection: "headerCheckboxSelection", headerCheckboxSelectionFilteredOnly: "headerCheckboxSelectionFilteredOnly", suppressMenu: "suppressMenu", suppressSorting: "suppressSorting", suppressMovable: "suppressMovable", suppressFilter: "suppressFilter", lockPosition: "lockPosition", lockVisible: "lockVisible", lockPinned: "lockPinned", unSortIcon: "unSortIcon", suppressSizeToFit: "suppressSizeToFit", suppressResize: "suppressResize", suppressAutoSize: "suppressAutoSize", enableRowGroup: "enableRowGroup", enablePivot: "enablePivot", enableValue: "enableValue", editable: "editable", suppressPaste: "suppressPaste", suppressNavigable: "suppressNavigable", enableCellChangeFlash: "enableCellChangeFlash", rowDrag: "rowDrag", dndSource: "dndSource", autoHeight: "autoHeight", sortable: "sortable", resizable: "resizable", singleClickEdit: "singleClickEdit", floatingFilter: "floatingFilter" }, queries: [{ propertyName: "childColumns", predicate: AgGridColumn }], ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AgGridColumn, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-grid-column',
                    template: ''
                }]
        }], propDecorators: { childColumns: [{
                type: ContentChildren,
                args: [AgGridColumn]
            }], children: [{
                type: Input
            }], sortingOrder: [{
                type: Input
            }], allowedAggFuncs: [{
                type: Input
            }], menuTabs: [{
                type: Input
            }], cellClassRules: [{
                type: Input
            }], icons: [{
                type: Input
            }], headerGroupComponent: [{
                type: Input
            }], headerGroupComponentFramework: [{
                type: Input
            }], headerGroupComponentParams: [{
                type: Input
            }], cellStyle: [{
                type: Input
            }], cellRendererParams: [{
                type: Input
            }], cellEditorFramework: [{
                type: Input
            }], cellEditorParams: [{
                type: Input
            }], pinnedRowCellRendererFramework: [{
                type: Input
            }], pinnedRowCellRendererParams: [{
                type: Input
            }], filterFramework: [{
                type: Input
            }], filterParams: [{
                type: Input
            }], headerComponent: [{
                type: Input
            }], headerComponentFramework: [{
                type: Input
            }], headerComponentParams: [{
                type: Input
            }], floatingFilterComponent: [{
                type: Input
            }], floatingFilterComponentParams: [{
                type: Input
            }], floatingFilterComponentFramework: [{
                type: Input
            }], tooltipComponent: [{
                type: Input
            }], tooltipComponentParams: [{
                type: Input
            }], tooltipComponentFramework: [{
                type: Input
            }], refData: [{
                type: Input
            }], headerName: [{
                type: Input
            }], columnGroupShow: [{
                type: Input
            }], headerClass: [{
                type: Input
            }], toolPanelClass: [{
                type: Input
            }], headerValueGetter: [{
                type: Input
            }], groupId: [{
                type: Input
            }], colId: [{
                type: Input
            }], sort: [{
                type: Input
            }], field: [{
                type: Input
            }], type: [{
                type: Input
            }], tooltipField: [{
                type: Input
            }], headerTooltip: [{
                type: Input
            }], cellClass: [{
                type: Input
            }], showRowGroup: [{
                type: Input
            }], filter: [{
                type: Input
            }], aggFunc: [{
                type: Input
            }], cellRenderer: [{
                type: Input
            }], cellEditor: [{
                type: Input
            }], pinned: [{
                type: Input
            }], chartDataType: [{
                type: Input
            }], sortedAt: [{
                type: Input
            }], flex: [{
                type: Input
            }], width: [{
                type: Input
            }], minWidth: [{
                type: Input
            }], maxWidth: [{
                type: Input
            }], rowGroupIndex: [{
                type: Input
            }], pivotIndex: [{
                type: Input
            }], dndSourceOnRowDrag: [{
                type: Input
            }], valueGetter: [{
                type: Input
            }], valueSetter: [{
                type: Input
            }], filterValueGetter: [{
                type: Input
            }], keyCreator: [{
                type: Input
            }], cellRendererFramework: [{
                type: Input
            }], pinnedRowCellRenderer: [{
                type: Input
            }], valueFormatter: [{
                type: Input
            }], pinnedRowValueFormatter: [{
                type: Input
            }], valueParser: [{
                type: Input
            }], comparator: [{
                type: Input
            }], equals: [{
                type: Input
            }], pivotComparator: [{
                type: Input
            }], suppressKeyboardEvent: [{
                type: Input
            }], colSpan: [{
                type: Input
            }], rowSpan: [{
                type: Input
            }], getQuickFilterText: [{
                type: Input
            }], newValueHandler: [{
                type: Input
            }], onCellValueChanged: [{
                type: Input
            }], onCellClicked: [{
                type: Input
            }], onCellDoubleClicked: [{
                type: Input
            }], onCellContextMenu: [{
                type: Input
            }], rowDragText: [{
                type: Input
            }], tooltip: [{
                type: Input
            }], tooltipValueGetter: [{
                type: Input
            }], cellRendererSelector: [{
                type: Input
            }], cellEditorSelector: [{
                type: Input
            }], suppressCellFlash: [{
                type: Input
            }], suppressColumnsToolPanel: [{
                type: Input
            }], suppressFiltersToolPanel: [{
                type: Input
            }], openByDefault: [{
                type: Input
            }], marryChildren: [{
                type: Input
            }], hide: [{
                type: Input
            }], rowGroup: [{
                type: Input
            }], pivot: [{
                type: Input
            }], checkboxSelection: [{
                type: Input
            }], headerCheckboxSelection: [{
                type: Input
            }], headerCheckboxSelectionFilteredOnly: [{
                type: Input
            }], suppressMenu: [{
                type: Input
            }], suppressSorting: [{
                type: Input
            }], suppressMovable: [{
                type: Input
            }], suppressFilter: [{
                type: Input
            }], lockPosition: [{
                type: Input
            }], lockVisible: [{
                type: Input
            }], lockPinned: [{
                type: Input
            }], unSortIcon: [{
                type: Input
            }], suppressSizeToFit: [{
                type: Input
            }], suppressResize: [{
                type: Input
            }], suppressAutoSize: [{
                type: Input
            }], enableRowGroup: [{
                type: Input
            }], enablePivot: [{
                type: Input
            }], enableValue: [{
                type: Input
            }], editable: [{
                type: Input
            }], suppressPaste: [{
                type: Input
            }], suppressNavigable: [{
                type: Input
            }], enableCellChangeFlash: [{
                type: Input
            }], rowDrag: [{
                type: Input
            }], dndSource: [{
                type: Input
            }], autoHeight: [{
                type: Input
            }], sortable: [{
                type: Input
            }], resizable: [{
                type: Input
            }], singleClickEdit: [{
                type: Input
            }], floatingFilter: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWctZ3JpZC1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYWctZ3JpZC1hbmd1bGFyL3NyYy9saWIvYWctZ3JpZC1jb2x1bW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBWSxNQUFNLGVBQWUsQ0FBQzs7QUFPM0UsTUFBTSxPQUFPLFlBQVk7SUFHZCxlQUFlO1FBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkQsdUVBQXVFO1lBQ3ZFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQztTQUNoRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxRQUFRO1FBQ1gsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQ2xCLE1BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2RTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFTyxlQUFlLENBQUMsWUFBcUM7UUFDekQsT0FBTyxZQUFZO1lBQ2YsdUVBQXVFO2FBQ3RFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzNDLEdBQUcsQ0FBQyxDQUFDLE1BQW9CLEVBQUUsRUFBRTtZQUMxQixPQUFPLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztR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MUIsS0FBSztnQkFDVSxVQUFVO3NCQUF6QixLQUFLO2dCQUNVLFVBQVU7c0JBQXpCLEtBQUs7Z0JBQ1UsaUJBQWlCO3NCQUFoQyxLQUFLO2dCQUNVLGNBQWM7c0JBQTdCLEtBQUs7Z0JBQ1UsZ0JBQWdCO3NCQUEvQixLQUFLO2dCQUNVLGNBQWM7c0JBQTdCLEtBQUs7Z0JBQ1UsV0FBVztzQkFBMUIsS0FBSztnQkFDVSxXQUFXO3NCQUExQixLQUFLO2dCQUNVLFFBQVE7c0JBQXZCLEtBQUs7Z0JBQ1UsYUFBYTtzQkFBNUIsS0FBSztnQkFDVSxpQkFBaUI7c0JBQWhDLEtBQUs7Z0JBQ1UscUJBQXFCO3NCQUFwQyxLQUFLO2dCQUNVLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsU0FBUztzQkFBeEIsS0FBSztnQkFDVSxVQUFVO3NCQUF6QixLQUFLO2dCQUNVLFFBQVE7c0JBQXZCLEtBQUs7Z0JBQ1UsU0FBUztzQkFBeEIsS0FBSztnQkFDVSxlQUFlO3NCQUE5QixLQUFLO2dCQUNVLGNBQWM7c0JBQTdCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBJbnB1dCwgUXVlcnlMaXN0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtDb2xEZWZ9IGZyb20gXCJAYWctZ3JpZC1jb21tdW5pdHkvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FnLWdyaWQtY29sdW1uJyxcbiAgICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgQWdHcmlkQ29sdW1uIHtcbiAgICBAQ29udGVudENoaWxkcmVuKEFnR3JpZENvbHVtbikgcHVibGljIGNoaWxkQ29sdW1uczogUXVlcnlMaXN0PEFnR3JpZENvbHVtbj47XG5cbiAgICBwdWJsaWMgaGFzQ2hpbGRDb2x1bW5zKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5jaGlsZENvbHVtbnMgJiYgdGhpcy5jaGlsZENvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gbmVjZXNzYXJ5IGJlY2F1c2Ugb2YgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTAwOThcbiAgICAgICAgICAgIHJldHVybiAhKHRoaXMuY2hpbGRDb2x1bW5zLmxlbmd0aCA9PT0gMSAmJiB0aGlzLmNoaWxkQ29sdW1ucy5maXJzdCA9PT0gdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b0NvbERlZigpOiBDb2xEZWYge1xuICAgICAgICBsZXQgY29sRGVmOiBDb2xEZWYgPSB0aGlzLmNyZWF0ZUNvbERlZkZyb21HcmlkQ29sdW1uKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmhhc0NoaWxkQ29sdW1ucygpKSB7XG4gICAgICAgICAgICAoPGFueT5jb2xEZWYpW1wiY2hpbGRyZW5cIl0gPSB0aGlzLmdldENoaWxkQ29sRGVmcyh0aGlzLmNoaWxkQ29sdW1ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbERlZjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENoaWxkQ29sRGVmcyhjaGlsZENvbHVtbnM6IFF1ZXJ5TGlzdDxBZ0dyaWRDb2x1bW4+KSB7XG4gICAgICAgIHJldHVybiBjaGlsZENvbHVtbnNcbiAgICAgICAgICAgIC8vIG5lY2Vzc2FyeSBiZWNhdXNlIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwMDk4XG4gICAgICAgICAgICAuZmlsdGVyKGNvbHVtbiA9PiAhY29sdW1uLmhhc0NoaWxkQ29sdW1ucygpKVxuICAgICAgICAgICAgLm1hcCgoY29sdW1uOiBBZ0dyaWRDb2x1bW4pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sdW1uLnRvQ29sRGVmKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBjcmVhdGVDb2xEZWZGcm9tR3JpZENvbHVtbihmcm9tOiBBZ0dyaWRDb2x1bW4pOiBDb2xEZWYge1xuICAgICAgICBsZXQgY29sRGVmOiBDb2xEZWYgPSB7fTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihjb2xEZWYsIGZyb20pO1xuICAgICAgICBkZWxldGUgKDxhbnk+Y29sRGVmKS5jaGlsZENvbHVtbnM7XG4gICAgICAgIHJldHVybiBjb2xEZWY7XG4gICAgfTtcblxuICAgIC8vIGlucHV0cyAtIHByZXR0eSBtdWNoIG1vc3Qgb2YgQ29sRGVmLCB3aXRoIHRoZSBleGNlcHRpb24gb2YgdGVtcGxhdGUsIHRlbXBsYXRlVXJsIGFuZCBpbnRlcm5hbCBvbmx5IHByb3BlcnRpZXNcbiAgICAvLyBAU1RBUlRAXG4gICAgQElucHV0KCkgcHVibGljIGNoaWxkcmVuOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHNvcnRpbmdPcmRlcjogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhbGxvd2VkQWdnRnVuY3M6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgbWVudVRhYnM6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbENsYXNzUnVsZXM6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgaWNvbnM6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyR3JvdXBDb21wb25lbnQ6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyR3JvdXBDb21wb25lbnRGcmFtZXdvcms6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyR3JvdXBDb21wb25lbnRQYXJhbXM6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbFN0eWxlOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGNlbGxSZW5kZXJlclBhcmFtczogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsRWRpdG9yRnJhbWV3b3JrOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGNlbGxFZGl0b3JQYXJhbXM6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgcGlubmVkUm93Q2VsbFJlbmRlcmVyRnJhbWV3b3JrOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHBpbm5lZFJvd0NlbGxSZW5kZXJlclBhcmFtczogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmaWx0ZXJGcmFtZXdvcms6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgZmlsdGVyUGFyYW1zOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckNvbXBvbmVudDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJDb21wb25lbnRGcmFtZXdvcms6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQ29tcG9uZW50UGFyYW1zOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGZsb2F0aW5nRmlsdGVyQ29tcG9uZW50OiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGZsb2F0aW5nRmlsdGVyQ29tcG9uZW50UGFyYW1zOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGZsb2F0aW5nRmlsdGVyQ29tcG9uZW50RnJhbWV3b3JrOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHRvb2x0aXBDb21wb25lbnQ6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbHRpcENvbXBvbmVudFBhcmFtczogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwQ29tcG9uZW50RnJhbWV3b3JrOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHJlZkRhdGE6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyTmFtZTogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjb2x1bW5Hcm91cFNob3c6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQ2xhc3M6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbFBhbmVsQ2xhc3M6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyVmFsdWVHZXR0ZXI6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBJZDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjb2xJZDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzb3J0OiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGZpZWxkOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHR5cGU6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbHRpcEZpZWxkOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlclRvb2x0aXA6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbENsYXNzOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHNob3dSb3dHcm91cDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmaWx0ZXI6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgYWdnRnVuYzogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsUmVuZGVyZXI6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbEVkaXRvcjogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwaW5uZWQ6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgY2hhcnREYXRhVHlwZTogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzb3J0ZWRBdDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmbGV4OiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHdpZHRoOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIG1pbldpZHRoOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIG1heFdpZHRoOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHJvd0dyb3VwSW5kZXg6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgcGl2b3RJbmRleDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkbmRTb3VyY2VPblJvd0RyYWc6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsdWVHZXR0ZXI6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsdWVTZXR0ZXI6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgZmlsdGVyVmFsdWVHZXR0ZXI6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMga2V5Q3JlYXRvcjogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsUmVuZGVyZXJGcmFtZXdvcms6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgcGlubmVkUm93Q2VsbFJlbmRlcmVyOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHZhbHVlRm9ybWF0dGVyOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHBpbm5lZFJvd1ZhbHVlRm9ybWF0dGVyOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHZhbHVlUGFyc2VyOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGNvbXBhcmF0b3I6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgZXF1YWxzOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHBpdm90Q29tcGFyYXRvcjogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0tleWJvYXJkRXZlbnQ6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgY29sU3BhbjogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dTcGFuOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGdldFF1aWNrRmlsdGVyVGV4dDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBuZXdWYWx1ZUhhbmRsZXI6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgb25DZWxsVmFsdWVDaGFuZ2VkOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIG9uQ2VsbENsaWNrZWQ6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgb25DZWxsRG91YmxlQ2xpY2tlZDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBvbkNlbGxDb250ZXh0TWVudTogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dEcmFnVGV4dDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHRvb2x0aXBWYWx1ZUdldHRlcjogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsUmVuZGVyZXJTZWxlY3RvcjogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsRWRpdG9yU2VsZWN0b3I6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDZWxsRmxhc2g6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDb2x1bW5zVG9vbFBhbmVsOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzRmlsdGVyc1Rvb2xQYW5lbDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBvcGVuQnlEZWZhdWx0OiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIG1hcnJ5Q2hpbGRyZW46IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgaGlkZTogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dHcm91cDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwaXZvdDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjaGVja2JveFNlbGVjdGlvbjogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJDaGVja2JveFNlbGVjdGlvbjogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJDaGVja2JveFNlbGVjdGlvbkZpbHRlcmVkT25seTogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc01lbnU6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NTb3J0aW5nOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzTW92YWJsZTogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0ZpbHRlcjogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBsb2NrUG9zaXRpb246IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgbG9ja1Zpc2libGU6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgbG9ja1Bpbm5lZDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyB1blNvcnRJY29uOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzU2l6ZVRvRml0OiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUmVzaXplOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQXV0b1NpemU6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlUm93R3JvdXA6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlUGl2b3Q6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlVmFsdWU6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgZWRpdGFibGU6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NQYXN0ZTogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc05hdmlnYWJsZTogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVDZWxsQ2hhbmdlRmxhc2g6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93RHJhZzogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkbmRTb3VyY2U6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgYXV0b0hlaWdodDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzb3J0YWJsZTogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyByZXNpemFibGU6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgc2luZ2xlQ2xpY2tFZGl0OiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGZsb2F0aW5nRmlsdGVyOiBhbnk7XG4gICAgLy8gQEVOREBcblxufVxuIl19