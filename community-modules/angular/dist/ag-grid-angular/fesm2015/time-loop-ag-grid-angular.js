import * as i0 from '@angular/core';
import { Component, ContentChildren, Input, Injectable, EventEmitter, ViewEncapsulation, Output, ANALYZE_FOR_ENTRY_COMPONENTS, NgModule } from '@angular/core';
import { VanillaFrameworkOverrides, BaseComponentWrapper, Promise as Promise$1, ComponentUtil, Grid, _, Events, GridOptionsWrapper } from '@ag-grid-community/core';

class AgGridColumn {
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

class AngularFrameworkOverrides extends VanillaFrameworkOverrides {
    constructor(_ngZone) {
        super();
        this._ngZone = _ngZone;
    }
    setTimeout(action, timeout) {
        this._ngZone.runOutsideAngular(() => {
            window.setTimeout(() => {
                action();
            }, timeout);
        });
    }
    addEventListenerOutsideAngular(element, type, listener, useCapture) {
        this._ngZone.runOutsideAngular(() => {
            super.addEventListenerOutsideAngular(element, type, listener, useCapture);
        });
    }
}
AngularFrameworkOverrides.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AngularFrameworkOverrides, deps: [{ token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable });
AngularFrameworkOverrides.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AngularFrameworkOverrides });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AngularFrameworkOverrides, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.NgZone }]; } });

class AngularFrameworkComponentWrapper extends BaseComponentWrapper {
    setViewContainerRef(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    setComponentFactoryResolver(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    createWrapper(OriginalConstructor) {
        let that = this;
        class DynamicAgNg2Component extends BaseGuiComponent {
            init(params) {
                super.init(params);
                this._componentRef.changeDetectorRef.detectChanges();
            }
            createComponent() {
                return that.createComponent(OriginalConstructor);
            }
            hasMethod(name) {
                return wrapper.getFrameworkComponentInstance()[name] != null;
            }
            callMethod(name, args) {
                const componentRef = this.getFrameworkComponentInstance();
                return wrapper.getFrameworkComponentInstance()[name].apply(componentRef, args);
            }
            addMethod(name, callback) {
                wrapper[name] = callback;
            }
        }
        let wrapper = new DynamicAgNg2Component();
        return wrapper;
    }
    createComponent(componentType) {
        // used to cache the factory, but this a) caused issues when used with either webpack/angularcli with --prod
        // but more significantly, the underlying implementation of resolveComponentFactory uses a map too, so us
        // caching the factory here yields no performance benefits
        let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        return this.viewContainerRef.createComponent(factory);
    }
}
AngularFrameworkComponentWrapper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AngularFrameworkComponentWrapper, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
AngularFrameworkComponentWrapper.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AngularFrameworkComponentWrapper });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AngularFrameworkComponentWrapper, decorators: [{
            type: Injectable
        }] });
class BaseGuiComponent {
    init(params) {
        this._params = params;
        this._componentRef = this.createComponent();
        this._agAwareComponent = this._componentRef.instance;
        this._frameworkComponentInstance = this._componentRef.instance;
        this._eGui = this._componentRef.location.nativeElement;
        this._agAwareComponent.agInit(this._params);
    }
    getGui() {
        return this._eGui;
    }
    destroy() {
        if (this._componentRef) {
            this._componentRef.destroy();
        }
    }
    getFrameworkComponentInstance() {
        return this._frameworkComponentInstance;
    }
}

class AgGridAngular {
    constructor(elementDef, viewContainerRef, angularFrameworkOverrides, frameworkComponentWrapper, _componentFactoryResolver) {
        this.viewContainerRef = viewContainerRef;
        this.angularFrameworkOverrides = angularFrameworkOverrides;
        this.frameworkComponentWrapper = frameworkComponentWrapper;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._initialised = false;
        this._destroyed = false;
        // in order to ensure firing of gridReady is deterministic
        this._fullyReady = Promise$1.resolve(true);
        // @START@
        this.slaveGrids = undefined;
        this.alignedGrids = undefined;
        this.rowData = undefined;
        this.columnDefs = undefined;
        this.excelStyles = undefined;
        this.pinnedTopRowData = undefined;
        this.pinnedBottomRowData = undefined;
        this.components = undefined;
        this.frameworkComponents = undefined;
        this.rowStyle = undefined;
        this.context = undefined;
        this.autoGroupColumnDef = undefined;
        this.groupColumnDef = undefined;
        this.localeText = undefined;
        this.icons = undefined;
        this.datasource = undefined;
        this.serverSideDatasource = undefined;
        this.viewportDatasource = undefined;
        this.groupRowRendererParams = undefined;
        this.aggFuncs = undefined;
        this.fullWidthCellRendererParams = undefined;
        this.defaultColGroupDef = undefined;
        this.defaultColDef = undefined;
        this.defaultExportParams = undefined;
        this.columnTypes = undefined;
        this.rowClassRules = undefined;
        this.detailGridOptions = undefined;
        this.detailCellRendererParams = undefined;
        this.loadingCellRendererParams = undefined;
        this.loadingOverlayComponentParams = undefined;
        this.noRowsOverlayComponentParams = undefined;
        this.popupParent = undefined;
        this.colResizeDefault = undefined;
        this.reduxStore = undefined;
        this.statusBar = undefined;
        this.sideBar = undefined;
        this.sortingOrder = undefined;
        this.rowClass = undefined;
        this.rowSelection = undefined;
        this.overlayLoadingTemplate = undefined;
        this.overlayNoRowsTemplate = undefined;
        this.quickFilterText = undefined;
        this.rowModelType = undefined;
        this.editType = undefined;
        this.domLayout = undefined;
        this.clipboardDeliminator = undefined;
        this.rowGroupPanelShow = undefined;
        this.multiSortKey = undefined;
        this.pivotColumnGroupTotals = undefined;
        this.pivotRowTotals = undefined;
        this.pivotPanelShow = undefined;
        this.rowHeight = undefined;
        this.detailRowHeight = undefined;
        this.rowBuffer = undefined;
        this.colWidth = undefined;
        this.headerHeight = undefined;
        this.groupHeaderHeight = undefined;
        this.floatingFiltersHeight = undefined;
        this.pivotHeaderHeight = undefined;
        this.pivotGroupHeaderHeight = undefined;
        this.groupDefaultExpanded = undefined;
        this.minColWidth = undefined;
        this.maxColWidth = undefined;
        this.viewportRowModelPageSize = undefined;
        this.viewportRowModelBufferSize = undefined;
        this.autoSizePadding = undefined;
        this.maxBlocksInCache = undefined;
        this.maxConcurrentDatasourceRequests = undefined;
        this.tooltipShowDelay = undefined;
        this.cacheOverflowSize = undefined;
        this.paginationPageSize = undefined;
        this.cacheBlockSize = undefined;
        this.infiniteInitialRowCount = undefined;
        this.scrollbarWidth = undefined;
        this.paginationStartPage = undefined;
        this.infiniteBlockSize = undefined;
        this.batchUpdateWaitMillis = undefined;
        this.asyncTransactionWaitMillis = undefined;
        this.blockLoadDebounceMillis = undefined;
        this.keepDetailRowsCount = undefined;
        this.undoRedoCellEditingLimit = undefined;
        this.cellFlashDelay = undefined;
        this.cellFadeDelay = undefined;
        this.localeTextFunc = undefined;
        this.groupRowInnerRenderer = undefined;
        this.groupRowInnerRendererFramework = undefined;
        this.dateComponent = undefined;
        this.dateComponentFramework = undefined;
        this.groupRowRenderer = undefined;
        this.groupRowRendererFramework = undefined;
        this.isExternalFilterPresent = undefined;
        this.getRowHeight = undefined;
        this.doesExternalFilterPass = undefined;
        this.getRowClass = undefined;
        this.getRowStyle = undefined;
        this.getRowClassRules = undefined;
        this.traverseNode = undefined;
        this.getContextMenuItems = undefined;
        this.getMainMenuItems = undefined;
        this.processRowPostCreate = undefined;
        this.processCellForClipboard = undefined;
        this.getNodeChildDetails = undefined;
        this.groupRowAggNodes = undefined;
        this.getRowNodeId = undefined;
        this.isFullWidthCell = undefined;
        this.fullWidthCellRenderer = undefined;
        this.fullWidthCellRendererFramework = undefined;
        this.doesDataFlower = undefined;
        this.processSecondaryColDef = undefined;
        this.processSecondaryColGroupDef = undefined;
        this.getBusinessKeyForNode = undefined;
        this.sendToClipboard = undefined;
        this.navigateToNextCell = undefined;
        this.tabToNextCell = undefined;
        this.getDetailRowData = undefined;
        this.processCellFromClipboard = undefined;
        this.getDocument = undefined;
        this.postProcessPopup = undefined;
        this.getChildCount = undefined;
        this.getDataPath = undefined;
        this.loadingCellRenderer = undefined;
        this.loadingCellRendererFramework = undefined;
        this.loadingOverlayComponent = undefined;
        this.loadingOverlayComponentFramework = undefined;
        this.noRowsOverlayComponent = undefined;
        this.noRowsOverlayComponentFramework = undefined;
        this.detailCellRenderer = undefined;
        this.detailCellRendererFramework = undefined;
        this.defaultGroupSortComparator = undefined;
        this.isRowMaster = undefined;
        this.isRowSelectable = undefined;
        this.postSort = undefined;
        this.processHeaderForClipboard = undefined;
        this.paginationNumberFormatter = undefined;
        this.processDataFromClipboard = undefined;
        this.getServerSideGroupKey = undefined;
        this.isServerSideGroup = undefined;
        this.suppressKeyboardEvent = undefined;
        this.createChartContainer = undefined;
        this.processChartOptions = undefined;
        this.getChartToolbarItems = undefined;
        this.fillOperation = undefined;
        this.toolPanelSuppressRowGroups = undefined;
        this.toolPanelSuppressValues = undefined;
        this.toolPanelSuppressPivots = undefined;
        this.toolPanelSuppressPivotMode = undefined;
        this.toolPanelSuppressSideButtons = undefined;
        this.toolPanelSuppressColumnFilter = undefined;
        this.toolPanelSuppressColumnSelectAll = undefined;
        this.toolPanelSuppressColumnExpandAll = undefined;
        this.suppressMakeColumnVisibleAfterUnGroup = undefined;
        this.suppressRowClickSelection = undefined;
        this.suppressCellSelection = undefined;
        this.suppressHorizontalScroll = undefined;
        this.alwaysShowVerticalScroll = undefined;
        this.debug = undefined;
        this.enableBrowserTooltips = undefined;
        this.enableColResize = undefined;
        this.enableCellExpressions = undefined;
        this.enableSorting = undefined;
        this.enableServerSideSorting = undefined;
        this.enableFilter = undefined;
        this.enableServerSideFilter = undefined;
        this.angularCompileRows = undefined;
        this.angularCompileFilters = undefined;
        this.angularCompileHeaders = undefined;
        this.groupSuppressAutoColumn = undefined;
        this.groupSelectsChildren = undefined;
        this.groupIncludeFooter = undefined;
        this.groupIncludeTotalFooter = undefined;
        this.groupUseEntireRow = undefined;
        this.groupSuppressRow = undefined;
        this.groupSuppressBlankHeader = undefined;
        this.forPrint = undefined;
        this.suppressMenuHide = undefined;
        this.rowDeselection = undefined;
        this.unSortIcon = undefined;
        this.suppressMultiSort = undefined;
        this.singleClickEdit = undefined;
        this.suppressLoadingOverlay = undefined;
        this.suppressNoRowsOverlay = undefined;
        this.suppressAutoSize = undefined;
        this.skipHeaderOnAutoSize = undefined;
        this.suppressParentsInRowNodes = undefined;
        this.showToolPanel = undefined;
        this.suppressColumnMoveAnimation = undefined;
        this.suppressMovableColumns = undefined;
        this.suppressFieldDotNotation = undefined;
        this.enableRangeSelection = undefined;
        this.enableRangeHandle = undefined;
        this.enableFillHandle = undefined;
        this.suppressClearOnFillReduction = undefined;
        this.deltaSort = undefined;
        this.suppressTouch = undefined;
        this.suppressAsyncEvents = undefined;
        this.allowContextMenuWithControlKey = undefined;
        this.suppressContextMenu = undefined;
        this.suppressMenuFilterPanel = undefined;
        this.suppressMenuMainPanel = undefined;
        this.suppressMenuColumnPanel = undefined;
        this.rememberGroupStateWhenNewData = undefined;
        this.enableCellChangeFlash = undefined;
        this.suppressDragLeaveHidesColumns = undefined;
        this.suppressMiddleClickScrolls = undefined;
        this.suppressPreventDefaultOnMouseWheel = undefined;
        this.suppressUseColIdForGroups = undefined;
        this.suppressCopyRowsToClipboard = undefined;
        this.copyHeadersToClipboard = undefined;
        this.pivotMode = undefined;
        this.suppressAggFuncInHeader = undefined;
        this.suppressColumnVirtualisation = undefined;
        this.suppressAggAtRootLevel = undefined;
        this.suppressFocusAfterRefresh = undefined;
        this.functionsPassive = undefined;
        this.functionsReadOnly = undefined;
        this.animateRows = undefined;
        this.groupSelectsFiltered = undefined;
        this.groupRemoveSingleChildren = undefined;
        this.groupRemoveLowestSingleChildren = undefined;
        this.enableRtl = undefined;
        this.suppressClickEdit = undefined;
        this.rowDragManaged = undefined;
        this.suppressRowDrag = undefined;
        this.suppressMoveWhenRowDragging = undefined;
        this.enableMultiRowDragging = undefined;
        this.enableGroupEdit = undefined;
        this.embedFullWidthRows = undefined;
        this.deprecatedEmbedFullWidthRows = undefined;
        this.suppressTabbing = undefined;
        this.suppressPaginationPanel = undefined;
        this.floatingFilter = undefined;
        this.groupHideOpenParents = undefined;
        this.groupMultiAutoColumn = undefined;
        this.pagination = undefined;
        this.stopEditingWhenGridLosesFocus = undefined;
        this.paginationAutoPageSize = undefined;
        this.suppressScrollOnNewData = undefined;
        this.purgeClosedRowNodes = undefined;
        this.cacheQuickFilter = undefined;
        this.deltaRowDataMode = undefined;
        this.ensureDomOrder = undefined;
        this.accentedSort = undefined;
        this.pivotTotals = undefined;
        this.suppressChangeDetection = undefined;
        this.valueCache = undefined;
        this.valueCacheNeverExpires = undefined;
        this.aggregateOnlyChangedColumns = undefined;
        this.suppressAnimationFrame = undefined;
        this.suppressExcelExport = undefined;
        this.suppressCsvExport = undefined;
        this.treeData = undefined;
        this.masterDetail = undefined;
        this.suppressMultiRangeSelection = undefined;
        this.enterMovesDownAfterEdit = undefined;
        this.enterMovesDown = undefined;
        this.suppressPropertyNamesCheck = undefined;
        this.rowMultiSelectWithClick = undefined;
        this.contractColumnSelection = undefined;
        this.suppressEnterpriseResetOnNewColumns = undefined;
        this.enableOldSetFilterModel = undefined;
        this.suppressRowHoverHighlight = undefined;
        this.gridAutoHeight = undefined;
        this.suppressRowTransform = undefined;
        this.suppressClipboardPaste = undefined;
        this.suppressLastEmptyLineOnPaste = undefined;
        this.serverSideSortingAlwaysResets = undefined;
        this.reactNext = undefined;
        this.suppressSetColumnStateEvents = undefined;
        this.enableCharts = undefined;
        this.deltaColumnMode = undefined;
        this.suppressMaintainUnsortedOrder = undefined;
        this.enableCellTextSelection = undefined;
        this.suppressBrowserResizeObserver = undefined;
        this.suppressMaxRenderedRowRestriction = undefined;
        this.excludeChildrenWhenTreeDataFiltering = undefined;
        this.tooltipMouseTrack = undefined;
        this.keepDetailRows = undefined;
        this.paginateChildRows = undefined;
        this.preventDefaultOnContextMenu = undefined;
        this.undoRedoCellEditing = undefined;
        this.allowDragFromColumnsToolPanel = undefined;
        this.immutableData = undefined;
        this.immutableColumns = undefined;
        this.pivotSuppressAutoColumn = undefined;
        this.columnEverythingChanged = new EventEmitter();
        this.newColumnsLoaded = new EventEmitter();
        this.columnPivotModeChanged = new EventEmitter();
        this.columnRowGroupChanged = new EventEmitter();
        this.expandOrCollapseAll = new EventEmitter();
        this.columnPivotChanged = new EventEmitter();
        this.gridColumnsChanged = new EventEmitter();
        this.columnValueChanged = new EventEmitter();
        this.columnMoved = new EventEmitter();
        this.columnVisible = new EventEmitter();
        this.columnPinned = new EventEmitter();
        this.columnGroupOpened = new EventEmitter();
        this.columnResized = new EventEmitter();
        this.displayedColumnsChanged = new EventEmitter();
        this.virtualColumnsChanged = new EventEmitter();
        this.rowGroupOpened = new EventEmitter();
        this.rowDataChanged = new EventEmitter();
        this.rowDataUpdated = new EventEmitter();
        this.pinnedRowDataChanged = new EventEmitter();
        this.rangeSelectionChanged = new EventEmitter();
        this.chartCreated = new EventEmitter();
        this.chartRangeSelectionChanged = new EventEmitter();
        this.chartOptionsChanged = new EventEmitter();
        this.chartDestroyed = new EventEmitter();
        this.toolPanelVisibleChanged = new EventEmitter();
        this.modelUpdated = new EventEmitter();
        this.pasteStart = new EventEmitter();
        this.pasteEnd = new EventEmitter();
        this.fillStart = new EventEmitter();
        this.fillEnd = new EventEmitter();
        this.cellClicked = new EventEmitter();
        this.cellDoubleClicked = new EventEmitter();
        this.cellMouseDown = new EventEmitter();
        this.cellContextMenu = new EventEmitter();
        this.cellValueChanged = new EventEmitter();
        this.rowValueChanged = new EventEmitter();
        this.cellFocused = new EventEmitter();
        this.rowSelected = new EventEmitter();
        this.selectionChanged = new EventEmitter();
        this.cellKeyDown = new EventEmitter();
        this.cellKeyPress = new EventEmitter();
        this.cellMouseOver = new EventEmitter();
        this.cellMouseOut = new EventEmitter();
        this.filterChanged = new EventEmitter();
        this.filterModified = new EventEmitter();
        this.filterOpened = new EventEmitter();
        this.sortChanged = new EventEmitter();
        this.virtualRowRemoved = new EventEmitter();
        this.rowClicked = new EventEmitter();
        this.rowDoubleClicked = new EventEmitter();
        this.gridReady = new EventEmitter();
        this.gridSizeChanged = new EventEmitter();
        this.viewportChanged = new EventEmitter();
        this.firstDataRendered = new EventEmitter();
        this.dragStarted = new EventEmitter();
        this.dragStopped = new EventEmitter();
        this.checkboxChanged = new EventEmitter();
        this.rowEditingStarted = new EventEmitter();
        this.rowEditingStopped = new EventEmitter();
        this.cellEditingStarted = new EventEmitter();
        this.cellEditingStopped = new EventEmitter();
        this.bodyScroll = new EventEmitter();
        this.animationQueueEmpty = new EventEmitter();
        this.heightScaleChanged = new EventEmitter();
        this.paginationChanged = new EventEmitter();
        this.componentStateChanged = new EventEmitter();
        this.bodyHeightChanged = new EventEmitter();
        this.displayedColumnsWidthChanged = new EventEmitter();
        this.scrollVisibilityChanged = new EventEmitter();
        this.columnHoverChanged = new EventEmitter();
        this.flashCells = new EventEmitter();
        this.rowDragEnter = new EventEmitter();
        this.rowDragMove = new EventEmitter();
        this.rowDragLeave = new EventEmitter();
        this.rowDragEnd = new EventEmitter();
        this.popupToFront = new EventEmitter();
        this.columnRowGroupChangeRequest = new EventEmitter();
        this.columnPivotChangeRequest = new EventEmitter();
        this.columnValueChangeRequest = new EventEmitter();
        this.columnAggFuncChangeRequest = new EventEmitter();
        this.keyboardFocus = new EventEmitter();
        this.mouseFocus = new EventEmitter();
        this._nativeElement = elementDef.nativeElement;
        this.frameworkComponentWrapper.setViewContainerRef(this.viewContainerRef);
        this.frameworkComponentWrapper.setComponentFactoryResolver(this._componentFactoryResolver);
    }
    ngAfterViewInit() {
        this.checkForDeprecatedEvents();
        this.gridOptions = ComponentUtil.copyAttributesToGridOptions(this.gridOptions, this, true);
        this.gridParams = {
            globalEventListener: this.globalEventListener.bind(this),
            frameworkOverrides: this.angularFrameworkOverrides,
            providedBeanInstances: {
                frameworkComponentWrapper: this.frameworkComponentWrapper
            },
            modules: (this.modules || [])
        };
        if (this.columns && this.columns.length > 0) {
            this.gridOptions.columnDefs = this.columns
                .map((column) => {
                return column.toColDef();
            });
        }
        new Grid(this._nativeElement, this.gridOptions, this.gridParams);
        if (this.gridOptions.api) {
            this.api = this.gridOptions.api;
        }
        if (this.gridOptions.columnApi) {
            this.columnApi = this.gridOptions.columnApi;
        }
        this._initialised = true;
        // sometimes, especially in large client apps gridReady can fire before ngAfterViewInit
        // this ties these together so that gridReady will always fire after agGridAngular's ngAfterViewInit
        // the actual containing component's ngAfterViewInit will fire just after agGridAngular's
        this._fullyReady.resolveNow(null, resolve => resolve);
    }
    ngOnChanges(changes) {
        if (this._initialised) {
            ComponentUtil.processOnChange(changes, this.gridOptions, this.api, this.columnApi);
        }
    }
    ngOnDestroy() {
        if (this._initialised) {
            // need to do this before the destroy, so we know not to emit any events
            // while tearing down the grid.
            this._destroyed = true;
            if (this.api) {
                this.api.destroy();
            }
        }
    }
    checkForDeprecatedEvents() {
        _.iterateObject(Events, (key, eventName) => {
            if (this[eventName] && this[eventName].observers.length > 0) {
                GridOptionsWrapper.checkEventDeprecation(eventName);
            }
        });
    }
    globalEventListener(eventType, event) {
        // if we are tearing down, don't emit angular events, as this causes
        // problems with the angular router
        if (this._destroyed) {
            return;
        }
        // generically look up the eventType
        let emitter = this[eventType];
        if (emitter) {
            if (eventType === 'gridReady') {
                // if the user is listening for gridReady, wait for ngAfterViewInit to fire first, then emit the
                // gridReady event
                this._fullyReady.then((result => {
                    emitter.emit(event);
                }));
            }
            else {
                emitter.emit(event);
            }
        }
        else {
            console.log('ag-Grid-angular: could not find EventEmitter: ' + eventType);
        }
    }
}
AgGridAngular.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AgGridAngular, deps: [{ token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: AngularFrameworkOverrides }, { token: AngularFrameworkComponentWrapper }, { token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.Component });
AgGridAngular.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AgGridAngular, selector: "ag-grid-angular", inputs: { gridOptions: "gridOptions", modules: "modules", slaveGrids: "slaveGrids", alignedGrids: "alignedGrids", rowData: "rowData", columnDefs: "columnDefs", excelStyles: "excelStyles", pinnedTopRowData: "pinnedTopRowData", pinnedBottomRowData: "pinnedBottomRowData", components: "components", frameworkComponents: "frameworkComponents", rowStyle: "rowStyle", context: "context", autoGroupColumnDef: "autoGroupColumnDef", groupColumnDef: "groupColumnDef", localeText: "localeText", icons: "icons", datasource: "datasource", serverSideDatasource: "serverSideDatasource", viewportDatasource: "viewportDatasource", groupRowRendererParams: "groupRowRendererParams", aggFuncs: "aggFuncs", fullWidthCellRendererParams: "fullWidthCellRendererParams", defaultColGroupDef: "defaultColGroupDef", defaultColDef: "defaultColDef", defaultExportParams: "defaultExportParams", columnTypes: "columnTypes", rowClassRules: "rowClassRules", detailGridOptions: "detailGridOptions", detailCellRendererParams: "detailCellRendererParams", loadingCellRendererParams: "loadingCellRendererParams", loadingOverlayComponentParams: "loadingOverlayComponentParams", noRowsOverlayComponentParams: "noRowsOverlayComponentParams", popupParent: "popupParent", colResizeDefault: "colResizeDefault", reduxStore: "reduxStore", statusBar: "statusBar", sideBar: "sideBar", sortingOrder: "sortingOrder", rowClass: "rowClass", rowSelection: "rowSelection", overlayLoadingTemplate: "overlayLoadingTemplate", overlayNoRowsTemplate: "overlayNoRowsTemplate", quickFilterText: "quickFilterText", rowModelType: "rowModelType", editType: "editType", domLayout: "domLayout", clipboardDeliminator: "clipboardDeliminator", rowGroupPanelShow: "rowGroupPanelShow", multiSortKey: "multiSortKey", pivotColumnGroupTotals: "pivotColumnGroupTotals", pivotRowTotals: "pivotRowTotals", pivotPanelShow: "pivotPanelShow", rowHeight: "rowHeight", detailRowHeight: "detailRowHeight", rowBuffer: "rowBuffer", colWidth: "colWidth", headerHeight: "headerHeight", groupHeaderHeight: "groupHeaderHeight", floatingFiltersHeight: "floatingFiltersHeight", pivotHeaderHeight: "pivotHeaderHeight", pivotGroupHeaderHeight: "pivotGroupHeaderHeight", groupDefaultExpanded: "groupDefaultExpanded", minColWidth: "minColWidth", maxColWidth: "maxColWidth", viewportRowModelPageSize: "viewportRowModelPageSize", viewportRowModelBufferSize: "viewportRowModelBufferSize", autoSizePadding: "autoSizePadding", maxBlocksInCache: "maxBlocksInCache", maxConcurrentDatasourceRequests: "maxConcurrentDatasourceRequests", tooltipShowDelay: "tooltipShowDelay", cacheOverflowSize: "cacheOverflowSize", paginationPageSize: "paginationPageSize", cacheBlockSize: "cacheBlockSize", infiniteInitialRowCount: "infiniteInitialRowCount", scrollbarWidth: "scrollbarWidth", paginationStartPage: "paginationStartPage", infiniteBlockSize: "infiniteBlockSize", batchUpdateWaitMillis: "batchUpdateWaitMillis", asyncTransactionWaitMillis: "asyncTransactionWaitMillis", blockLoadDebounceMillis: "blockLoadDebounceMillis", keepDetailRowsCount: "keepDetailRowsCount", undoRedoCellEditingLimit: "undoRedoCellEditingLimit", cellFlashDelay: "cellFlashDelay", cellFadeDelay: "cellFadeDelay", localeTextFunc: "localeTextFunc", groupRowInnerRenderer: "groupRowInnerRenderer", groupRowInnerRendererFramework: "groupRowInnerRendererFramework", dateComponent: "dateComponent", dateComponentFramework: "dateComponentFramework", groupRowRenderer: "groupRowRenderer", groupRowRendererFramework: "groupRowRendererFramework", isExternalFilterPresent: "isExternalFilterPresent", getRowHeight: "getRowHeight", doesExternalFilterPass: "doesExternalFilterPass", getRowClass: "getRowClass", getRowStyle: "getRowStyle", getRowClassRules: "getRowClassRules", traverseNode: "traverseNode", getContextMenuItems: "getContextMenuItems", getMainMenuItems: "getMainMenuItems", processRowPostCreate: "processRowPostCreate", processCellForClipboard: "processCellForClipboard", getNodeChildDetails: "getNodeChildDetails", groupRowAggNodes: "groupRowAggNodes", getRowNodeId: "getRowNodeId", isFullWidthCell: "isFullWidthCell", fullWidthCellRenderer: "fullWidthCellRenderer", fullWidthCellRendererFramework: "fullWidthCellRendererFramework", doesDataFlower: "doesDataFlower", processSecondaryColDef: "processSecondaryColDef", processSecondaryColGroupDef: "processSecondaryColGroupDef", getBusinessKeyForNode: "getBusinessKeyForNode", sendToClipboard: "sendToClipboard", navigateToNextCell: "navigateToNextCell", tabToNextCell: "tabToNextCell", getDetailRowData: "getDetailRowData", processCellFromClipboard: "processCellFromClipboard", getDocument: "getDocument", postProcessPopup: "postProcessPopup", getChildCount: "getChildCount", getDataPath: "getDataPath", loadingCellRenderer: "loadingCellRenderer", loadingCellRendererFramework: "loadingCellRendererFramework", loadingOverlayComponent: "loadingOverlayComponent", loadingOverlayComponentFramework: "loadingOverlayComponentFramework", noRowsOverlayComponent: "noRowsOverlayComponent", noRowsOverlayComponentFramework: "noRowsOverlayComponentFramework", detailCellRenderer: "detailCellRenderer", detailCellRendererFramework: "detailCellRendererFramework", defaultGroupSortComparator: "defaultGroupSortComparator", isRowMaster: "isRowMaster", isRowSelectable: "isRowSelectable", postSort: "postSort", processHeaderForClipboard: "processHeaderForClipboard", paginationNumberFormatter: "paginationNumberFormatter", processDataFromClipboard: "processDataFromClipboard", getServerSideGroupKey: "getServerSideGroupKey", isServerSideGroup: "isServerSideGroup", suppressKeyboardEvent: "suppressKeyboardEvent", createChartContainer: "createChartContainer", processChartOptions: "processChartOptions", getChartToolbarItems: "getChartToolbarItems", fillOperation: "fillOperation", toolPanelSuppressRowGroups: "toolPanelSuppressRowGroups", toolPanelSuppressValues: "toolPanelSuppressValues", toolPanelSuppressPivots: "toolPanelSuppressPivots", toolPanelSuppressPivotMode: "toolPanelSuppressPivotMode", toolPanelSuppressSideButtons: "toolPanelSuppressSideButtons", toolPanelSuppressColumnFilter: "toolPanelSuppressColumnFilter", toolPanelSuppressColumnSelectAll: "toolPanelSuppressColumnSelectAll", toolPanelSuppressColumnExpandAll: "toolPanelSuppressColumnExpandAll", suppressMakeColumnVisibleAfterUnGroup: "suppressMakeColumnVisibleAfterUnGroup", suppressRowClickSelection: "suppressRowClickSelection", suppressCellSelection: "suppressCellSelection", suppressHorizontalScroll: "suppressHorizontalScroll", alwaysShowVerticalScroll: "alwaysShowVerticalScroll", debug: "debug", enableBrowserTooltips: "enableBrowserTooltips", enableColResize: "enableColResize", enableCellExpressions: "enableCellExpressions", enableSorting: "enableSorting", enableServerSideSorting: "enableServerSideSorting", enableFilter: "enableFilter", enableServerSideFilter: "enableServerSideFilter", angularCompileRows: "angularCompileRows", angularCompileFilters: "angularCompileFilters", angularCompileHeaders: "angularCompileHeaders", groupSuppressAutoColumn: "groupSuppressAutoColumn", groupSelectsChildren: "groupSelectsChildren", groupIncludeFooter: "groupIncludeFooter", groupIncludeTotalFooter: "groupIncludeTotalFooter", groupUseEntireRow: "groupUseEntireRow", groupSuppressRow: "groupSuppressRow", groupSuppressBlankHeader: "groupSuppressBlankHeader", forPrint: "forPrint", suppressMenuHide: "suppressMenuHide", rowDeselection: "rowDeselection", unSortIcon: "unSortIcon", suppressMultiSort: "suppressMultiSort", singleClickEdit: "singleClickEdit", suppressLoadingOverlay: "suppressLoadingOverlay", suppressNoRowsOverlay: "suppressNoRowsOverlay", suppressAutoSize: "suppressAutoSize", skipHeaderOnAutoSize: "skipHeaderOnAutoSize", suppressParentsInRowNodes: "suppressParentsInRowNodes", showToolPanel: "showToolPanel", suppressColumnMoveAnimation: "suppressColumnMoveAnimation", suppressMovableColumns: "suppressMovableColumns", suppressFieldDotNotation: "suppressFieldDotNotation", enableRangeSelection: "enableRangeSelection", enableRangeHandle: "enableRangeHandle", enableFillHandle: "enableFillHandle", suppressClearOnFillReduction: "suppressClearOnFillReduction", deltaSort: "deltaSort", suppressTouch: "suppressTouch", suppressAsyncEvents: "suppressAsyncEvents", allowContextMenuWithControlKey: "allowContextMenuWithControlKey", suppressContextMenu: "suppressContextMenu", suppressMenuFilterPanel: "suppressMenuFilterPanel", suppressMenuMainPanel: "suppressMenuMainPanel", suppressMenuColumnPanel: "suppressMenuColumnPanel", rememberGroupStateWhenNewData: "rememberGroupStateWhenNewData", enableCellChangeFlash: "enableCellChangeFlash", suppressDragLeaveHidesColumns: "suppressDragLeaveHidesColumns", suppressMiddleClickScrolls: "suppressMiddleClickScrolls", suppressPreventDefaultOnMouseWheel: "suppressPreventDefaultOnMouseWheel", suppressUseColIdForGroups: "suppressUseColIdForGroups", suppressCopyRowsToClipboard: "suppressCopyRowsToClipboard", copyHeadersToClipboard: "copyHeadersToClipboard", pivotMode: "pivotMode", suppressAggFuncInHeader: "suppressAggFuncInHeader", suppressColumnVirtualisation: "suppressColumnVirtualisation", suppressAggAtRootLevel: "suppressAggAtRootLevel", suppressFocusAfterRefresh: "suppressFocusAfterRefresh", functionsPassive: "functionsPassive", functionsReadOnly: "functionsReadOnly", animateRows: "animateRows", groupSelectsFiltered: "groupSelectsFiltered", groupRemoveSingleChildren: "groupRemoveSingleChildren", groupRemoveLowestSingleChildren: "groupRemoveLowestSingleChildren", enableRtl: "enableRtl", suppressClickEdit: "suppressClickEdit", rowDragManaged: "rowDragManaged", suppressRowDrag: "suppressRowDrag", suppressMoveWhenRowDragging: "suppressMoveWhenRowDragging", enableMultiRowDragging: "enableMultiRowDragging", enableGroupEdit: "enableGroupEdit", embedFullWidthRows: "embedFullWidthRows", deprecatedEmbedFullWidthRows: "deprecatedEmbedFullWidthRows", suppressTabbing: "suppressTabbing", suppressPaginationPanel: "suppressPaginationPanel", floatingFilter: "floatingFilter", groupHideOpenParents: "groupHideOpenParents", groupMultiAutoColumn: "groupMultiAutoColumn", pagination: "pagination", stopEditingWhenGridLosesFocus: "stopEditingWhenGridLosesFocus", paginationAutoPageSize: "paginationAutoPageSize", suppressScrollOnNewData: "suppressScrollOnNewData", purgeClosedRowNodes: "purgeClosedRowNodes", cacheQuickFilter: "cacheQuickFilter", deltaRowDataMode: "deltaRowDataMode", ensureDomOrder: "ensureDomOrder", accentedSort: "accentedSort", pivotTotals: "pivotTotals", suppressChangeDetection: "suppressChangeDetection", valueCache: "valueCache", valueCacheNeverExpires: "valueCacheNeverExpires", aggregateOnlyChangedColumns: "aggregateOnlyChangedColumns", suppressAnimationFrame: "suppressAnimationFrame", suppressExcelExport: "suppressExcelExport", suppressCsvExport: "suppressCsvExport", treeData: "treeData", masterDetail: "masterDetail", suppressMultiRangeSelection: "suppressMultiRangeSelection", enterMovesDownAfterEdit: "enterMovesDownAfterEdit", enterMovesDown: "enterMovesDown", suppressPropertyNamesCheck: "suppressPropertyNamesCheck", rowMultiSelectWithClick: "rowMultiSelectWithClick", contractColumnSelection: "contractColumnSelection", suppressEnterpriseResetOnNewColumns: "suppressEnterpriseResetOnNewColumns", enableOldSetFilterModel: "enableOldSetFilterModel", suppressRowHoverHighlight: "suppressRowHoverHighlight", gridAutoHeight: "gridAutoHeight", suppressRowTransform: "suppressRowTransform", suppressClipboardPaste: "suppressClipboardPaste", suppressLastEmptyLineOnPaste: "suppressLastEmptyLineOnPaste", serverSideSortingAlwaysResets: "serverSideSortingAlwaysResets", reactNext: "reactNext", suppressSetColumnStateEvents: "suppressSetColumnStateEvents", enableCharts: "enableCharts", deltaColumnMode: "deltaColumnMode", suppressMaintainUnsortedOrder: "suppressMaintainUnsortedOrder", enableCellTextSelection: "enableCellTextSelection", suppressBrowserResizeObserver: "suppressBrowserResizeObserver", suppressMaxRenderedRowRestriction: "suppressMaxRenderedRowRestriction", excludeChildrenWhenTreeDataFiltering: "excludeChildrenWhenTreeDataFiltering", tooltipMouseTrack: "tooltipMouseTrack", keepDetailRows: "keepDetailRows", paginateChildRows: "paginateChildRows", preventDefaultOnContextMenu: "preventDefaultOnContextMenu", undoRedoCellEditing: "undoRedoCellEditing", allowDragFromColumnsToolPanel: "allowDragFromColumnsToolPanel", immutableData: "immutableData", immutableColumns: "immutableColumns", pivotSuppressAutoColumn: "pivotSuppressAutoColumn" }, outputs: { columnEverythingChanged: "columnEverythingChanged", newColumnsLoaded: "newColumnsLoaded", columnPivotModeChanged: "columnPivotModeChanged", columnRowGroupChanged: "columnRowGroupChanged", expandOrCollapseAll: "expandOrCollapseAll", columnPivotChanged: "columnPivotChanged", gridColumnsChanged: "gridColumnsChanged", columnValueChanged: "columnValueChanged", columnMoved: "columnMoved", columnVisible: "columnVisible", columnPinned: "columnPinned", columnGroupOpened: "columnGroupOpened", columnResized: "columnResized", displayedColumnsChanged: "displayedColumnsChanged", virtualColumnsChanged: "virtualColumnsChanged", rowGroupOpened: "rowGroupOpened", rowDataChanged: "rowDataChanged", rowDataUpdated: "rowDataUpdated", pinnedRowDataChanged: "pinnedRowDataChanged", rangeSelectionChanged: "rangeSelectionChanged", chartCreated: "chartCreated", chartRangeSelectionChanged: "chartRangeSelectionChanged", chartOptionsChanged: "chartOptionsChanged", chartDestroyed: "chartDestroyed", toolPanelVisibleChanged: "toolPanelVisibleChanged", modelUpdated: "modelUpdated", pasteStart: "pasteStart", pasteEnd: "pasteEnd", fillStart: "fillStart", fillEnd: "fillEnd", cellClicked: "cellClicked", cellDoubleClicked: "cellDoubleClicked", cellMouseDown: "cellMouseDown", cellContextMenu: "cellContextMenu", cellValueChanged: "cellValueChanged", rowValueChanged: "rowValueChanged", cellFocused: "cellFocused", rowSelected: "rowSelected", selectionChanged: "selectionChanged", cellKeyDown: "cellKeyDown", cellKeyPress: "cellKeyPress", cellMouseOver: "cellMouseOver", cellMouseOut: "cellMouseOut", filterChanged: "filterChanged", filterModified: "filterModified", filterOpened: "filterOpened", sortChanged: "sortChanged", virtualRowRemoved: "virtualRowRemoved", rowClicked: "rowClicked", rowDoubleClicked: "rowDoubleClicked", gridReady: "gridReady", gridSizeChanged: "gridSizeChanged", viewportChanged: "viewportChanged", firstDataRendered: "firstDataRendered", dragStarted: "dragStarted", dragStopped: "dragStopped", checkboxChanged: "checkboxChanged", rowEditingStarted: "rowEditingStarted", rowEditingStopped: "rowEditingStopped", cellEditingStarted: "cellEditingStarted", cellEditingStopped: "cellEditingStopped", bodyScroll: "bodyScroll", animationQueueEmpty: "animationQueueEmpty", heightScaleChanged: "heightScaleChanged", paginationChanged: "paginationChanged", componentStateChanged: "componentStateChanged", bodyHeightChanged: "bodyHeightChanged", displayedColumnsWidthChanged: "displayedColumnsWidthChanged", scrollVisibilityChanged: "scrollVisibilityChanged", columnHoverChanged: "columnHoverChanged", flashCells: "flashCells", rowDragEnter: "rowDragEnter", rowDragMove: "rowDragMove", rowDragLeave: "rowDragLeave", rowDragEnd: "rowDragEnd", popupToFront: "popupToFront", columnRowGroupChangeRequest: "columnRowGroupChangeRequest", columnPivotChangeRequest: "columnPivotChangeRequest", columnValueChangeRequest: "columnValueChangeRequest", columnAggFuncChangeRequest: "columnAggFuncChangeRequest", keyboardFocus: "keyboardFocus", mouseFocus: "mouseFocus" }, providers: [
        AngularFrameworkOverrides,
        AngularFrameworkComponentWrapper
    ], queries: [{ propertyName: "columns", predicate: AgGridColumn }], usesOnChanges: true, ngImport: i0, template: '', isInline: true, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AgGridAngular, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-grid-angular',
                    template: '',
                    providers: [
                        AngularFrameworkOverrides,
                        AngularFrameworkComponentWrapper
                    ],
                    // tell angular we don't want view encapsulation, we don't want a shadow root
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: AngularFrameworkOverrides }, { type: AngularFrameworkComponentWrapper }, { type: i0.ComponentFactoryResolver }]; }, propDecorators: { columns: [{
                type: ContentChildren,
                args: [AgGridColumn]
            }], gridOptions: [{
                type: Input
            }], modules: [{
                type: Input
            }], slaveGrids: [{
                type: Input
            }], alignedGrids: [{
                type: Input
            }], rowData: [{
                type: Input
            }], columnDefs: [{
                type: Input
            }], excelStyles: [{
                type: Input
            }], pinnedTopRowData: [{
                type: Input
            }], pinnedBottomRowData: [{
                type: Input
            }], components: [{
                type: Input
            }], frameworkComponents: [{
                type: Input
            }], rowStyle: [{
                type: Input
            }], context: [{
                type: Input
            }], autoGroupColumnDef: [{
                type: Input
            }], groupColumnDef: [{
                type: Input
            }], localeText: [{
                type: Input
            }], icons: [{
                type: Input
            }], datasource: [{
                type: Input
            }], serverSideDatasource: [{
                type: Input
            }], viewportDatasource: [{
                type: Input
            }], groupRowRendererParams: [{
                type: Input
            }], aggFuncs: [{
                type: Input
            }], fullWidthCellRendererParams: [{
                type: Input
            }], defaultColGroupDef: [{
                type: Input
            }], defaultColDef: [{
                type: Input
            }], defaultExportParams: [{
                type: Input
            }], columnTypes: [{
                type: Input
            }], rowClassRules: [{
                type: Input
            }], detailGridOptions: [{
                type: Input
            }], detailCellRendererParams: [{
                type: Input
            }], loadingCellRendererParams: [{
                type: Input
            }], loadingOverlayComponentParams: [{
                type: Input
            }], noRowsOverlayComponentParams: [{
                type: Input
            }], popupParent: [{
                type: Input
            }], colResizeDefault: [{
                type: Input
            }], reduxStore: [{
                type: Input
            }], statusBar: [{
                type: Input
            }], sideBar: [{
                type: Input
            }], sortingOrder: [{
                type: Input
            }], rowClass: [{
                type: Input
            }], rowSelection: [{
                type: Input
            }], overlayLoadingTemplate: [{
                type: Input
            }], overlayNoRowsTemplate: [{
                type: Input
            }], quickFilterText: [{
                type: Input
            }], rowModelType: [{
                type: Input
            }], editType: [{
                type: Input
            }], domLayout: [{
                type: Input
            }], clipboardDeliminator: [{
                type: Input
            }], rowGroupPanelShow: [{
                type: Input
            }], multiSortKey: [{
                type: Input
            }], pivotColumnGroupTotals: [{
                type: Input
            }], pivotRowTotals: [{
                type: Input
            }], pivotPanelShow: [{
                type: Input
            }], rowHeight: [{
                type: Input
            }], detailRowHeight: [{
                type: Input
            }], rowBuffer: [{
                type: Input
            }], colWidth: [{
                type: Input
            }], headerHeight: [{
                type: Input
            }], groupHeaderHeight: [{
                type: Input
            }], floatingFiltersHeight: [{
                type: Input
            }], pivotHeaderHeight: [{
                type: Input
            }], pivotGroupHeaderHeight: [{
                type: Input
            }], groupDefaultExpanded: [{
                type: Input
            }], minColWidth: [{
                type: Input
            }], maxColWidth: [{
                type: Input
            }], viewportRowModelPageSize: [{
                type: Input
            }], viewportRowModelBufferSize: [{
                type: Input
            }], autoSizePadding: [{
                type: Input
            }], maxBlocksInCache: [{
                type: Input
            }], maxConcurrentDatasourceRequests: [{
                type: Input
            }], tooltipShowDelay: [{
                type: Input
            }], cacheOverflowSize: [{
                type: Input
            }], paginationPageSize: [{
                type: Input
            }], cacheBlockSize: [{
                type: Input
            }], infiniteInitialRowCount: [{
                type: Input
            }], scrollbarWidth: [{
                type: Input
            }], paginationStartPage: [{
                type: Input
            }], infiniteBlockSize: [{
                type: Input
            }], batchUpdateWaitMillis: [{
                type: Input
            }], asyncTransactionWaitMillis: [{
                type: Input
            }], blockLoadDebounceMillis: [{
                type: Input
            }], keepDetailRowsCount: [{
                type: Input
            }], undoRedoCellEditingLimit: [{
                type: Input
            }], cellFlashDelay: [{
                type: Input
            }], cellFadeDelay: [{
                type: Input
            }], localeTextFunc: [{
                type: Input
            }], groupRowInnerRenderer: [{
                type: Input
            }], groupRowInnerRendererFramework: [{
                type: Input
            }], dateComponent: [{
                type: Input
            }], dateComponentFramework: [{
                type: Input
            }], groupRowRenderer: [{
                type: Input
            }], groupRowRendererFramework: [{
                type: Input
            }], isExternalFilterPresent: [{
                type: Input
            }], getRowHeight: [{
                type: Input
            }], doesExternalFilterPass: [{
                type: Input
            }], getRowClass: [{
                type: Input
            }], getRowStyle: [{
                type: Input
            }], getRowClassRules: [{
                type: Input
            }], traverseNode: [{
                type: Input
            }], getContextMenuItems: [{
                type: Input
            }], getMainMenuItems: [{
                type: Input
            }], processRowPostCreate: [{
                type: Input
            }], processCellForClipboard: [{
                type: Input
            }], getNodeChildDetails: [{
                type: Input
            }], groupRowAggNodes: [{
                type: Input
            }], getRowNodeId: [{
                type: Input
            }], isFullWidthCell: [{
                type: Input
            }], fullWidthCellRenderer: [{
                type: Input
            }], fullWidthCellRendererFramework: [{
                type: Input
            }], doesDataFlower: [{
                type: Input
            }], processSecondaryColDef: [{
                type: Input
            }], processSecondaryColGroupDef: [{
                type: Input
            }], getBusinessKeyForNode: [{
                type: Input
            }], sendToClipboard: [{
                type: Input
            }], navigateToNextCell: [{
                type: Input
            }], tabToNextCell: [{
                type: Input
            }], getDetailRowData: [{
                type: Input
            }], processCellFromClipboard: [{
                type: Input
            }], getDocument: [{
                type: Input
            }], postProcessPopup: [{
                type: Input
            }], getChildCount: [{
                type: Input
            }], getDataPath: [{
                type: Input
            }], loadingCellRenderer: [{
                type: Input
            }], loadingCellRendererFramework: [{
                type: Input
            }], loadingOverlayComponent: [{
                type: Input
            }], loadingOverlayComponentFramework: [{
                type: Input
            }], noRowsOverlayComponent: [{
                type: Input
            }], noRowsOverlayComponentFramework: [{
                type: Input
            }], detailCellRenderer: [{
                type: Input
            }], detailCellRendererFramework: [{
                type: Input
            }], defaultGroupSortComparator: [{
                type: Input
            }], isRowMaster: [{
                type: Input
            }], isRowSelectable: [{
                type: Input
            }], postSort: [{
                type: Input
            }], processHeaderForClipboard: [{
                type: Input
            }], paginationNumberFormatter: [{
                type: Input
            }], processDataFromClipboard: [{
                type: Input
            }], getServerSideGroupKey: [{
                type: Input
            }], isServerSideGroup: [{
                type: Input
            }], suppressKeyboardEvent: [{
                type: Input
            }], createChartContainer: [{
                type: Input
            }], processChartOptions: [{
                type: Input
            }], getChartToolbarItems: [{
                type: Input
            }], fillOperation: [{
                type: Input
            }], toolPanelSuppressRowGroups: [{
                type: Input
            }], toolPanelSuppressValues: [{
                type: Input
            }], toolPanelSuppressPivots: [{
                type: Input
            }], toolPanelSuppressPivotMode: [{
                type: Input
            }], toolPanelSuppressSideButtons: [{
                type: Input
            }], toolPanelSuppressColumnFilter: [{
                type: Input
            }], toolPanelSuppressColumnSelectAll: [{
                type: Input
            }], toolPanelSuppressColumnExpandAll: [{
                type: Input
            }], suppressMakeColumnVisibleAfterUnGroup: [{
                type: Input
            }], suppressRowClickSelection: [{
                type: Input
            }], suppressCellSelection: [{
                type: Input
            }], suppressHorizontalScroll: [{
                type: Input
            }], alwaysShowVerticalScroll: [{
                type: Input
            }], debug: [{
                type: Input
            }], enableBrowserTooltips: [{
                type: Input
            }], enableColResize: [{
                type: Input
            }], enableCellExpressions: [{
                type: Input
            }], enableSorting: [{
                type: Input
            }], enableServerSideSorting: [{
                type: Input
            }], enableFilter: [{
                type: Input
            }], enableServerSideFilter: [{
                type: Input
            }], angularCompileRows: [{
                type: Input
            }], angularCompileFilters: [{
                type: Input
            }], angularCompileHeaders: [{
                type: Input
            }], groupSuppressAutoColumn: [{
                type: Input
            }], groupSelectsChildren: [{
                type: Input
            }], groupIncludeFooter: [{
                type: Input
            }], groupIncludeTotalFooter: [{
                type: Input
            }], groupUseEntireRow: [{
                type: Input
            }], groupSuppressRow: [{
                type: Input
            }], groupSuppressBlankHeader: [{
                type: Input
            }], forPrint: [{
                type: Input
            }], suppressMenuHide: [{
                type: Input
            }], rowDeselection: [{
                type: Input
            }], unSortIcon: [{
                type: Input
            }], suppressMultiSort: [{
                type: Input
            }], singleClickEdit: [{
                type: Input
            }], suppressLoadingOverlay: [{
                type: Input
            }], suppressNoRowsOverlay: [{
                type: Input
            }], suppressAutoSize: [{
                type: Input
            }], skipHeaderOnAutoSize: [{
                type: Input
            }], suppressParentsInRowNodes: [{
                type: Input
            }], showToolPanel: [{
                type: Input
            }], suppressColumnMoveAnimation: [{
                type: Input
            }], suppressMovableColumns: [{
                type: Input
            }], suppressFieldDotNotation: [{
                type: Input
            }], enableRangeSelection: [{
                type: Input
            }], enableRangeHandle: [{
                type: Input
            }], enableFillHandle: [{
                type: Input
            }], suppressClearOnFillReduction: [{
                type: Input
            }], deltaSort: [{
                type: Input
            }], suppressTouch: [{
                type: Input
            }], suppressAsyncEvents: [{
                type: Input
            }], allowContextMenuWithControlKey: [{
                type: Input
            }], suppressContextMenu: [{
                type: Input
            }], suppressMenuFilterPanel: [{
                type: Input
            }], suppressMenuMainPanel: [{
                type: Input
            }], suppressMenuColumnPanel: [{
                type: Input
            }], rememberGroupStateWhenNewData: [{
                type: Input
            }], enableCellChangeFlash: [{
                type: Input
            }], suppressDragLeaveHidesColumns: [{
                type: Input
            }], suppressMiddleClickScrolls: [{
                type: Input
            }], suppressPreventDefaultOnMouseWheel: [{
                type: Input
            }], suppressUseColIdForGroups: [{
                type: Input
            }], suppressCopyRowsToClipboard: [{
                type: Input
            }], copyHeadersToClipboard: [{
                type: Input
            }], pivotMode: [{
                type: Input
            }], suppressAggFuncInHeader: [{
                type: Input
            }], suppressColumnVirtualisation: [{
                type: Input
            }], suppressAggAtRootLevel: [{
                type: Input
            }], suppressFocusAfterRefresh: [{
                type: Input
            }], functionsPassive: [{
                type: Input
            }], functionsReadOnly: [{
                type: Input
            }], animateRows: [{
                type: Input
            }], groupSelectsFiltered: [{
                type: Input
            }], groupRemoveSingleChildren: [{
                type: Input
            }], groupRemoveLowestSingleChildren: [{
                type: Input
            }], enableRtl: [{
                type: Input
            }], suppressClickEdit: [{
                type: Input
            }], rowDragManaged: [{
                type: Input
            }], suppressRowDrag: [{
                type: Input
            }], suppressMoveWhenRowDragging: [{
                type: Input
            }], enableMultiRowDragging: [{
                type: Input
            }], enableGroupEdit: [{
                type: Input
            }], embedFullWidthRows: [{
                type: Input
            }], deprecatedEmbedFullWidthRows: [{
                type: Input
            }], suppressTabbing: [{
                type: Input
            }], suppressPaginationPanel: [{
                type: Input
            }], floatingFilter: [{
                type: Input
            }], groupHideOpenParents: [{
                type: Input
            }], groupMultiAutoColumn: [{
                type: Input
            }], pagination: [{
                type: Input
            }], stopEditingWhenGridLosesFocus: [{
                type: Input
            }], paginationAutoPageSize: [{
                type: Input
            }], suppressScrollOnNewData: [{
                type: Input
            }], purgeClosedRowNodes: [{
                type: Input
            }], cacheQuickFilter: [{
                type: Input
            }], deltaRowDataMode: [{
                type: Input
            }], ensureDomOrder: [{
                type: Input
            }], accentedSort: [{
                type: Input
            }], pivotTotals: [{
                type: Input
            }], suppressChangeDetection: [{
                type: Input
            }], valueCache: [{
                type: Input
            }], valueCacheNeverExpires: [{
                type: Input
            }], aggregateOnlyChangedColumns: [{
                type: Input
            }], suppressAnimationFrame: [{
                type: Input
            }], suppressExcelExport: [{
                type: Input
            }], suppressCsvExport: [{
                type: Input
            }], treeData: [{
                type: Input
            }], masterDetail: [{
                type: Input
            }], suppressMultiRangeSelection: [{
                type: Input
            }], enterMovesDownAfterEdit: [{
                type: Input
            }], enterMovesDown: [{
                type: Input
            }], suppressPropertyNamesCheck: [{
                type: Input
            }], rowMultiSelectWithClick: [{
                type: Input
            }], contractColumnSelection: [{
                type: Input
            }], suppressEnterpriseResetOnNewColumns: [{
                type: Input
            }], enableOldSetFilterModel: [{
                type: Input
            }], suppressRowHoverHighlight: [{
                type: Input
            }], gridAutoHeight: [{
                type: Input
            }], suppressRowTransform: [{
                type: Input
            }], suppressClipboardPaste: [{
                type: Input
            }], suppressLastEmptyLineOnPaste: [{
                type: Input
            }], serverSideSortingAlwaysResets: [{
                type: Input
            }], reactNext: [{
                type: Input
            }], suppressSetColumnStateEvents: [{
                type: Input
            }], enableCharts: [{
                type: Input
            }], deltaColumnMode: [{
                type: Input
            }], suppressMaintainUnsortedOrder: [{
                type: Input
            }], enableCellTextSelection: [{
                type: Input
            }], suppressBrowserResizeObserver: [{
                type: Input
            }], suppressMaxRenderedRowRestriction: [{
                type: Input
            }], excludeChildrenWhenTreeDataFiltering: [{
                type: Input
            }], tooltipMouseTrack: [{
                type: Input
            }], keepDetailRows: [{
                type: Input
            }], paginateChildRows: [{
                type: Input
            }], preventDefaultOnContextMenu: [{
                type: Input
            }], undoRedoCellEditing: [{
                type: Input
            }], allowDragFromColumnsToolPanel: [{
                type: Input
            }], immutableData: [{
                type: Input
            }], immutableColumns: [{
                type: Input
            }], pivotSuppressAutoColumn: [{
                type: Input
            }], columnEverythingChanged: [{
                type: Output
            }], newColumnsLoaded: [{
                type: Output
            }], columnPivotModeChanged: [{
                type: Output
            }], columnRowGroupChanged: [{
                type: Output
            }], expandOrCollapseAll: [{
                type: Output
            }], columnPivotChanged: [{
                type: Output
            }], gridColumnsChanged: [{
                type: Output
            }], columnValueChanged: [{
                type: Output
            }], columnMoved: [{
                type: Output
            }], columnVisible: [{
                type: Output
            }], columnPinned: [{
                type: Output
            }], columnGroupOpened: [{
                type: Output
            }], columnResized: [{
                type: Output
            }], displayedColumnsChanged: [{
                type: Output
            }], virtualColumnsChanged: [{
                type: Output
            }], rowGroupOpened: [{
                type: Output
            }], rowDataChanged: [{
                type: Output
            }], rowDataUpdated: [{
                type: Output
            }], pinnedRowDataChanged: [{
                type: Output
            }], rangeSelectionChanged: [{
                type: Output
            }], chartCreated: [{
                type: Output
            }], chartRangeSelectionChanged: [{
                type: Output
            }], chartOptionsChanged: [{
                type: Output
            }], chartDestroyed: [{
                type: Output
            }], toolPanelVisibleChanged: [{
                type: Output
            }], modelUpdated: [{
                type: Output
            }], pasteStart: [{
                type: Output
            }], pasteEnd: [{
                type: Output
            }], fillStart: [{
                type: Output
            }], fillEnd: [{
                type: Output
            }], cellClicked: [{
                type: Output
            }], cellDoubleClicked: [{
                type: Output
            }], cellMouseDown: [{
                type: Output
            }], cellContextMenu: [{
                type: Output
            }], cellValueChanged: [{
                type: Output
            }], rowValueChanged: [{
                type: Output
            }], cellFocused: [{
                type: Output
            }], rowSelected: [{
                type: Output
            }], selectionChanged: [{
                type: Output
            }], cellKeyDown: [{
                type: Output
            }], cellKeyPress: [{
                type: Output
            }], cellMouseOver: [{
                type: Output
            }], cellMouseOut: [{
                type: Output
            }], filterChanged: [{
                type: Output
            }], filterModified: [{
                type: Output
            }], filterOpened: [{
                type: Output
            }], sortChanged: [{
                type: Output
            }], virtualRowRemoved: [{
                type: Output
            }], rowClicked: [{
                type: Output
            }], rowDoubleClicked: [{
                type: Output
            }], gridReady: [{
                type: Output
            }], gridSizeChanged: [{
                type: Output
            }], viewportChanged: [{
                type: Output
            }], firstDataRendered: [{
                type: Output
            }], dragStarted: [{
                type: Output
            }], dragStopped: [{
                type: Output
            }], checkboxChanged: [{
                type: Output
            }], rowEditingStarted: [{
                type: Output
            }], rowEditingStopped: [{
                type: Output
            }], cellEditingStarted: [{
                type: Output
            }], cellEditingStopped: [{
                type: Output
            }], bodyScroll: [{
                type: Output
            }], animationQueueEmpty: [{
                type: Output
            }], heightScaleChanged: [{
                type: Output
            }], paginationChanged: [{
                type: Output
            }], componentStateChanged: [{
                type: Output
            }], bodyHeightChanged: [{
                type: Output
            }], displayedColumnsWidthChanged: [{
                type: Output
            }], scrollVisibilityChanged: [{
                type: Output
            }], columnHoverChanged: [{
                type: Output
            }], flashCells: [{
                type: Output
            }], rowDragEnter: [{
                type: Output
            }], rowDragMove: [{
                type: Output
            }], rowDragLeave: [{
                type: Output
            }], rowDragEnd: [{
                type: Output
            }], popupToFront: [{
                type: Output
            }], columnRowGroupChangeRequest: [{
                type: Output
            }], columnPivotChangeRequest: [{
                type: Output
            }], columnValueChangeRequest: [{
                type: Output
            }], columnAggFuncChangeRequest: [{
                type: Output
            }], keyboardFocus: [{
                type: Output
            }], mouseFocus: [{
                type: Output
            }] } });

class AgGridModule {
    static withComponents(components) {
        return {
            ngModule: AgGridModule,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ],
        };
    }
    static forRoot(components) {
        return {
            ngModule: AgGridModule,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ],
        };
    }
}
AgGridModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AgGridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AgGridModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AgGridModule, declarations: [AgGridAngular, AgGridColumn], exports: [AgGridAngular, AgGridColumn] });
AgGridModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AgGridModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AgGridModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AgGridAngular, AgGridColumn],
                    imports: [],
                    exports: [AgGridAngular, AgGridColumn]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AgGridAngular, AgGridColumn, AgGridModule };
//# sourceMappingURL=time-loop-ag-grid-angular.js.map
