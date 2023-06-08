import { Component, ContentChildren, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
import { ComponentUtil, Events, Grid, GridOptionsWrapper, Promise, _ } from "@ag-grid-community/core";
import { AngularFrameworkOverrides } from "./angularFrameworkOverrides";
import { AngularFrameworkComponentWrapper } from "./angularFrameworkComponentWrapper";
import { AgGridColumn } from "./ag-grid-column.component";
import * as i0 from "@angular/core";
import * as i1 from "./angularFrameworkOverrides";
import * as i2 from "./angularFrameworkComponentWrapper";
export class AgGridAngular {
    constructor(elementDef, viewContainerRef, angularFrameworkOverrides, frameworkComponentWrapper, _componentFactoryResolver) {
        this.viewContainerRef = viewContainerRef;
        this.angularFrameworkOverrides = angularFrameworkOverrides;
        this.frameworkComponentWrapper = frameworkComponentWrapper;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._initialised = false;
        this._destroyed = false;
        // in order to ensure firing of gridReady is deterministic
        this._fullyReady = Promise.resolve(true);
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
AgGridAngular.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AgGridAngular, deps: [{ token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: i1.AngularFrameworkOverrides }, { token: i2.AngularFrameworkComponentWrapper }, { token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.Component });
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
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i1.AngularFrameworkOverrides }, { type: i2.AngularFrameworkComponentWrapper }, { type: i0.ComponentFactoryResolver }]; }, propDecorators: { columns: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWctZ3JpZC1hbmd1bGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FnLWdyaWQtYW5ndWxhci9zcmMvbGliL2FnLWdyaWQtYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVILFNBQVMsRUFFVCxlQUFlLEVBRWYsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04saUJBQWlCLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFHSCxhQUFhLEVBQ2IsTUFBTSxFQUNOLElBQUksRUFHSixrQkFBa0IsRUFHbEIsT0FBTyxFQUNQLENBQUMsRUFDSixNQUFNLHlCQUF5QixDQUFDO0FBRWpDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQVkxRCxNQUFNLE9BQU8sYUFBYTtJQWtCdEIsWUFBWSxVQUFzQixFQUN0QixnQkFBa0MsRUFDbEMseUJBQW9ELEVBQ3BELHlCQUEyRCxFQUMzRCx5QkFBbUQ7UUFIbkQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBa0M7UUFDM0QsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQWxCdkQsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUkzQiwwREFBMEQ7UUFDbEQsZ0JBQVcsR0FBcUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQThHOUQsVUFBVTtRQUNNLGVBQVUsR0FBUyxTQUFTLENBQUM7UUFDN0IsaUJBQVksR0FBUyxTQUFT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LFVBQVU7c0JBQTFCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFmdGVyVmlld0luaXQsXG4gICAgQ29tcG9uZW50LFxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBWaWV3Q29udGFpbmVyUmVmLFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7XG4gICAgQ29sRGVmLFxuICAgIENvbHVtbkFwaSxcbiAgICBDb21wb25lbnRVdGlsLFxuICAgIEV2ZW50cyxcbiAgICBHcmlkLFxuICAgIEdyaWRBcGksXG4gICAgR3JpZE9wdGlvbnMsXG4gICAgR3JpZE9wdGlvbnNXcmFwcGVyLFxuICAgIEdyaWRQYXJhbXMsXG4gICAgTW9kdWxlLFxuICAgIFByb21pc2UsXG4gICAgX1xufSBmcm9tIFwiQGFnLWdyaWQtY29tbXVuaXR5L2NvcmVcIjtcblxuaW1wb3J0IHsgQW5ndWxhckZyYW1ld29ya092ZXJyaWRlcyB9IGZyb20gXCIuL2FuZ3VsYXJGcmFtZXdvcmtPdmVycmlkZXNcIjtcbmltcG9ydCB7IEFuZ3VsYXJGcmFtZXdvcmtDb21wb25lbnRXcmFwcGVyIH0gZnJvbSBcIi4vYW5ndWxhckZyYW1ld29ya0NvbXBvbmVudFdyYXBwZXJcIjtcbmltcG9ydCB7IEFnR3JpZENvbHVtbiB9IGZyb20gXCIuL2FnLWdyaWQtY29sdW1uLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FnLWdyaWQtYW5ndWxhcicsXG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBbmd1bGFyRnJhbWV3b3JrT3ZlcnJpZGVzLFxuICAgICAgICBBbmd1bGFyRnJhbWV3b3JrQ29tcG9uZW50V3JhcHBlclxuICAgIF0sXG4gICAgLy8gdGVsbCBhbmd1bGFyIHdlIGRvbid0IHdhbnQgdmlldyBlbmNhcHN1bGF0aW9uLCB3ZSBkb24ndCB3YW50IGEgc2hhZG93IHJvb3RcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEFnR3JpZEFuZ3VsYXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICAvLyBub3QgaW50ZW5kZWQgZm9yIHVzZXIgdG8gaW50ZXJhY3Qgd2l0aC4gc28gcHV0dGluZyBfIGluIHNvIGlmIHVzZXIgZ2V0cyByZWZlcmVuY2VcbiAgICAvLyB0byB0aGlzIG9iamVjdCwgdGhleSBraW5kJ2Ega25vdyBpdCdzIG5vdCBwYXJ0IG9mIHRoZSBhZ3JlZWQgaW50ZXJmYWNlXG4gICAgcHJpdmF0ZSBfbmF0aXZlRWxlbWVudDogYW55O1xuICAgIHByaXZhdGUgX2luaXRpYWxpc2VkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGdyaWRQYXJhbXM6IEdyaWRQYXJhbXM7XG5cbiAgICAvLyBpbiBvcmRlciB0byBlbnN1cmUgZmlyaW5nIG9mIGdyaWRSZWFkeSBpcyBkZXRlcm1pbmlzdGljXG4gICAgcHJpdmF0ZSBfZnVsbHlSZWFkeTogUHJvbWlzZTxib29sZWFuPiA9IFByb21pc2UucmVzb2x2ZSh0cnVlKTtcblxuICAgIC8vIG1ha2luZyB0aGVzZSBwdWJsaWMsIHNvIHRoZXkgYXJlIGFjY2Vzc2libGUgdG8gcGVvcGxlIHVzaW5nIHRoZSBuZzIgY29tcG9uZW50IHJlZmVyZW5jZXNcbiAgICBwdWJsaWMgYXBpOiBHcmlkQXBpO1xuICAgIHB1YmxpYyBjb2x1bW5BcGk6IENvbHVtbkFwaTtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oQWdHcmlkQ29sdW1uKSBwdWJsaWMgY29sdW1uczogUXVlcnlMaXN0PEFnR3JpZENvbHVtbj47XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50RGVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHByaXZhdGUgYW5ndWxhckZyYW1ld29ya092ZXJyaWRlczogQW5ndWxhckZyYW1ld29ya092ZXJyaWRlcyxcbiAgICAgICAgcHJpdmF0ZSBmcmFtZXdvcmtDb21wb25lbnRXcmFwcGVyOiBBbmd1bGFyRnJhbWV3b3JrQ29tcG9uZW50V3JhcHBlcixcbiAgICAgICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcbiAgICAgICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IGVsZW1lbnREZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgICB0aGlzLmZyYW1ld29ya0NvbXBvbmVudFdyYXBwZXIuc2V0Vmlld0NvbnRhaW5lclJlZih0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLmZyYW1ld29ya0NvbXBvbmVudFdyYXBwZXIuc2V0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyKHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcik7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoZWNrRm9yRGVwcmVjYXRlZEV2ZW50cygpO1xuXG4gICAgICAgIHRoaXMuZ3JpZE9wdGlvbnMgPSBDb21wb25lbnRVdGlsLmNvcHlBdHRyaWJ1dGVzVG9HcmlkT3B0aW9ucyh0aGlzLmdyaWRPcHRpb25zLCB0aGlzLCB0cnVlKTtcblxuICAgICAgICB0aGlzLmdyaWRQYXJhbXMgPSB7XG4gICAgICAgICAgICBnbG9iYWxFdmVudExpc3RlbmVyOiB0aGlzLmdsb2JhbEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGZyYW1ld29ya092ZXJyaWRlczogdGhpcy5hbmd1bGFyRnJhbWV3b3JrT3ZlcnJpZGVzLFxuICAgICAgICAgICAgcHJvdmlkZWRCZWFuSW5zdGFuY2VzOiB7XG4gICAgICAgICAgICAgICAgZnJhbWV3b3JrQ29tcG9uZW50V3JhcHBlcjogdGhpcy5mcmFtZXdvcmtDb21wb25lbnRXcmFwcGVyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kdWxlczogKHRoaXMubW9kdWxlcyB8fCBbXSkgYXMgYW55XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuY29sdW1ucyAmJiB0aGlzLmNvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5ncmlkT3B0aW9ucy5jb2x1bW5EZWZzID0gdGhpcy5jb2x1bW5zXG4gICAgICAgICAgICAgICAgLm1hcCgoY29sdW1uOiBBZ0dyaWRDb2x1bW4pOiBDb2xEZWYgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29sdW1uLnRvQ29sRGVmKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXcgR3JpZCh0aGlzLl9uYXRpdmVFbGVtZW50LCB0aGlzLmdyaWRPcHRpb25zLCB0aGlzLmdyaWRQYXJhbXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmdyaWRPcHRpb25zLmFwaSkge1xuICAgICAgICAgICAgdGhpcy5hcGkgPSB0aGlzLmdyaWRPcHRpb25zLmFwaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdyaWRPcHRpb25zLmNvbHVtbkFwaSkge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5BcGkgPSB0aGlzLmdyaWRPcHRpb25zLmNvbHVtbkFwaTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2luaXRpYWxpc2VkID0gdHJ1ZTtcblxuICAgICAgICAvLyBzb21ldGltZXMsIGVzcGVjaWFsbHkgaW4gbGFyZ2UgY2xpZW50IGFwcHMgZ3JpZFJlYWR5IGNhbiBmaXJlIGJlZm9yZSBuZ0FmdGVyVmlld0luaXRcbiAgICAgICAgLy8gdGhpcyB0aWVzIHRoZXNlIHRvZ2V0aGVyIHNvIHRoYXQgZ3JpZFJlYWR5IHdpbGwgYWx3YXlzIGZpcmUgYWZ0ZXIgYWdHcmlkQW5ndWxhcidzIG5nQWZ0ZXJWaWV3SW5pdFxuICAgICAgICAvLyB0aGUgYWN0dWFsIGNvbnRhaW5pbmcgY29tcG9uZW50J3MgbmdBZnRlclZpZXdJbml0IHdpbGwgZmlyZSBqdXN0IGFmdGVyIGFnR3JpZEFuZ3VsYXInc1xuICAgICAgICB0aGlzLl9mdWxseVJlYWR5LnJlc29sdmVOb3cobnVsbCwgcmVzb2x2ZSA9PiByZXNvbHZlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9pbml0aWFsaXNlZCkge1xuICAgICAgICAgICAgQ29tcG9uZW50VXRpbC5wcm9jZXNzT25DaGFuZ2UoY2hhbmdlcywgdGhpcy5ncmlkT3B0aW9ucywgdGhpcy5hcGksIHRoaXMuY29sdW1uQXBpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2luaXRpYWxpc2VkKSB7XG4gICAgICAgICAgICAvLyBuZWVkIHRvIGRvIHRoaXMgYmVmb3JlIHRoZSBkZXN0cm95LCBzbyB3ZSBrbm93IG5vdCB0byBlbWl0IGFueSBldmVudHNcbiAgICAgICAgICAgIC8vIHdoaWxlIHRlYXJpbmcgZG93biB0aGUgZ3JpZC5cbiAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5hcGkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwaS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrRm9yRGVwcmVjYXRlZEV2ZW50cygpIHtcbiAgICAgICAgXy5pdGVyYXRlT2JqZWN0PGFueT4oRXZlbnRzLCAoa2V5LCBldmVudE5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzW2V2ZW50TmFtZV0gJiYgKDxFdmVudEVtaXR0ZXI8YW55Pj50aGlzW2V2ZW50TmFtZV0pLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgR3JpZE9wdGlvbnNXcmFwcGVyLmNoZWNrRXZlbnREZXByZWNhdGlvbihldmVudE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdsb2JhbEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlOiBzdHJpbmcsIGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIHRlYXJpbmcgZG93biwgZG9uJ3QgZW1pdCBhbmd1bGFyIGV2ZW50cywgYXMgdGhpcyBjYXVzZXNcbiAgICAgICAgLy8gcHJvYmxlbXMgd2l0aCB0aGUgYW5ndWxhciByb3V0ZXJcbiAgICAgICAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2VuZXJpY2FsbHkgbG9vayB1cCB0aGUgZXZlbnRUeXBlXG4gICAgICAgIGxldCBlbWl0dGVyID0gPEV2ZW50RW1pdHRlcjxhbnk+Pig8YW55PnRoaXMpW2V2ZW50VHlwZV07XG4gICAgICAgIGlmIChlbWl0dGVyKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnRUeXBlID09PSAnZ3JpZFJlYWR5Jykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB1c2VyIGlzIGxpc3RlbmluZyBmb3IgZ3JpZFJlYWR5LCB3YWl0IGZvciBuZ0FmdGVyVmlld0luaXQgdG8gZmlyZSBmaXJzdCwgdGhlbiBlbWl0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGdyaWRSZWFkeSBldmVudFxuICAgICAgICAgICAgICAgIHRoaXMuX2Z1bGx5UmVhZHkudGhlbigocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5lbWl0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVtaXR0ZXIuZW1pdChldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWctR3JpZC1hbmd1bGFyOiBjb3VsZCBub3QgZmluZCBFdmVudEVtaXR0ZXI6ICcgKyBldmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KCkgcHVibGljIGdyaWRPcHRpb25zOiBHcmlkT3B0aW9ucztcbiAgICBASW5wdXQoKSBwdWJsaWMgbW9kdWxlczogTW9kdWxlW107XG5cbiAgICAvLyBAU1RBUlRAXG4gICAgQElucHV0KCkgcHVibGljIHNsYXZlR3JpZHMgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGFsaWduZWRHcmlkcyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93RGF0YSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgY29sdW1uRGVmcyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZXhjZWxTdHlsZXMgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHBpbm5lZFRvcFJvd0RhdGEgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHBpbm5lZEJvdHRvbVJvd0RhdGEgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGNvbXBvbmVudHMgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGZyYW1ld29ya0NvbXBvbmVudHMgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHJvd1N0eWxlIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjb250ZXh0IDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhdXRvR3JvdXBDb2x1bW5EZWYgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwQ29sdW1uRGVmIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBsb2NhbGVUZXh0IDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpY29ucyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZGF0YXNvdXJjZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc2VydmVyU2lkZURhdGFzb3VyY2UgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHZpZXdwb3J0RGF0YXNvdXJjZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBSb3dSZW5kZXJlclBhcmFtcyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgYWdnRnVuY3MgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGZ1bGxXaWR0aENlbGxSZW5kZXJlclBhcmFtcyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZGVmYXVsdENvbEdyb3VwRGVmIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkZWZhdWx0Q29sRGVmIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkZWZhdWx0RXhwb3J0UGFyYW1zIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjb2x1bW5UeXBlcyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93Q2xhc3NSdWxlcyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZGV0YWlsR3JpZE9wdGlvbnMgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGRldGFpbENlbGxSZW5kZXJlclBhcmFtcyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZ0NlbGxSZW5kZXJlclBhcmFtcyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZ092ZXJsYXlDb21wb25lbnRQYXJhbXMgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIG5vUm93c092ZXJsYXlDb21wb25lbnRQYXJhbXMgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHBvcHVwUGFyZW50IDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjb2xSZXNpemVEZWZhdWx0IDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyByZWR1eFN0b3JlIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdGF0dXNCYXIgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHNpZGVCYXIgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHNvcnRpbmdPcmRlciA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93Q2xhc3MgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHJvd1NlbGVjdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgb3ZlcmxheUxvYWRpbmdUZW1wbGF0ZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgb3ZlcmxheU5vUm93c1RlbXBsYXRlIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBxdWlja0ZpbHRlclRleHQgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHJvd01vZGVsVHlwZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZWRpdFR5cGUgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGRvbUxheW91dCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgY2xpcGJvYXJkRGVsaW1pbmF0b3IgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHJvd0dyb3VwUGFuZWxTaG93IDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtdWx0aVNvcnRLZXkgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHBpdm90Q29sdW1uR3JvdXBUb3RhbHMgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHBpdm90Um93VG90YWxzIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwaXZvdFBhbmVsU2hvdyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93SGVpZ2h0IDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkZXRhaWxSb3dIZWlnaHQgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHJvd0J1ZmZlciA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgY29sV2lkdGggOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckhlaWdodCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBIZWFkZXJIZWlnaHQgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGZsb2F0aW5nRmlsdGVyc0hlaWdodCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgcGl2b3RIZWFkZXJIZWlnaHQgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHBpdm90R3JvdXBIZWFkZXJIZWlnaHQgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwRGVmYXVsdEV4cGFuZGVkIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtaW5Db2xXaWR0aCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgbWF4Q29sV2lkdGggOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHZpZXdwb3J0Um93TW9kZWxQYWdlU2l6ZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgdmlld3BvcnRSb3dNb2RlbEJ1ZmZlclNpemUgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGF1dG9TaXplUGFkZGluZyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgbWF4QmxvY2tzSW5DYWNoZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgbWF4Q29uY3VycmVudERhdGFzb3VyY2VSZXF1ZXN0cyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbHRpcFNob3dEZWxheSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgY2FjaGVPdmVyZmxvd1NpemUgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHBhZ2luYXRpb25QYWdlU2l6ZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgY2FjaGVCbG9ja1NpemUgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGluZmluaXRlSW5pdGlhbFJvd0NvdW50IDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzY3JvbGxiYXJXaWR0aCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgcGFnaW5hdGlvblN0YXJ0UGFnZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgaW5maW5pdGVCbG9ja1NpemUgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGJhdGNoVXBkYXRlV2FpdE1pbGxpcyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgYXN5bmNUcmFuc2FjdGlvbldhaXRNaWxsaXMgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGJsb2NrTG9hZERlYm91bmNlTWlsbGlzIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBrZWVwRGV0YWlsUm93c0NvdW50IDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyB1bmRvUmVkb0NlbGxFZGl0aW5nTGltaXQgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGNlbGxGbGFzaERlbGF5IDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsRmFkZURlbGF5IDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBsb2NhbGVUZXh0RnVuYyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBSb3dJbm5lclJlbmRlcmVyIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cFJvd0lubmVyUmVuZGVyZXJGcmFtZXdvcmsgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGRhdGVDb21wb25lbnQgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGRhdGVDb21wb25lbnRGcmFtZXdvcmsgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwUm93UmVuZGVyZXIgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwUm93UmVuZGVyZXJGcmFtZXdvcmsgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGlzRXh0ZXJuYWxGaWx0ZXJQcmVzZW50IDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRSb3dIZWlnaHQgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGRvZXNFeHRlcm5hbEZpbHRlclBhc3MgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGdldFJvd0NsYXNzIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRSb3dTdHlsZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0Um93Q2xhc3NSdWxlcyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgdHJhdmVyc2VOb2RlIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRDb250ZXh0TWVudUl0ZW1zIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRNYWluTWVudUl0ZW1zIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwcm9jZXNzUm93UG9zdENyZWF0ZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgcHJvY2Vzc0NlbGxGb3JDbGlwYm9hcmQgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGdldE5vZGVDaGlsZERldGFpbHMgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwUm93QWdnTm9kZXMgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGdldFJvd05vZGVJZCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgaXNGdWxsV2lkdGhDZWxsIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmdWxsV2lkdGhDZWxsUmVuZGVyZXIgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGZ1bGxXaWR0aENlbGxSZW5kZXJlckZyYW1ld29yayA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZG9lc0RhdGFGbG93ZXIgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHByb2Nlc3NTZWNvbmRhcnlDb2xEZWYgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHByb2Nlc3NTZWNvbmRhcnlDb2xHcm91cERlZiA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0QnVzaW5lc3NLZXlGb3JOb2RlIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzZW5kVG9DbGlwYm9hcmQgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIG5hdmlnYXRlVG9OZXh0Q2VsbCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgdGFiVG9OZXh0Q2VsbCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0RGV0YWlsUm93RGF0YSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgcHJvY2Vzc0NlbGxGcm9tQ2xpcGJvYXJkIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXREb2N1bWVudCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgcG9zdFByb2Nlc3NQb3B1cCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0Q2hpbGRDb3VudCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0RGF0YVBhdGggOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGxvYWRpbmdDZWxsUmVuZGVyZXIgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGxvYWRpbmdDZWxsUmVuZGVyZXJGcmFtZXdvcmsgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGxvYWRpbmdPdmVybGF5Q29tcG9uZW50IDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBsb2FkaW5nT3ZlcmxheUNvbXBvbmVudEZyYW1ld29yayA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgbm9Sb3dzT3ZlcmxheUNvbXBvbmVudCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgbm9Sb3dzT3ZlcmxheUNvbXBvbmVudEZyYW1ld29yayA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZGV0YWlsQ2VsbFJlbmRlcmVyIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkZXRhaWxDZWxsUmVuZGVyZXJGcmFtZXdvcmsgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGRlZmF1bHRHcm91cFNvcnRDb21wYXJhdG9yIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpc1Jvd01hc3RlciA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgaXNSb3dTZWxlY3RhYmxlIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwb3N0U29ydCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgcHJvY2Vzc0hlYWRlckZvckNsaXBib2FyZCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgcGFnaW5hdGlvbk51bWJlckZvcm1hdHRlciA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgcHJvY2Vzc0RhdGFGcm9tQ2xpcGJvYXJkIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRTZXJ2ZXJTaWRlR3JvdXBLZXkgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGlzU2VydmVyU2lkZUdyb3VwIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0tleWJvYXJkRXZlbnQgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGNyZWF0ZUNoYXJ0Q29udGFpbmVyIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwcm9jZXNzQ2hhcnRPcHRpb25zIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRDaGFydFRvb2xiYXJJdGVtcyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZmlsbE9wZXJhdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbFBhbmVsU3VwcHJlc3NSb3dHcm91cHMgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHRvb2xQYW5lbFN1cHByZXNzVmFsdWVzIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0b29sUGFuZWxTdXBwcmVzc1Bpdm90cyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbFBhbmVsU3VwcHJlc3NQaXZvdE1vZGUgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHRvb2xQYW5lbFN1cHByZXNzU2lkZUJ1dHRvbnMgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHRvb2xQYW5lbFN1cHByZXNzQ29sdW1uRmlsdGVyIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0b29sUGFuZWxTdXBwcmVzc0NvbHVtblNlbGVjdEFsbCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbFBhbmVsU3VwcHJlc3NDb2x1bW5FeHBhbmRBbGwgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzTWFrZUNvbHVtblZpc2libGVBZnRlclVuR3JvdXAgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUm93Q2xpY2tTZWxlY3Rpb24gOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQ2VsbFNlbGVjdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NIb3Jpem9udGFsU2Nyb2xsIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhbHdheXNTaG93VmVydGljYWxTY3JvbGwgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGRlYnVnIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVCcm93c2VyVG9vbHRpcHMgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZUNvbFJlc2l6ZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlQ2VsbEV4cHJlc3Npb25zIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVTb3J0aW5nIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVTZXJ2ZXJTaWRlU29ydGluZyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlRmlsdGVyIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVTZXJ2ZXJTaWRlRmlsdGVyIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhbmd1bGFyQ29tcGlsZVJvd3MgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGFuZ3VsYXJDb21waWxlRmlsdGVycyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgYW5ndWxhckNvbXBpbGVIZWFkZXJzIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cFN1cHByZXNzQXV0b0NvbHVtbiA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBTZWxlY3RzQ2hpbGRyZW4gOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwSW5jbHVkZUZvb3RlciA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBJbmNsdWRlVG90YWxGb290ZXIgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwVXNlRW50aXJlUm93IDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cFN1cHByZXNzUm93IDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cFN1cHByZXNzQmxhbmtIZWFkZXIgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGZvclByaW50IDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc01lbnVIaWRlIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dEZXNlbGVjdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgdW5Tb3J0SWNvbiA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NNdWx0aVNvcnQgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHNpbmdsZUNsaWNrRWRpdCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NMb2FkaW5nT3ZlcmxheSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NOb1Jvd3NPdmVybGF5IDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0F1dG9TaXplIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBza2lwSGVhZGVyT25BdXRvU2l6ZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NQYXJlbnRzSW5Sb3dOb2RlcyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc2hvd1Rvb2xQYW5lbCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDb2x1bW5Nb3ZlQW5pbWF0aW9uIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc01vdmFibGVDb2x1bW5zIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0ZpZWxkRG90Tm90YXRpb24gOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZVJhbmdlU2VsZWN0aW9uIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVSYW5nZUhhbmRsZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlRmlsbEhhbmRsZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDbGVhck9uRmlsbFJlZHVjdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZGVsdGFTb3J0IDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1RvdWNoIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0FzeW5jRXZlbnRzIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhbGxvd0NvbnRleHRNZW51V2l0aENvbnRyb2xLZXkgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQ29udGV4dE1lbnUgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzTWVudUZpbHRlclBhbmVsIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc01lbnVNYWluUGFuZWwgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzTWVudUNvbHVtblBhbmVsIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyByZW1lbWJlckdyb3VwU3RhdGVXaGVuTmV3RGF0YSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlQ2VsbENoYW5nZUZsYXNoIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0RyYWdMZWF2ZUhpZGVzQ29sdW1ucyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NNaWRkbGVDbGlja1Njcm9sbHMgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUHJldmVudERlZmF1bHRPbk1vdXNlV2hlZWwgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzVXNlQ29sSWRGb3JHcm91cHMgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQ29weVJvd3NUb0NsaXBib2FyZCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgY29weUhlYWRlcnNUb0NsaXBib2FyZCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgcGl2b3RNb2RlIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0FnZ0Z1bmNJbkhlYWRlciA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDb2x1bW5WaXJ0dWFsaXNhdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NBZ2dBdFJvb3RMZXZlbCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NGb2N1c0FmdGVyUmVmcmVzaCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZnVuY3Rpb25zUGFzc2l2ZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZnVuY3Rpb25zUmVhZE9ubHkgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGFuaW1hdGVSb3dzIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cFNlbGVjdHNGaWx0ZXJlZCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBSZW1vdmVTaW5nbGVDaGlsZHJlbiA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBSZW1vdmVMb3dlc3RTaW5nbGVDaGlsZHJlbiA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlUnRsIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0NsaWNrRWRpdCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93RHJhZ01hbmFnZWQgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUm93RHJhZyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NNb3ZlV2hlblJvd0RyYWdnaW5nIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVNdWx0aVJvd0RyYWdnaW5nIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVHcm91cEVkaXQgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGVtYmVkRnVsbFdpZHRoUm93cyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZGVwcmVjYXRlZEVtYmVkRnVsbFdpZHRoUm93cyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NUYWJiaW5nIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1BhZ2luYXRpb25QYW5lbCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZmxvYXRpbmdGaWx0ZXIgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwSGlkZU9wZW5QYXJlbnRzIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cE11bHRpQXV0b0NvbHVtbiA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgcGFnaW5hdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3RvcEVkaXRpbmdXaGVuR3JpZExvc2VzRm9jdXMgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHBhZ2luYXRpb25BdXRvUGFnZVNpemUgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzU2Nyb2xsT25OZXdEYXRhIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwdXJnZUNsb3NlZFJvd05vZGVzIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjYWNoZVF1aWNrRmlsdGVyIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkZWx0YVJvd0RhdGFNb2RlIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBlbnN1cmVEb21PcmRlciA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgYWNjZW50ZWRTb3J0IDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwaXZvdFRvdGFscyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDaGFuZ2VEZXRlY3Rpb24gOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHZhbHVlQ2FjaGUgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHZhbHVlQ2FjaGVOZXZlckV4cGlyZXMgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGFnZ3JlZ2F0ZU9ubHlDaGFuZ2VkQ29sdW1ucyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NBbmltYXRpb25GcmFtZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NFeGNlbEV4cG9ydCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDc3ZFeHBvcnQgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHRyZWVEYXRhIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtYXN0ZXJEZXRhaWwgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzTXVsdGlSYW5nZVNlbGVjdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZW50ZXJNb3Zlc0Rvd25BZnRlckVkaXQgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGVudGVyTW92ZXNEb3duIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1Byb3BlcnR5TmFtZXNDaGVjayA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93TXVsdGlTZWxlY3RXaXRoQ2xpY2sgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGNvbnRyYWN0Q29sdW1uU2VsZWN0aW9uIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0VudGVycHJpc2VSZXNldE9uTmV3Q29sdW1ucyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlT2xkU2V0RmlsdGVyTW9kZWwgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUm93SG92ZXJIaWdobGlnaHQgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGdyaWRBdXRvSGVpZ2h0IDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1Jvd1RyYW5zZm9ybSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDbGlwYm9hcmRQYXN0ZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NMYXN0RW1wdHlMaW5lT25QYXN0ZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc2VydmVyU2lkZVNvcnRpbmdBbHdheXNSZXNldHMgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHJlYWN0TmV4dCA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NTZXRDb2x1bW5TdGF0ZUV2ZW50cyA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlQ2hhcnRzIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkZWx0YUNvbHVtbk1vZGUgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzTWFpbnRhaW5VbnNvcnRlZE9yZGVyIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVDZWxsVGV4dFNlbGVjdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NCcm93c2VyUmVzaXplT2JzZXJ2ZXIgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzTWF4UmVuZGVyZWRSb3dSZXN0cmljdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZXhjbHVkZUNoaWxkcmVuV2hlblRyZWVEYXRhRmlsdGVyaW5nIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwTW91c2VUcmFjayA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMga2VlcERldGFpbFJvd3MgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHBhZ2luYXRlQ2hpbGRSb3dzIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwcmV2ZW50RGVmYXVsdE9uQ29udGV4dE1lbnUgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHVuZG9SZWRvQ2VsbEVkaXRpbmcgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGFsbG93RHJhZ0Zyb21Db2x1bW5zVG9vbFBhbmVsIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpbW11dGFibGVEYXRhIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpbW11dGFibGVDb2x1bW5zIDogYW55ID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwaXZvdFN1cHByZXNzQXV0b0NvbHVtbiA6IGFueSA9IHVuZGVmaW5lZDtcblxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uRXZlcnl0aGluZ0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBuZXdDb2x1bW5zTG9hZGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uUGl2b3RNb2RlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGNvbHVtblJvd0dyb3VwQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGV4cGFuZE9yQ29sbGFwc2VBbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5QaXZvdENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBncmlkQ29sdW1uc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5WYWx1ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5Nb3ZlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGNvbHVtblZpc2libGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5QaW5uZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5Hcm91cE9wZW5lZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGNvbHVtblJlc2l6ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBkaXNwbGF5ZWRDb2x1bW5zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIHZpcnR1YWxDb2x1bW5zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd0dyb3VwT3BlbmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgcm93RGF0YUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyByb3dEYXRhVXBkYXRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIHBpbm5lZFJvd0RhdGFDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgcmFuZ2VTZWxlY3Rpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2hhcnRDcmVhdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2hhcnRSYW5nZVNlbGVjdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBjaGFydE9wdGlvbnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2hhcnREZXN0cm95ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyB0b29sUGFuZWxWaXNpYmxlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIG1vZGVsVXBkYXRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIHBhc3RlU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBwYXN0ZUVuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGZpbGxTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGZpbGxFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBjZWxsQ2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGNlbGxEb3VibGVDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2VsbE1vdXNlRG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGNlbGxDb250ZXh0TWVudTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGNlbGxWYWx1ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyByb3dWYWx1ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBjZWxsRm9jdXNlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd1NlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGNlbGxLZXlEb3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2VsbEtleVByZXNzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2VsbE1vdXNlT3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGNlbGxNb3VzZU91dDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGZpbHRlckNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBmaWx0ZXJNb2RpZmllZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGZpbHRlck9wZW5lZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIHNvcnRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgdmlydHVhbFJvd1JlbW92ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyByb3dDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgcm93RG91YmxlQ2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGdyaWRSZWFkeTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGdyaWRTaXplQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIHZpZXdwb3J0Q2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGZpcnN0RGF0YVJlbmRlcmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgZHJhZ1N0YXJ0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBkcmFnU3RvcHBlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGNoZWNrYm94Q2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd0VkaXRpbmdTdGFydGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgcm93RWRpdGluZ1N0b3BwZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBjZWxsRWRpdGluZ1N0YXJ0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBjZWxsRWRpdGluZ1N0b3BwZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBib2R5U2Nyb2xsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgYW5pbWF0aW9uUXVldWVFbXB0eTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGhlaWdodFNjYWxlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIHBhZ2luYXRpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29tcG9uZW50U3RhdGVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgYm9keUhlaWdodENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBkaXNwbGF5ZWRDb2x1bW5zV2lkdGhDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgc2Nyb2xsVmlzaWJpbGl0eUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5Ib3ZlckNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBmbGFzaENlbGxzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgcm93RHJhZ0VudGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgcm93RHJhZ01vdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyByb3dEcmFnTGVhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyByb3dEcmFnRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgcG9wdXBUb0Zyb250OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uUm93R3JvdXBDaGFuZ2VSZXF1ZXN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uUGl2b3RDaGFuZ2VSZXF1ZXN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uVmFsdWVDaGFuZ2VSZXF1ZXN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uQWdnRnVuY0NoYW5nZVJlcXVlc3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBrZXlib2FyZEZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgbW91c2VGb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICAvLyBARU5EQFxufVxuXG4iXX0=