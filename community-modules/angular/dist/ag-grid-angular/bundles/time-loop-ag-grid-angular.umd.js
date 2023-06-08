(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ag-grid-community/core')) :
    typeof define === 'function' && define.amd ? define('@time-loop/ag-grid-angular', ['exports', '@angular/core', '@ag-grid-community/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["time-loop"] = global["time-loop"] || {}, global["time-loop"]["ag-grid-angular"] = {}), global.ng.core, global.agGrid));
})(this, (function (exports, i0, core) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var AgGridColumn = /** @class */ (function () {
        function AgGridColumn() {
        }
        AgGridColumn.prototype.hasChildColumns = function () {
            if (this.childColumns && this.childColumns.length > 0) {
                // necessary because of https://github.com/angular/angular/issues/10098
                return !(this.childColumns.length === 1 && this.childColumns.first === this);
            }
            return false;
        };
        AgGridColumn.prototype.toColDef = function () {
            var colDef = this.createColDefFromGridColumn(this);
            if (this.hasChildColumns()) {
                colDef["children"] = this.getChildColDefs(this.childColumns);
            }
            return colDef;
        };
        AgGridColumn.prototype.getChildColDefs = function (childColumns) {
            return childColumns
                // necessary because of https://github.com/angular/angular/issues/10098
                .filter(function (column) { return !column.hasChildColumns(); })
                .map(function (column) {
                return column.toColDef();
            });
        };
        ;
        AgGridColumn.prototype.createColDefFromGridColumn = function (from) {
            var colDef = {};
            Object.assign(colDef, from);
            delete colDef.childColumns;
            return colDef;
        };
        ;
        return AgGridColumn;
    }());
    AgGridColumn.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AgGridColumn, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    AgGridColumn.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AgGridColumn, selector: "ag-grid-column", inputs: { children: "children", sortingOrder: "sortingOrder", allowedAggFuncs: "allowedAggFuncs", menuTabs: "menuTabs", cellClassRules: "cellClassRules", icons: "icons", headerGroupComponent: "headerGroupComponent", headerGroupComponentFramework: "headerGroupComponentFramework", headerGroupComponentParams: "headerGroupComponentParams", cellStyle: "cellStyle", cellRendererParams: "cellRendererParams", cellEditorFramework: "cellEditorFramework", cellEditorParams: "cellEditorParams", pinnedRowCellRendererFramework: "pinnedRowCellRendererFramework", pinnedRowCellRendererParams: "pinnedRowCellRendererParams", filterFramework: "filterFramework", filterParams: "filterParams", headerComponent: "headerComponent", headerComponentFramework: "headerComponentFramework", headerComponentParams: "headerComponentParams", floatingFilterComponent: "floatingFilterComponent", floatingFilterComponentParams: "floatingFilterComponentParams", floatingFilterComponentFramework: "floatingFilterComponentFramework", tooltipComponent: "tooltipComponent", tooltipComponentParams: "tooltipComponentParams", tooltipComponentFramework: "tooltipComponentFramework", refData: "refData", headerName: "headerName", columnGroupShow: "columnGroupShow", headerClass: "headerClass", toolPanelClass: "toolPanelClass", headerValueGetter: "headerValueGetter", groupId: "groupId", colId: "colId", sort: "sort", field: "field", type: "type", tooltipField: "tooltipField", headerTooltip: "headerTooltip", cellClass: "cellClass", showRowGroup: "showRowGroup", filter: "filter", aggFunc: "aggFunc", cellRenderer: "cellRenderer", cellEditor: "cellEditor", pinned: "pinned", chartDataType: "chartDataType", sortedAt: "sortedAt", flex: "flex", width: "width", minWidth: "minWidth", maxWidth: "maxWidth", rowGroupIndex: "rowGroupIndex", pivotIndex: "pivotIndex", dndSourceOnRowDrag: "dndSourceOnRowDrag", valueGetter: "valueGetter", valueSetter: "valueSetter", filterValueGetter: "filterValueGetter", keyCreator: "keyCreator", cellRendererFramework: "cellRendererFramework", pinnedRowCellRenderer: "pinnedRowCellRenderer", valueFormatter: "valueFormatter", pinnedRowValueFormatter: "pinnedRowValueFormatter", valueParser: "valueParser", comparator: "comparator", equals: "equals", pivotComparator: "pivotComparator", suppressKeyboardEvent: "suppressKeyboardEvent", colSpan: "colSpan", rowSpan: "rowSpan", getQuickFilterText: "getQuickFilterText", newValueHandler: "newValueHandler", onCellValueChanged: "onCellValueChanged", onCellClicked: "onCellClicked", onCellDoubleClicked: "onCellDoubleClicked", onCellContextMenu: "onCellContextMenu", rowDragText: "rowDragText", tooltip: "tooltip", tooltipValueGetter: "tooltipValueGetter", cellRendererSelector: "cellRendererSelector", cellEditorSelector: "cellEditorSelector", suppressCellFlash: "suppressCellFlash", suppressColumnsToolPanel: "suppressColumnsToolPanel", suppressFiltersToolPanel: "suppressFiltersToolPanel", openByDefault: "openByDefault", marryChildren: "marryChildren", hide: "hide", rowGroup: "rowGroup", pivot: "pivot", checkboxSelection: "checkboxSelection", headerCheckboxSelection: "headerCheckboxSelection", headerCheckboxSelectionFilteredOnly: "headerCheckboxSelectionFilteredOnly", suppressMenu: "suppressMenu", suppressSorting: "suppressSorting", suppressMovable: "suppressMovable", suppressFilter: "suppressFilter", lockPosition: "lockPosition", lockVisible: "lockVisible", lockPinned: "lockPinned", unSortIcon: "unSortIcon", suppressSizeToFit: "suppressSizeToFit", suppressResize: "suppressResize", suppressAutoSize: "suppressAutoSize", enableRowGroup: "enableRowGroup", enablePivot: "enablePivot", enableValue: "enableValue", editable: "editable", suppressPaste: "suppressPaste", suppressNavigable: "suppressNavigable", enableCellChangeFlash: "enableCellChangeFlash", rowDrag: "rowDrag", dndSource: "dndSource", autoHeight: "autoHeight", sortable: "sortable", resizable: "resizable", singleClickEdit: "singleClickEdit", floatingFilter: "floatingFilter" }, queries: [{ propertyName: "childColumns", predicate: AgGridColumn }], ngImport: i0__namespace, template: '', isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AgGridColumn, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ag-grid-column',
                        template: ''
                    }]
            }], propDecorators: { childColumns: [{
                    type: i0.ContentChildren,
                    args: [AgGridColumn]
                }], children: [{
                    type: i0.Input
                }], sortingOrder: [{
                    type: i0.Input
                }], allowedAggFuncs: [{
                    type: i0.Input
                }], menuTabs: [{
                    type: i0.Input
                }], cellClassRules: [{
                    type: i0.Input
                }], icons: [{
                    type: i0.Input
                }], headerGroupComponent: [{
                    type: i0.Input
                }], headerGroupComponentFramework: [{
                    type: i0.Input
                }], headerGroupComponentParams: [{
                    type: i0.Input
                }], cellStyle: [{
                    type: i0.Input
                }], cellRendererParams: [{
                    type: i0.Input
                }], cellEditorFramework: [{
                    type: i0.Input
                }], cellEditorParams: [{
                    type: i0.Input
                }], pinnedRowCellRendererFramework: [{
                    type: i0.Input
                }], pinnedRowCellRendererParams: [{
                    type: i0.Input
                }], filterFramework: [{
                    type: i0.Input
                }], filterParams: [{
                    type: i0.Input
                }], headerComponent: [{
                    type: i0.Input
                }], headerComponentFramework: [{
                    type: i0.Input
                }], headerComponentParams: [{
                    type: i0.Input
                }], floatingFilterComponent: [{
                    type: i0.Input
                }], floatingFilterComponentParams: [{
                    type: i0.Input
                }], floatingFilterComponentFramework: [{
                    type: i0.Input
                }], tooltipComponent: [{
                    type: i0.Input
                }], tooltipComponentParams: [{
                    type: i0.Input
                }], tooltipComponentFramework: [{
                    type: i0.Input
                }], refData: [{
                    type: i0.Input
                }], headerName: [{
                    type: i0.Input
                }], columnGroupShow: [{
                    type: i0.Input
                }], headerClass: [{
                    type: i0.Input
                }], toolPanelClass: [{
                    type: i0.Input
                }], headerValueGetter: [{
                    type: i0.Input
                }], groupId: [{
                    type: i0.Input
                }], colId: [{
                    type: i0.Input
                }], sort: [{
                    type: i0.Input
                }], field: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], tooltipField: [{
                    type: i0.Input
                }], headerTooltip: [{
                    type: i0.Input
                }], cellClass: [{
                    type: i0.Input
                }], showRowGroup: [{
                    type: i0.Input
                }], filter: [{
                    type: i0.Input
                }], aggFunc: [{
                    type: i0.Input
                }], cellRenderer: [{
                    type: i0.Input
                }], cellEditor: [{
                    type: i0.Input
                }], pinned: [{
                    type: i0.Input
                }], chartDataType: [{
                    type: i0.Input
                }], sortedAt: [{
                    type: i0.Input
                }], flex: [{
                    type: i0.Input
                }], width: [{
                    type: i0.Input
                }], minWidth: [{
                    type: i0.Input
                }], maxWidth: [{
                    type: i0.Input
                }], rowGroupIndex: [{
                    type: i0.Input
                }], pivotIndex: [{
                    type: i0.Input
                }], dndSourceOnRowDrag: [{
                    type: i0.Input
                }], valueGetter: [{
                    type: i0.Input
                }], valueSetter: [{
                    type: i0.Input
                }], filterValueGetter: [{
                    type: i0.Input
                }], keyCreator: [{
                    type: i0.Input
                }], cellRendererFramework: [{
                    type: i0.Input
                }], pinnedRowCellRenderer: [{
                    type: i0.Input
                }], valueFormatter: [{
                    type: i0.Input
                }], pinnedRowValueFormatter: [{
                    type: i0.Input
                }], valueParser: [{
                    type: i0.Input
                }], comparator: [{
                    type: i0.Input
                }], equals: [{
                    type: i0.Input
                }], pivotComparator: [{
                    type: i0.Input
                }], suppressKeyboardEvent: [{
                    type: i0.Input
                }], colSpan: [{
                    type: i0.Input
                }], rowSpan: [{
                    type: i0.Input
                }], getQuickFilterText: [{
                    type: i0.Input
                }], newValueHandler: [{
                    type: i0.Input
                }], onCellValueChanged: [{
                    type: i0.Input
                }], onCellClicked: [{
                    type: i0.Input
                }], onCellDoubleClicked: [{
                    type: i0.Input
                }], onCellContextMenu: [{
                    type: i0.Input
                }], rowDragText: [{
                    type: i0.Input
                }], tooltip: [{
                    type: i0.Input
                }], tooltipValueGetter: [{
                    type: i0.Input
                }], cellRendererSelector: [{
                    type: i0.Input
                }], cellEditorSelector: [{
                    type: i0.Input
                }], suppressCellFlash: [{
                    type: i0.Input
                }], suppressColumnsToolPanel: [{
                    type: i0.Input
                }], suppressFiltersToolPanel: [{
                    type: i0.Input
                }], openByDefault: [{
                    type: i0.Input
                }], marryChildren: [{
                    type: i0.Input
                }], hide: [{
                    type: i0.Input
                }], rowGroup: [{
                    type: i0.Input
                }], pivot: [{
                    type: i0.Input
                }], checkboxSelection: [{
                    type: i0.Input
                }], headerCheckboxSelection: [{
                    type: i0.Input
                }], headerCheckboxSelectionFilteredOnly: [{
                    type: i0.Input
                }], suppressMenu: [{
                    type: i0.Input
                }], suppressSorting: [{
                    type: i0.Input
                }], suppressMovable: [{
                    type: i0.Input
                }], suppressFilter: [{
                    type: i0.Input
                }], lockPosition: [{
                    type: i0.Input
                }], lockVisible: [{
                    type: i0.Input
                }], lockPinned: [{
                    type: i0.Input
                }], unSortIcon: [{
                    type: i0.Input
                }], suppressSizeToFit: [{
                    type: i0.Input
                }], suppressResize: [{
                    type: i0.Input
                }], suppressAutoSize: [{
                    type: i0.Input
                }], enableRowGroup: [{
                    type: i0.Input
                }], enablePivot: [{
                    type: i0.Input
                }], enableValue: [{
                    type: i0.Input
                }], editable: [{
                    type: i0.Input
                }], suppressPaste: [{
                    type: i0.Input
                }], suppressNavigable: [{
                    type: i0.Input
                }], enableCellChangeFlash: [{
                    type: i0.Input
                }], rowDrag: [{
                    type: i0.Input
                }], dndSource: [{
                    type: i0.Input
                }], autoHeight: [{
                    type: i0.Input
                }], sortable: [{
                    type: i0.Input
                }], resizable: [{
                    type: i0.Input
                }], singleClickEdit: [{
                    type: i0.Input
                }], floatingFilter: [{
                    type: i0.Input
                }] } });

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function")
            throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn)
                context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access)
                context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done)
                throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0)
                    continue;
                if (result === null || typeof result !== "object")
                    throw new TypeError("Object expected");
                if (_ = accept(result.get))
                    descriptor.get = _;
                if (_ = accept(result.set))
                    descriptor.set = _;
                if (_ = accept(result.init))
                    initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field")
                    initializers.unshift(_);
                else
                    descriptor[key] = _;
            }
        }
        if (target)
            Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    }
    ;
    function __runInitializers(thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    }
    ;
    function __propKey(x) {
        return typeof x === "symbol" ? x : "".concat(x);
    }
    ;
    function __setFunctionName(f, name, prefix) {
        if (typeof name === "symbol")
            name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    }
    ;
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }
    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }
    var tslib_es6 = {
        __extends: __extends,
        __assign: __assign,
        __rest: __rest,
        __decorate: __decorate,
        __param: __param,
        __metadata: __metadata,
        __awaiter: __awaiter,
        __generator: __generator,
        __createBinding: __createBinding,
        __exportStar: __exportStar,
        __values: __values,
        __read: __read,
        __spread: __spread,
        __spreadArrays: __spreadArrays,
        __spreadArray: __spreadArray,
        __await: __await,
        __asyncGenerator: __asyncGenerator,
        __asyncDelegator: __asyncDelegator,
        __asyncValues: __asyncValues,
        __makeTemplateObject: __makeTemplateObject,
        __importStar: __importStar,
        __importDefault: __importDefault,
        __classPrivateFieldGet: __classPrivateFieldGet,
        __classPrivateFieldSet: __classPrivateFieldSet,
        __classPrivateFieldIn: __classPrivateFieldIn,
    };

    var AngularFrameworkOverrides = /** @class */ (function (_super) {
        __extends(AngularFrameworkOverrides, _super);
        function AngularFrameworkOverrides(_ngZone) {
            var _this = _super.call(this) || this;
            _this._ngZone = _ngZone;
            return _this;
        }
        AngularFrameworkOverrides.prototype.setTimeout = function (action, timeout) {
            this._ngZone.runOutsideAngular(function () {
                window.setTimeout(function () {
                    action();
                }, timeout);
            });
        };
        AngularFrameworkOverrides.prototype.addEventListenerOutsideAngular = function (element, type, listener, useCapture) {
            var _this = this;
            this._ngZone.runOutsideAngular(function () {
                _super.prototype.addEventListenerOutsideAngular.call(_this, element, type, listener, useCapture);
            });
        };
        return AngularFrameworkOverrides;
    }(core.VanillaFrameworkOverrides));
    AngularFrameworkOverrides.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AngularFrameworkOverrides, deps: [{ token: i0__namespace.NgZone }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AngularFrameworkOverrides.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AngularFrameworkOverrides });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AngularFrameworkOverrides, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i0__namespace.NgZone }]; } });

    var AngularFrameworkComponentWrapper = /** @class */ (function (_super) {
        __extends(AngularFrameworkComponentWrapper, _super);
        function AngularFrameworkComponentWrapper() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AngularFrameworkComponentWrapper.prototype.setViewContainerRef = function (viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        };
        AngularFrameworkComponentWrapper.prototype.setComponentFactoryResolver = function (componentFactoryResolver) {
            this.componentFactoryResolver = componentFactoryResolver;
        };
        AngularFrameworkComponentWrapper.prototype.createWrapper = function (OriginalConstructor) {
            var that = this;
            var DynamicAgNg2Component = /** @class */ (function (_super) {
                __extends(DynamicAgNg2Component, _super);
                function DynamicAgNg2Component() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                DynamicAgNg2Component.prototype.init = function (params) {
                    _super.prototype.init.call(this, params);
                    this._componentRef.changeDetectorRef.detectChanges();
                };
                DynamicAgNg2Component.prototype.createComponent = function () {
                    return that.createComponent(OriginalConstructor);
                };
                DynamicAgNg2Component.prototype.hasMethod = function (name) {
                    return wrapper.getFrameworkComponentInstance()[name] != null;
                };
                DynamicAgNg2Component.prototype.callMethod = function (name, args) {
                    var componentRef = this.getFrameworkComponentInstance();
                    return wrapper.getFrameworkComponentInstance()[name].apply(componentRef, args);
                };
                DynamicAgNg2Component.prototype.addMethod = function (name, callback) {
                    wrapper[name] = callback;
                };
                return DynamicAgNg2Component;
            }(BaseGuiComponent));
            var wrapper = new DynamicAgNg2Component();
            return wrapper;
        };
        AngularFrameworkComponentWrapper.prototype.createComponent = function (componentType) {
            // used to cache the factory, but this a) caused issues when used with either webpack/angularcli with --prod
            // but more significantly, the underlying implementation of resolveComponentFactory uses a map too, so us
            // caching the factory here yields no performance benefits
            var factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
            return this.viewContainerRef.createComponent(factory);
        };
        return AngularFrameworkComponentWrapper;
    }(core.BaseComponentWrapper));
    AngularFrameworkComponentWrapper.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AngularFrameworkComponentWrapper, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AngularFrameworkComponentWrapper.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AngularFrameworkComponentWrapper });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AngularFrameworkComponentWrapper, decorators: [{
                type: i0.Injectable
            }] });
    var BaseGuiComponent = /** @class */ (function () {
        function BaseGuiComponent() {
        }
        BaseGuiComponent.prototype.init = function (params) {
            this._params = params;
            this._componentRef = this.createComponent();
            this._agAwareComponent = this._componentRef.instance;
            this._frameworkComponentInstance = this._componentRef.instance;
            this._eGui = this._componentRef.location.nativeElement;
            this._agAwareComponent.agInit(this._params);
        };
        BaseGuiComponent.prototype.getGui = function () {
            return this._eGui;
        };
        BaseGuiComponent.prototype.destroy = function () {
            if (this._componentRef) {
                this._componentRef.destroy();
            }
        };
        BaseGuiComponent.prototype.getFrameworkComponentInstance = function () {
            return this._frameworkComponentInstance;
        };
        return BaseGuiComponent;
    }());

    var AgGridAngular = /** @class */ (function () {
        function AgGridAngular(elementDef, viewContainerRef, angularFrameworkOverrides, frameworkComponentWrapper, _componentFactoryResolver) {
            this.viewContainerRef = viewContainerRef;
            this.angularFrameworkOverrides = angularFrameworkOverrides;
            this.frameworkComponentWrapper = frameworkComponentWrapper;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._initialised = false;
            this._destroyed = false;
            // in order to ensure firing of gridReady is deterministic
            this._fullyReady = core.Promise.resolve(true);
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
            this.columnEverythingChanged = new i0.EventEmitter();
            this.newColumnsLoaded = new i0.EventEmitter();
            this.columnPivotModeChanged = new i0.EventEmitter();
            this.columnRowGroupChanged = new i0.EventEmitter();
            this.expandOrCollapseAll = new i0.EventEmitter();
            this.columnPivotChanged = new i0.EventEmitter();
            this.gridColumnsChanged = new i0.EventEmitter();
            this.columnValueChanged = new i0.EventEmitter();
            this.columnMoved = new i0.EventEmitter();
            this.columnVisible = new i0.EventEmitter();
            this.columnPinned = new i0.EventEmitter();
            this.columnGroupOpened = new i0.EventEmitter();
            this.columnResized = new i0.EventEmitter();
            this.displayedColumnsChanged = new i0.EventEmitter();
            this.virtualColumnsChanged = new i0.EventEmitter();
            this.rowGroupOpened = new i0.EventEmitter();
            this.rowDataChanged = new i0.EventEmitter();
            this.rowDataUpdated = new i0.EventEmitter();
            this.pinnedRowDataChanged = new i0.EventEmitter();
            this.rangeSelectionChanged = new i0.EventEmitter();
            this.chartCreated = new i0.EventEmitter();
            this.chartRangeSelectionChanged = new i0.EventEmitter();
            this.chartOptionsChanged = new i0.EventEmitter();
            this.chartDestroyed = new i0.EventEmitter();
            this.toolPanelVisibleChanged = new i0.EventEmitter();
            this.modelUpdated = new i0.EventEmitter();
            this.pasteStart = new i0.EventEmitter();
            this.pasteEnd = new i0.EventEmitter();
            this.fillStart = new i0.EventEmitter();
            this.fillEnd = new i0.EventEmitter();
            this.cellClicked = new i0.EventEmitter();
            this.cellDoubleClicked = new i0.EventEmitter();
            this.cellMouseDown = new i0.EventEmitter();
            this.cellContextMenu = new i0.EventEmitter();
            this.cellValueChanged = new i0.EventEmitter();
            this.rowValueChanged = new i0.EventEmitter();
            this.cellFocused = new i0.EventEmitter();
            this.rowSelected = new i0.EventEmitter();
            this.selectionChanged = new i0.EventEmitter();
            this.cellKeyDown = new i0.EventEmitter();
            this.cellKeyPress = new i0.EventEmitter();
            this.cellMouseOver = new i0.EventEmitter();
            this.cellMouseOut = new i0.EventEmitter();
            this.filterChanged = new i0.EventEmitter();
            this.filterModified = new i0.EventEmitter();
            this.filterOpened = new i0.EventEmitter();
            this.sortChanged = new i0.EventEmitter();
            this.virtualRowRemoved = new i0.EventEmitter();
            this.rowClicked = new i0.EventEmitter();
            this.rowDoubleClicked = new i0.EventEmitter();
            this.gridReady = new i0.EventEmitter();
            this.gridSizeChanged = new i0.EventEmitter();
            this.viewportChanged = new i0.EventEmitter();
            this.firstDataRendered = new i0.EventEmitter();
            this.dragStarted = new i0.EventEmitter();
            this.dragStopped = new i0.EventEmitter();
            this.checkboxChanged = new i0.EventEmitter();
            this.rowEditingStarted = new i0.EventEmitter();
            this.rowEditingStopped = new i0.EventEmitter();
            this.cellEditingStarted = new i0.EventEmitter();
            this.cellEditingStopped = new i0.EventEmitter();
            this.bodyScroll = new i0.EventEmitter();
            this.animationQueueEmpty = new i0.EventEmitter();
            this.heightScaleChanged = new i0.EventEmitter();
            this.paginationChanged = new i0.EventEmitter();
            this.componentStateChanged = new i0.EventEmitter();
            this.bodyHeightChanged = new i0.EventEmitter();
            this.displayedColumnsWidthChanged = new i0.EventEmitter();
            this.scrollVisibilityChanged = new i0.EventEmitter();
            this.columnHoverChanged = new i0.EventEmitter();
            this.flashCells = new i0.EventEmitter();
            this.rowDragEnter = new i0.EventEmitter();
            this.rowDragMove = new i0.EventEmitter();
            this.rowDragLeave = new i0.EventEmitter();
            this.rowDragEnd = new i0.EventEmitter();
            this.popupToFront = new i0.EventEmitter();
            this.columnRowGroupChangeRequest = new i0.EventEmitter();
            this.columnPivotChangeRequest = new i0.EventEmitter();
            this.columnValueChangeRequest = new i0.EventEmitter();
            this.columnAggFuncChangeRequest = new i0.EventEmitter();
            this.keyboardFocus = new i0.EventEmitter();
            this.mouseFocus = new i0.EventEmitter();
            this._nativeElement = elementDef.nativeElement;
            this.frameworkComponentWrapper.setViewContainerRef(this.viewContainerRef);
            this.frameworkComponentWrapper.setComponentFactoryResolver(this._componentFactoryResolver);
        }
        AgGridAngular.prototype.ngAfterViewInit = function () {
            this.checkForDeprecatedEvents();
            this.gridOptions = core.ComponentUtil.copyAttributesToGridOptions(this.gridOptions, this, true);
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
                    .map(function (column) {
                    return column.toColDef();
                });
            }
            new core.Grid(this._nativeElement, this.gridOptions, this.gridParams);
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
            this._fullyReady.resolveNow(null, function (resolve) { return resolve; });
        };
        AgGridAngular.prototype.ngOnChanges = function (changes) {
            if (this._initialised) {
                core.ComponentUtil.processOnChange(changes, this.gridOptions, this.api, this.columnApi);
            }
        };
        AgGridAngular.prototype.ngOnDestroy = function () {
            if (this._initialised) {
                // need to do this before the destroy, so we know not to emit any events
                // while tearing down the grid.
                this._destroyed = true;
                if (this.api) {
                    this.api.destroy();
                }
            }
        };
        AgGridAngular.prototype.checkForDeprecatedEvents = function () {
            var _this = this;
            core._.iterateObject(core.Events, function (key, eventName) {
                if (_this[eventName] && _this[eventName].observers.length > 0) {
                    core.GridOptionsWrapper.checkEventDeprecation(eventName);
                }
            });
        };
        AgGridAngular.prototype.globalEventListener = function (eventType, event) {
            // if we are tearing down, don't emit angular events, as this causes
            // problems with the angular router
            if (this._destroyed) {
                return;
            }
            // generically look up the eventType
            var emitter = this[eventType];
            if (emitter) {
                if (eventType === 'gridReady') {
                    // if the user is listening for gridReady, wait for ngAfterViewInit to fire first, then emit the
                    // gridReady event
                    this._fullyReady.then((function (result) {
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
        };
        return AgGridAngular;
    }());
    AgGridAngular.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AgGridAngular, deps: [{ token: i0__namespace.ElementRef }, { token: i0__namespace.ViewContainerRef }, { token: AngularFrameworkOverrides }, { token: AngularFrameworkComponentWrapper }, { token: i0__namespace.ComponentFactoryResolver }], target: i0__namespace.ɵɵFactoryTarget.Component });
    AgGridAngular.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AgGridAngular, selector: "ag-grid-angular", inputs: { gridOptions: "gridOptions", modules: "modules", slaveGrids: "slaveGrids", alignedGrids: "alignedGrids", rowData: "rowData", columnDefs: "columnDefs", excelStyles: "excelStyles", pinnedTopRowData: "pinnedTopRowData", pinnedBottomRowData: "pinnedBottomRowData", components: "components", frameworkComponents: "frameworkComponents", rowStyle: "rowStyle", context: "context", autoGroupColumnDef: "autoGroupColumnDef", groupColumnDef: "groupColumnDef", localeText: "localeText", icons: "icons", datasource: "datasource", serverSideDatasource: "serverSideDatasource", viewportDatasource: "viewportDatasource", groupRowRendererParams: "groupRowRendererParams", aggFuncs: "aggFuncs", fullWidthCellRendererParams: "fullWidthCellRendererParams", defaultColGroupDef: "defaultColGroupDef", defaultColDef: "defaultColDef", defaultExportParams: "defaultExportParams", columnTypes: "columnTypes", rowClassRules: "rowClassRules", detailGridOptions: "detailGridOptions", detailCellRendererParams: "detailCellRendererParams", loadingCellRendererParams: "loadingCellRendererParams", loadingOverlayComponentParams: "loadingOverlayComponentParams", noRowsOverlayComponentParams: "noRowsOverlayComponentParams", popupParent: "popupParent", colResizeDefault: "colResizeDefault", reduxStore: "reduxStore", statusBar: "statusBar", sideBar: "sideBar", sortingOrder: "sortingOrder", rowClass: "rowClass", rowSelection: "rowSelection", overlayLoadingTemplate: "overlayLoadingTemplate", overlayNoRowsTemplate: "overlayNoRowsTemplate", quickFilterText: "quickFilterText", rowModelType: "rowModelType", editType: "editType", domLayout: "domLayout", clipboardDeliminator: "clipboardDeliminator", rowGroupPanelShow: "rowGroupPanelShow", multiSortKey: "multiSortKey", pivotColumnGroupTotals: "pivotColumnGroupTotals", pivotRowTotals: "pivotRowTotals", pivotPanelShow: "pivotPanelShow", rowHeight: "rowHeight", detailRowHeight: "detailRowHeight", rowBuffer: "rowBuffer", colWidth: "colWidth", headerHeight: "headerHeight", groupHeaderHeight: "groupHeaderHeight", floatingFiltersHeight: "floatingFiltersHeight", pivotHeaderHeight: "pivotHeaderHeight", pivotGroupHeaderHeight: "pivotGroupHeaderHeight", groupDefaultExpanded: "groupDefaultExpanded", minColWidth: "minColWidth", maxColWidth: "maxColWidth", viewportRowModelPageSize: "viewportRowModelPageSize", viewportRowModelBufferSize: "viewportRowModelBufferSize", autoSizePadding: "autoSizePadding", maxBlocksInCache: "maxBlocksInCache", maxConcurrentDatasourceRequests: "maxConcurrentDatasourceRequests", tooltipShowDelay: "tooltipShowDelay", cacheOverflowSize: "cacheOverflowSize", paginationPageSize: "paginationPageSize", cacheBlockSize: "cacheBlockSize", infiniteInitialRowCount: "infiniteInitialRowCount", scrollbarWidth: "scrollbarWidth", paginationStartPage: "paginationStartPage", infiniteBlockSize: "infiniteBlockSize", batchUpdateWaitMillis: "batchUpdateWaitMillis", asyncTransactionWaitMillis: "asyncTransactionWaitMillis", blockLoadDebounceMillis: "blockLoadDebounceMillis", keepDetailRowsCount: "keepDetailRowsCount", undoRedoCellEditingLimit: "undoRedoCellEditingLimit", cellFlashDelay: "cellFlashDelay", cellFadeDelay: "cellFadeDelay", localeTextFunc: "localeTextFunc", groupRowInnerRenderer: "groupRowInnerRenderer", groupRowInnerRendererFramework: "groupRowInnerRendererFramework", dateComponent: "dateComponent", dateComponentFramework: "dateComponentFramework", groupRowRenderer: "groupRowRenderer", groupRowRendererFramework: "groupRowRendererFramework", isExternalFilterPresent: "isExternalFilterPresent", getRowHeight: "getRowHeight", doesExternalFilterPass: "doesExternalFilterPass", getRowClass: "getRowClass", getRowStyle: "getRowStyle", getRowClassRules: "getRowClassRules", traverseNode: "traverseNode", getContextMenuItems: "getContextMenuItems", getMainMenuItems: "getMainMenuItems", processRowPostCreate: "processRowPostCreate", processCellForClipboard: "processCellForClipboard", getNodeChildDetails: "getNodeChildDetails", groupRowAggNodes: "groupRowAggNodes", getRowNodeId: "getRowNodeId", isFullWidthCell: "isFullWidthCell", fullWidthCellRenderer: "fullWidthCellRenderer", fullWidthCellRendererFramework: "fullWidthCellRendererFramework", doesDataFlower: "doesDataFlower", processSecondaryColDef: "processSecondaryColDef", processSecondaryColGroupDef: "processSecondaryColGroupDef", getBusinessKeyForNode: "getBusinessKeyForNode", sendToClipboard: "sendToClipboard", navigateToNextCell: "navigateToNextCell", tabToNextCell: "tabToNextCell", getDetailRowData: "getDetailRowData", processCellFromClipboard: "processCellFromClipboard", getDocument: "getDocument", postProcessPopup: "postProcessPopup", getChildCount: "getChildCount", getDataPath: "getDataPath", loadingCellRenderer: "loadingCellRenderer", loadingCellRendererFramework: "loadingCellRendererFramework", loadingOverlayComponent: "loadingOverlayComponent", loadingOverlayComponentFramework: "loadingOverlayComponentFramework", noRowsOverlayComponent: "noRowsOverlayComponent", noRowsOverlayComponentFramework: "noRowsOverlayComponentFramework", detailCellRenderer: "detailCellRenderer", detailCellRendererFramework: "detailCellRendererFramework", defaultGroupSortComparator: "defaultGroupSortComparator", isRowMaster: "isRowMaster", isRowSelectable: "isRowSelectable", postSort: "postSort", processHeaderForClipboard: "processHeaderForClipboard", paginationNumberFormatter: "paginationNumberFormatter", processDataFromClipboard: "processDataFromClipboard", getServerSideGroupKey: "getServerSideGroupKey", isServerSideGroup: "isServerSideGroup", suppressKeyboardEvent: "suppressKeyboardEvent", createChartContainer: "createChartContainer", processChartOptions: "processChartOptions", getChartToolbarItems: "getChartToolbarItems", fillOperation: "fillOperation", toolPanelSuppressRowGroups: "toolPanelSuppressRowGroups", toolPanelSuppressValues: "toolPanelSuppressValues", toolPanelSuppressPivots: "toolPanelSuppressPivots", toolPanelSuppressPivotMode: "toolPanelSuppressPivotMode", toolPanelSuppressSideButtons: "toolPanelSuppressSideButtons", toolPanelSuppressColumnFilter: "toolPanelSuppressColumnFilter", toolPanelSuppressColumnSelectAll: "toolPanelSuppressColumnSelectAll", toolPanelSuppressColumnExpandAll: "toolPanelSuppressColumnExpandAll", suppressMakeColumnVisibleAfterUnGroup: "suppressMakeColumnVisibleAfterUnGroup", suppressRowClickSelection: "suppressRowClickSelection", suppressCellSelection: "suppressCellSelection", suppressHorizontalScroll: "suppressHorizontalScroll", alwaysShowVerticalScroll: "alwaysShowVerticalScroll", debug: "debug", enableBrowserTooltips: "enableBrowserTooltips", enableColResize: "enableColResize", enableCellExpressions: "enableCellExpressions", enableSorting: "enableSorting", enableServerSideSorting: "enableServerSideSorting", enableFilter: "enableFilter", enableServerSideFilter: "enableServerSideFilter", angularCompileRows: "angularCompileRows", angularCompileFilters: "angularCompileFilters", angularCompileHeaders: "angularCompileHeaders", groupSuppressAutoColumn: "groupSuppressAutoColumn", groupSelectsChildren: "groupSelectsChildren", groupIncludeFooter: "groupIncludeFooter", groupIncludeTotalFooter: "groupIncludeTotalFooter", groupUseEntireRow: "groupUseEntireRow", groupSuppressRow: "groupSuppressRow", groupSuppressBlankHeader: "groupSuppressBlankHeader", forPrint: "forPrint", suppressMenuHide: "suppressMenuHide", rowDeselection: "rowDeselection", unSortIcon: "unSortIcon", suppressMultiSort: "suppressMultiSort", singleClickEdit: "singleClickEdit", suppressLoadingOverlay: "suppressLoadingOverlay", suppressNoRowsOverlay: "suppressNoRowsOverlay", suppressAutoSize: "suppressAutoSize", skipHeaderOnAutoSize: "skipHeaderOnAutoSize", suppressParentsInRowNodes: "suppressParentsInRowNodes", showToolPanel: "showToolPanel", suppressColumnMoveAnimation: "suppressColumnMoveAnimation", suppressMovableColumns: "suppressMovableColumns", suppressFieldDotNotation: "suppressFieldDotNotation", enableRangeSelection: "enableRangeSelection", enableRangeHandle: "enableRangeHandle", enableFillHandle: "enableFillHandle", suppressClearOnFillReduction: "suppressClearOnFillReduction", deltaSort: "deltaSort", suppressTouch: "suppressTouch", suppressAsyncEvents: "suppressAsyncEvents", allowContextMenuWithControlKey: "allowContextMenuWithControlKey", suppressContextMenu: "suppressContextMenu", suppressMenuFilterPanel: "suppressMenuFilterPanel", suppressMenuMainPanel: "suppressMenuMainPanel", suppressMenuColumnPanel: "suppressMenuColumnPanel", rememberGroupStateWhenNewData: "rememberGroupStateWhenNewData", enableCellChangeFlash: "enableCellChangeFlash", suppressDragLeaveHidesColumns: "suppressDragLeaveHidesColumns", suppressMiddleClickScrolls: "suppressMiddleClickScrolls", suppressPreventDefaultOnMouseWheel: "suppressPreventDefaultOnMouseWheel", suppressUseColIdForGroups: "suppressUseColIdForGroups", suppressCopyRowsToClipboard: "suppressCopyRowsToClipboard", copyHeadersToClipboard: "copyHeadersToClipboard", pivotMode: "pivotMode", suppressAggFuncInHeader: "suppressAggFuncInHeader", suppressColumnVirtualisation: "suppressColumnVirtualisation", suppressAggAtRootLevel: "suppressAggAtRootLevel", suppressFocusAfterRefresh: "suppressFocusAfterRefresh", functionsPassive: "functionsPassive", functionsReadOnly: "functionsReadOnly", animateRows: "animateRows", groupSelectsFiltered: "groupSelectsFiltered", groupRemoveSingleChildren: "groupRemoveSingleChildren", groupRemoveLowestSingleChildren: "groupRemoveLowestSingleChildren", enableRtl: "enableRtl", suppressClickEdit: "suppressClickEdit", rowDragManaged: "rowDragManaged", suppressRowDrag: "suppressRowDrag", suppressMoveWhenRowDragging: "suppressMoveWhenRowDragging", enableMultiRowDragging: "enableMultiRowDragging", enableGroupEdit: "enableGroupEdit", embedFullWidthRows: "embedFullWidthRows", deprecatedEmbedFullWidthRows: "deprecatedEmbedFullWidthRows", suppressTabbing: "suppressTabbing", suppressPaginationPanel: "suppressPaginationPanel", floatingFilter: "floatingFilter", groupHideOpenParents: "groupHideOpenParents", groupMultiAutoColumn: "groupMultiAutoColumn", pagination: "pagination", stopEditingWhenGridLosesFocus: "stopEditingWhenGridLosesFocus", paginationAutoPageSize: "paginationAutoPageSize", suppressScrollOnNewData: "suppressScrollOnNewData", purgeClosedRowNodes: "purgeClosedRowNodes", cacheQuickFilter: "cacheQuickFilter", deltaRowDataMode: "deltaRowDataMode", ensureDomOrder: "ensureDomOrder", accentedSort: "accentedSort", pivotTotals: "pivotTotals", suppressChangeDetection: "suppressChangeDetection", valueCache: "valueCache", valueCacheNeverExpires: "valueCacheNeverExpires", aggregateOnlyChangedColumns: "aggregateOnlyChangedColumns", suppressAnimationFrame: "suppressAnimationFrame", suppressExcelExport: "suppressExcelExport", suppressCsvExport: "suppressCsvExport", treeData: "treeData", masterDetail: "masterDetail", suppressMultiRangeSelection: "suppressMultiRangeSelection", enterMovesDownAfterEdit: "enterMovesDownAfterEdit", enterMovesDown: "enterMovesDown", suppressPropertyNamesCheck: "suppressPropertyNamesCheck", rowMultiSelectWithClick: "rowMultiSelectWithClick", contractColumnSelection: "contractColumnSelection", suppressEnterpriseResetOnNewColumns: "suppressEnterpriseResetOnNewColumns", enableOldSetFilterModel: "enableOldSetFilterModel", suppressRowHoverHighlight: "suppressRowHoverHighlight", gridAutoHeight: "gridAutoHeight", suppressRowTransform: "suppressRowTransform", suppressClipboardPaste: "suppressClipboardPaste", suppressLastEmptyLineOnPaste: "suppressLastEmptyLineOnPaste", serverSideSortingAlwaysResets: "serverSideSortingAlwaysResets", reactNext: "reactNext", suppressSetColumnStateEvents: "suppressSetColumnStateEvents", enableCharts: "enableCharts", deltaColumnMode: "deltaColumnMode", suppressMaintainUnsortedOrder: "suppressMaintainUnsortedOrder", enableCellTextSelection: "enableCellTextSelection", suppressBrowserResizeObserver: "suppressBrowserResizeObserver", suppressMaxRenderedRowRestriction: "suppressMaxRenderedRowRestriction", excludeChildrenWhenTreeDataFiltering: "excludeChildrenWhenTreeDataFiltering", tooltipMouseTrack: "tooltipMouseTrack", keepDetailRows: "keepDetailRows", paginateChildRows: "paginateChildRows", preventDefaultOnContextMenu: "preventDefaultOnContextMenu", undoRedoCellEditing: "undoRedoCellEditing", allowDragFromColumnsToolPanel: "allowDragFromColumnsToolPanel", immutableData: "immutableData", immutableColumns: "immutableColumns", pivotSuppressAutoColumn: "pivotSuppressAutoColumn" }, outputs: { columnEverythingChanged: "columnEverythingChanged", newColumnsLoaded: "newColumnsLoaded", columnPivotModeChanged: "columnPivotModeChanged", columnRowGroupChanged: "columnRowGroupChanged", expandOrCollapseAll: "expandOrCollapseAll", columnPivotChanged: "columnPivotChanged", gridColumnsChanged: "gridColumnsChanged", columnValueChanged: "columnValueChanged", columnMoved: "columnMoved", columnVisible: "columnVisible", columnPinned: "columnPinned", columnGroupOpened: "columnGroupOpened", columnResized: "columnResized", displayedColumnsChanged: "displayedColumnsChanged", virtualColumnsChanged: "virtualColumnsChanged", rowGroupOpened: "rowGroupOpened", rowDataChanged: "rowDataChanged", rowDataUpdated: "rowDataUpdated", pinnedRowDataChanged: "pinnedRowDataChanged", rangeSelectionChanged: "rangeSelectionChanged", chartCreated: "chartCreated", chartRangeSelectionChanged: "chartRangeSelectionChanged", chartOptionsChanged: "chartOptionsChanged", chartDestroyed: "chartDestroyed", toolPanelVisibleChanged: "toolPanelVisibleChanged", modelUpdated: "modelUpdated", pasteStart: "pasteStart", pasteEnd: "pasteEnd", fillStart: "fillStart", fillEnd: "fillEnd", cellClicked: "cellClicked", cellDoubleClicked: "cellDoubleClicked", cellMouseDown: "cellMouseDown", cellContextMenu: "cellContextMenu", cellValueChanged: "cellValueChanged", rowValueChanged: "rowValueChanged", cellFocused: "cellFocused", rowSelected: "rowSelected", selectionChanged: "selectionChanged", cellKeyDown: "cellKeyDown", cellKeyPress: "cellKeyPress", cellMouseOver: "cellMouseOver", cellMouseOut: "cellMouseOut", filterChanged: "filterChanged", filterModified: "filterModified", filterOpened: "filterOpened", sortChanged: "sortChanged", virtualRowRemoved: "virtualRowRemoved", rowClicked: "rowClicked", rowDoubleClicked: "rowDoubleClicked", gridReady: "gridReady", gridSizeChanged: "gridSizeChanged", viewportChanged: "viewportChanged", firstDataRendered: "firstDataRendered", dragStarted: "dragStarted", dragStopped: "dragStopped", checkboxChanged: "checkboxChanged", rowEditingStarted: "rowEditingStarted", rowEditingStopped: "rowEditingStopped", cellEditingStarted: "cellEditingStarted", cellEditingStopped: "cellEditingStopped", bodyScroll: "bodyScroll", animationQueueEmpty: "animationQueueEmpty", heightScaleChanged: "heightScaleChanged", paginationChanged: "paginationChanged", componentStateChanged: "componentStateChanged", bodyHeightChanged: "bodyHeightChanged", displayedColumnsWidthChanged: "displayedColumnsWidthChanged", scrollVisibilityChanged: "scrollVisibilityChanged", columnHoverChanged: "columnHoverChanged", flashCells: "flashCells", rowDragEnter: "rowDragEnter", rowDragMove: "rowDragMove", rowDragLeave: "rowDragLeave", rowDragEnd: "rowDragEnd", popupToFront: "popupToFront", columnRowGroupChangeRequest: "columnRowGroupChangeRequest", columnPivotChangeRequest: "columnPivotChangeRequest", columnValueChangeRequest: "columnValueChangeRequest", columnAggFuncChangeRequest: "columnAggFuncChangeRequest", keyboardFocus: "keyboardFocus", mouseFocus: "mouseFocus" }, providers: [
            AngularFrameworkOverrides,
            AngularFrameworkComponentWrapper
        ], queries: [{ propertyName: "columns", predicate: AgGridColumn }], usesOnChanges: true, ngImport: i0__namespace, template: '', isInline: true, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AgGridAngular, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ag-grid-angular',
                        template: '',
                        providers: [
                            AngularFrameworkOverrides,
                            AngularFrameworkComponentWrapper
                        ],
                        // tell angular we don't want view encapsulation, we don't want a shadow root
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.ViewContainerRef }, { type: AngularFrameworkOverrides }, { type: AngularFrameworkComponentWrapper }, { type: i0__namespace.ComponentFactoryResolver }]; }, propDecorators: { columns: [{
                    type: i0.ContentChildren,
                    args: [AgGridColumn]
                }], gridOptions: [{
                    type: i0.Input
                }], modules: [{
                    type: i0.Input
                }], slaveGrids: [{
                    type: i0.Input
                }], alignedGrids: [{
                    type: i0.Input
                }], rowData: [{
                    type: i0.Input
                }], columnDefs: [{
                    type: i0.Input
                }], excelStyles: [{
                    type: i0.Input
                }], pinnedTopRowData: [{
                    type: i0.Input
                }], pinnedBottomRowData: [{
                    type: i0.Input
                }], components: [{
                    type: i0.Input
                }], frameworkComponents: [{
                    type: i0.Input
                }], rowStyle: [{
                    type: i0.Input
                }], context: [{
                    type: i0.Input
                }], autoGroupColumnDef: [{
                    type: i0.Input
                }], groupColumnDef: [{
                    type: i0.Input
                }], localeText: [{
                    type: i0.Input
                }], icons: [{
                    type: i0.Input
                }], datasource: [{
                    type: i0.Input
                }], serverSideDatasource: [{
                    type: i0.Input
                }], viewportDatasource: [{
                    type: i0.Input
                }], groupRowRendererParams: [{
                    type: i0.Input
                }], aggFuncs: [{
                    type: i0.Input
                }], fullWidthCellRendererParams: [{
                    type: i0.Input
                }], defaultColGroupDef: [{
                    type: i0.Input
                }], defaultColDef: [{
                    type: i0.Input
                }], defaultExportParams: [{
                    type: i0.Input
                }], columnTypes: [{
                    type: i0.Input
                }], rowClassRules: [{
                    type: i0.Input
                }], detailGridOptions: [{
                    type: i0.Input
                }], detailCellRendererParams: [{
                    type: i0.Input
                }], loadingCellRendererParams: [{
                    type: i0.Input
                }], loadingOverlayComponentParams: [{
                    type: i0.Input
                }], noRowsOverlayComponentParams: [{
                    type: i0.Input
                }], popupParent: [{
                    type: i0.Input
                }], colResizeDefault: [{
                    type: i0.Input
                }], reduxStore: [{
                    type: i0.Input
                }], statusBar: [{
                    type: i0.Input
                }], sideBar: [{
                    type: i0.Input
                }], sortingOrder: [{
                    type: i0.Input
                }], rowClass: [{
                    type: i0.Input
                }], rowSelection: [{
                    type: i0.Input
                }], overlayLoadingTemplate: [{
                    type: i0.Input
                }], overlayNoRowsTemplate: [{
                    type: i0.Input
                }], quickFilterText: [{
                    type: i0.Input
                }], rowModelType: [{
                    type: i0.Input
                }], editType: [{
                    type: i0.Input
                }], domLayout: [{
                    type: i0.Input
                }], clipboardDeliminator: [{
                    type: i0.Input
                }], rowGroupPanelShow: [{
                    type: i0.Input
                }], multiSortKey: [{
                    type: i0.Input
                }], pivotColumnGroupTotals: [{
                    type: i0.Input
                }], pivotRowTotals: [{
                    type: i0.Input
                }], pivotPanelShow: [{
                    type: i0.Input
                }], rowHeight: [{
                    type: i0.Input
                }], detailRowHeight: [{
                    type: i0.Input
                }], rowBuffer: [{
                    type: i0.Input
                }], colWidth: [{
                    type: i0.Input
                }], headerHeight: [{
                    type: i0.Input
                }], groupHeaderHeight: [{
                    type: i0.Input
                }], floatingFiltersHeight: [{
                    type: i0.Input
                }], pivotHeaderHeight: [{
                    type: i0.Input
                }], pivotGroupHeaderHeight: [{
                    type: i0.Input
                }], groupDefaultExpanded: [{
                    type: i0.Input
                }], minColWidth: [{
                    type: i0.Input
                }], maxColWidth: [{
                    type: i0.Input
                }], viewportRowModelPageSize: [{
                    type: i0.Input
                }], viewportRowModelBufferSize: [{
                    type: i0.Input
                }], autoSizePadding: [{
                    type: i0.Input
                }], maxBlocksInCache: [{
                    type: i0.Input
                }], maxConcurrentDatasourceRequests: [{
                    type: i0.Input
                }], tooltipShowDelay: [{
                    type: i0.Input
                }], cacheOverflowSize: [{
                    type: i0.Input
                }], paginationPageSize: [{
                    type: i0.Input
                }], cacheBlockSize: [{
                    type: i0.Input
                }], infiniteInitialRowCount: [{
                    type: i0.Input
                }], scrollbarWidth: [{
                    type: i0.Input
                }], paginationStartPage: [{
                    type: i0.Input
                }], infiniteBlockSize: [{
                    type: i0.Input
                }], batchUpdateWaitMillis: [{
                    type: i0.Input
                }], asyncTransactionWaitMillis: [{
                    type: i0.Input
                }], blockLoadDebounceMillis: [{
                    type: i0.Input
                }], keepDetailRowsCount: [{
                    type: i0.Input
                }], undoRedoCellEditingLimit: [{
                    type: i0.Input
                }], cellFlashDelay: [{
                    type: i0.Input
                }], cellFadeDelay: [{
                    type: i0.Input
                }], localeTextFunc: [{
                    type: i0.Input
                }], groupRowInnerRenderer: [{
                    type: i0.Input
                }], groupRowInnerRendererFramework: [{
                    type: i0.Input
                }], dateComponent: [{
                    type: i0.Input
                }], dateComponentFramework: [{
                    type: i0.Input
                }], groupRowRenderer: [{
                    type: i0.Input
                }], groupRowRendererFramework: [{
                    type: i0.Input
                }], isExternalFilterPresent: [{
                    type: i0.Input
                }], getRowHeight: [{
                    type: i0.Input
                }], doesExternalFilterPass: [{
                    type: i0.Input
                }], getRowClass: [{
                    type: i0.Input
                }], getRowStyle: [{
                    type: i0.Input
                }], getRowClassRules: [{
                    type: i0.Input
                }], traverseNode: [{
                    type: i0.Input
                }], getContextMenuItems: [{
                    type: i0.Input
                }], getMainMenuItems: [{
                    type: i0.Input
                }], processRowPostCreate: [{
                    type: i0.Input
                }], processCellForClipboard: [{
                    type: i0.Input
                }], getNodeChildDetails: [{
                    type: i0.Input
                }], groupRowAggNodes: [{
                    type: i0.Input
                }], getRowNodeId: [{
                    type: i0.Input
                }], isFullWidthCell: [{
                    type: i0.Input
                }], fullWidthCellRenderer: [{
                    type: i0.Input
                }], fullWidthCellRendererFramework: [{
                    type: i0.Input
                }], doesDataFlower: [{
                    type: i0.Input
                }], processSecondaryColDef: [{
                    type: i0.Input
                }], processSecondaryColGroupDef: [{
                    type: i0.Input
                }], getBusinessKeyForNode: [{
                    type: i0.Input
                }], sendToClipboard: [{
                    type: i0.Input
                }], navigateToNextCell: [{
                    type: i0.Input
                }], tabToNextCell: [{
                    type: i0.Input
                }], getDetailRowData: [{
                    type: i0.Input
                }], processCellFromClipboard: [{
                    type: i0.Input
                }], getDocument: [{
                    type: i0.Input
                }], postProcessPopup: [{
                    type: i0.Input
                }], getChildCount: [{
                    type: i0.Input
                }], getDataPath: [{
                    type: i0.Input
                }], loadingCellRenderer: [{
                    type: i0.Input
                }], loadingCellRendererFramework: [{
                    type: i0.Input
                }], loadingOverlayComponent: [{
                    type: i0.Input
                }], loadingOverlayComponentFramework: [{
                    type: i0.Input
                }], noRowsOverlayComponent: [{
                    type: i0.Input
                }], noRowsOverlayComponentFramework: [{
                    type: i0.Input
                }], detailCellRenderer: [{
                    type: i0.Input
                }], detailCellRendererFramework: [{
                    type: i0.Input
                }], defaultGroupSortComparator: [{
                    type: i0.Input
                }], isRowMaster: [{
                    type: i0.Input
                }], isRowSelectable: [{
                    type: i0.Input
                }], postSort: [{
                    type: i0.Input
                }], processHeaderForClipboard: [{
                    type: i0.Input
                }], paginationNumberFormatter: [{
                    type: i0.Input
                }], processDataFromClipboard: [{
                    type: i0.Input
                }], getServerSideGroupKey: [{
                    type: i0.Input
                }], isServerSideGroup: [{
                    type: i0.Input
                }], suppressKeyboardEvent: [{
                    type: i0.Input
                }], createChartContainer: [{
                    type: i0.Input
                }], processChartOptions: [{
                    type: i0.Input
                }], getChartToolbarItems: [{
                    type: i0.Input
                }], fillOperation: [{
                    type: i0.Input
                }], toolPanelSuppressRowGroups: [{
                    type: i0.Input
                }], toolPanelSuppressValues: [{
                    type: i0.Input
                }], toolPanelSuppressPivots: [{
                    type: i0.Input
                }], toolPanelSuppressPivotMode: [{
                    type: i0.Input
                }], toolPanelSuppressSideButtons: [{
                    type: i0.Input
                }], toolPanelSuppressColumnFilter: [{
                    type: i0.Input
                }], toolPanelSuppressColumnSelectAll: [{
                    type: i0.Input
                }], toolPanelSuppressColumnExpandAll: [{
                    type: i0.Input
                }], suppressMakeColumnVisibleAfterUnGroup: [{
                    type: i0.Input
                }], suppressRowClickSelection: [{
                    type: i0.Input
                }], suppressCellSelection: [{
                    type: i0.Input
                }], suppressHorizontalScroll: [{
                    type: i0.Input
                }], alwaysShowVerticalScroll: [{
                    type: i0.Input
                }], debug: [{
                    type: i0.Input
                }], enableBrowserTooltips: [{
                    type: i0.Input
                }], enableColResize: [{
                    type: i0.Input
                }], enableCellExpressions: [{
                    type: i0.Input
                }], enableSorting: [{
                    type: i0.Input
                }], enableServerSideSorting: [{
                    type: i0.Input
                }], enableFilter: [{
                    type: i0.Input
                }], enableServerSideFilter: [{
                    type: i0.Input
                }], angularCompileRows: [{
                    type: i0.Input
                }], angularCompileFilters: [{
                    type: i0.Input
                }], angularCompileHeaders: [{
                    type: i0.Input
                }], groupSuppressAutoColumn: [{
                    type: i0.Input
                }], groupSelectsChildren: [{
                    type: i0.Input
                }], groupIncludeFooter: [{
                    type: i0.Input
                }], groupIncludeTotalFooter: [{
                    type: i0.Input
                }], groupUseEntireRow: [{
                    type: i0.Input
                }], groupSuppressRow: [{
                    type: i0.Input
                }], groupSuppressBlankHeader: [{
                    type: i0.Input
                }], forPrint: [{
                    type: i0.Input
                }], suppressMenuHide: [{
                    type: i0.Input
                }], rowDeselection: [{
                    type: i0.Input
                }], unSortIcon: [{
                    type: i0.Input
                }], suppressMultiSort: [{
                    type: i0.Input
                }], singleClickEdit: [{
                    type: i0.Input
                }], suppressLoadingOverlay: [{
                    type: i0.Input
                }], suppressNoRowsOverlay: [{
                    type: i0.Input
                }], suppressAutoSize: [{
                    type: i0.Input
                }], skipHeaderOnAutoSize: [{
                    type: i0.Input
                }], suppressParentsInRowNodes: [{
                    type: i0.Input
                }], showToolPanel: [{
                    type: i0.Input
                }], suppressColumnMoveAnimation: [{
                    type: i0.Input
                }], suppressMovableColumns: [{
                    type: i0.Input
                }], suppressFieldDotNotation: [{
                    type: i0.Input
                }], enableRangeSelection: [{
                    type: i0.Input
                }], enableRangeHandle: [{
                    type: i0.Input
                }], enableFillHandle: [{
                    type: i0.Input
                }], suppressClearOnFillReduction: [{
                    type: i0.Input
                }], deltaSort: [{
                    type: i0.Input
                }], suppressTouch: [{
                    type: i0.Input
                }], suppressAsyncEvents: [{
                    type: i0.Input
                }], allowContextMenuWithControlKey: [{
                    type: i0.Input
                }], suppressContextMenu: [{
                    type: i0.Input
                }], suppressMenuFilterPanel: [{
                    type: i0.Input
                }], suppressMenuMainPanel: [{
                    type: i0.Input
                }], suppressMenuColumnPanel: [{
                    type: i0.Input
                }], rememberGroupStateWhenNewData: [{
                    type: i0.Input
                }], enableCellChangeFlash: [{
                    type: i0.Input
                }], suppressDragLeaveHidesColumns: [{
                    type: i0.Input
                }], suppressMiddleClickScrolls: [{
                    type: i0.Input
                }], suppressPreventDefaultOnMouseWheel: [{
                    type: i0.Input
                }], suppressUseColIdForGroups: [{
                    type: i0.Input
                }], suppressCopyRowsToClipboard: [{
                    type: i0.Input
                }], copyHeadersToClipboard: [{
                    type: i0.Input
                }], pivotMode: [{
                    type: i0.Input
                }], suppressAggFuncInHeader: [{
                    type: i0.Input
                }], suppressColumnVirtualisation: [{
                    type: i0.Input
                }], suppressAggAtRootLevel: [{
                    type: i0.Input
                }], suppressFocusAfterRefresh: [{
                    type: i0.Input
                }], functionsPassive: [{
                    type: i0.Input
                }], functionsReadOnly: [{
                    type: i0.Input
                }], animateRows: [{
                    type: i0.Input
                }], groupSelectsFiltered: [{
                    type: i0.Input
                }], groupRemoveSingleChildren: [{
                    type: i0.Input
                }], groupRemoveLowestSingleChildren: [{
                    type: i0.Input
                }], enableRtl: [{
                    type: i0.Input
                }], suppressClickEdit: [{
                    type: i0.Input
                }], rowDragManaged: [{
                    type: i0.Input
                }], suppressRowDrag: [{
                    type: i0.Input
                }], suppressMoveWhenRowDragging: [{
                    type: i0.Input
                }], enableMultiRowDragging: [{
                    type: i0.Input
                }], enableGroupEdit: [{
                    type: i0.Input
                }], embedFullWidthRows: [{
                    type: i0.Input
                }], deprecatedEmbedFullWidthRows: [{
                    type: i0.Input
                }], suppressTabbing: [{
                    type: i0.Input
                }], suppressPaginationPanel: [{
                    type: i0.Input
                }], floatingFilter: [{
                    type: i0.Input
                }], groupHideOpenParents: [{
                    type: i0.Input
                }], groupMultiAutoColumn: [{
                    type: i0.Input
                }], pagination: [{
                    type: i0.Input
                }], stopEditingWhenGridLosesFocus: [{
                    type: i0.Input
                }], paginationAutoPageSize: [{
                    type: i0.Input
                }], suppressScrollOnNewData: [{
                    type: i0.Input
                }], purgeClosedRowNodes: [{
                    type: i0.Input
                }], cacheQuickFilter: [{
                    type: i0.Input
                }], deltaRowDataMode: [{
                    type: i0.Input
                }], ensureDomOrder: [{
                    type: i0.Input
                }], accentedSort: [{
                    type: i0.Input
                }], pivotTotals: [{
                    type: i0.Input
                }], suppressChangeDetection: [{
                    type: i0.Input
                }], valueCache: [{
                    type: i0.Input
                }], valueCacheNeverExpires: [{
                    type: i0.Input
                }], aggregateOnlyChangedColumns: [{
                    type: i0.Input
                }], suppressAnimationFrame: [{
                    type: i0.Input
                }], suppressExcelExport: [{
                    type: i0.Input
                }], suppressCsvExport: [{
                    type: i0.Input
                }], treeData: [{
                    type: i0.Input
                }], masterDetail: [{
                    type: i0.Input
                }], suppressMultiRangeSelection: [{
                    type: i0.Input
                }], enterMovesDownAfterEdit: [{
                    type: i0.Input
                }], enterMovesDown: [{
                    type: i0.Input
                }], suppressPropertyNamesCheck: [{
                    type: i0.Input
                }], rowMultiSelectWithClick: [{
                    type: i0.Input
                }], contractColumnSelection: [{
                    type: i0.Input
                }], suppressEnterpriseResetOnNewColumns: [{
                    type: i0.Input
                }], enableOldSetFilterModel: [{
                    type: i0.Input
                }], suppressRowHoverHighlight: [{
                    type: i0.Input
                }], gridAutoHeight: [{
                    type: i0.Input
                }], suppressRowTransform: [{
                    type: i0.Input
                }], suppressClipboardPaste: [{
                    type: i0.Input
                }], suppressLastEmptyLineOnPaste: [{
                    type: i0.Input
                }], serverSideSortingAlwaysResets: [{
                    type: i0.Input
                }], reactNext: [{
                    type: i0.Input
                }], suppressSetColumnStateEvents: [{
                    type: i0.Input
                }], enableCharts: [{
                    type: i0.Input
                }], deltaColumnMode: [{
                    type: i0.Input
                }], suppressMaintainUnsortedOrder: [{
                    type: i0.Input
                }], enableCellTextSelection: [{
                    type: i0.Input
                }], suppressBrowserResizeObserver: [{
                    type: i0.Input
                }], suppressMaxRenderedRowRestriction: [{
                    type: i0.Input
                }], excludeChildrenWhenTreeDataFiltering: [{
                    type: i0.Input
                }], tooltipMouseTrack: [{
                    type: i0.Input
                }], keepDetailRows: [{
                    type: i0.Input
                }], paginateChildRows: [{
                    type: i0.Input
                }], preventDefaultOnContextMenu: [{
                    type: i0.Input
                }], undoRedoCellEditing: [{
                    type: i0.Input
                }], allowDragFromColumnsToolPanel: [{
                    type: i0.Input
                }], immutableData: [{
                    type: i0.Input
                }], immutableColumns: [{
                    type: i0.Input
                }], pivotSuppressAutoColumn: [{
                    type: i0.Input
                }], columnEverythingChanged: [{
                    type: i0.Output
                }], newColumnsLoaded: [{
                    type: i0.Output
                }], columnPivotModeChanged: [{
                    type: i0.Output
                }], columnRowGroupChanged: [{
                    type: i0.Output
                }], expandOrCollapseAll: [{
                    type: i0.Output
                }], columnPivotChanged: [{
                    type: i0.Output
                }], gridColumnsChanged: [{
                    type: i0.Output
                }], columnValueChanged: [{
                    type: i0.Output
                }], columnMoved: [{
                    type: i0.Output
                }], columnVisible: [{
                    type: i0.Output
                }], columnPinned: [{
                    type: i0.Output
                }], columnGroupOpened: [{
                    type: i0.Output
                }], columnResized: [{
                    type: i0.Output
                }], displayedColumnsChanged: [{
                    type: i0.Output
                }], virtualColumnsChanged: [{
                    type: i0.Output
                }], rowGroupOpened: [{
                    type: i0.Output
                }], rowDataChanged: [{
                    type: i0.Output
                }], rowDataUpdated: [{
                    type: i0.Output
                }], pinnedRowDataChanged: [{
                    type: i0.Output
                }], rangeSelectionChanged: [{
                    type: i0.Output
                }], chartCreated: [{
                    type: i0.Output
                }], chartRangeSelectionChanged: [{
                    type: i0.Output
                }], chartOptionsChanged: [{
                    type: i0.Output
                }], chartDestroyed: [{
                    type: i0.Output
                }], toolPanelVisibleChanged: [{
                    type: i0.Output
                }], modelUpdated: [{
                    type: i0.Output
                }], pasteStart: [{
                    type: i0.Output
                }], pasteEnd: [{
                    type: i0.Output
                }], fillStart: [{
                    type: i0.Output
                }], fillEnd: [{
                    type: i0.Output
                }], cellClicked: [{
                    type: i0.Output
                }], cellDoubleClicked: [{
                    type: i0.Output
                }], cellMouseDown: [{
                    type: i0.Output
                }], cellContextMenu: [{
                    type: i0.Output
                }], cellValueChanged: [{
                    type: i0.Output
                }], rowValueChanged: [{
                    type: i0.Output
                }], cellFocused: [{
                    type: i0.Output
                }], rowSelected: [{
                    type: i0.Output
                }], selectionChanged: [{
                    type: i0.Output
                }], cellKeyDown: [{
                    type: i0.Output
                }], cellKeyPress: [{
                    type: i0.Output
                }], cellMouseOver: [{
                    type: i0.Output
                }], cellMouseOut: [{
                    type: i0.Output
                }], filterChanged: [{
                    type: i0.Output
                }], filterModified: [{
                    type: i0.Output
                }], filterOpened: [{
                    type: i0.Output
                }], sortChanged: [{
                    type: i0.Output
                }], virtualRowRemoved: [{
                    type: i0.Output
                }], rowClicked: [{
                    type: i0.Output
                }], rowDoubleClicked: [{
                    type: i0.Output
                }], gridReady: [{
                    type: i0.Output
                }], gridSizeChanged: [{
                    type: i0.Output
                }], viewportChanged: [{
                    type: i0.Output
                }], firstDataRendered: [{
                    type: i0.Output
                }], dragStarted: [{
                    type: i0.Output
                }], dragStopped: [{
                    type: i0.Output
                }], checkboxChanged: [{
                    type: i0.Output
                }], rowEditingStarted: [{
                    type: i0.Output
                }], rowEditingStopped: [{
                    type: i0.Output
                }], cellEditingStarted: [{
                    type: i0.Output
                }], cellEditingStopped: [{
                    type: i0.Output
                }], bodyScroll: [{
                    type: i0.Output
                }], animationQueueEmpty: [{
                    type: i0.Output
                }], heightScaleChanged: [{
                    type: i0.Output
                }], paginationChanged: [{
                    type: i0.Output
                }], componentStateChanged: [{
                    type: i0.Output
                }], bodyHeightChanged: [{
                    type: i0.Output
                }], displayedColumnsWidthChanged: [{
                    type: i0.Output
                }], scrollVisibilityChanged: [{
                    type: i0.Output
                }], columnHoverChanged: [{
                    type: i0.Output
                }], flashCells: [{
                    type: i0.Output
                }], rowDragEnter: [{
                    type: i0.Output
                }], rowDragMove: [{
                    type: i0.Output
                }], rowDragLeave: [{
                    type: i0.Output
                }], rowDragEnd: [{
                    type: i0.Output
                }], popupToFront: [{
                    type: i0.Output
                }], columnRowGroupChangeRequest: [{
                    type: i0.Output
                }], columnPivotChangeRequest: [{
                    type: i0.Output
                }], columnValueChangeRequest: [{
                    type: i0.Output
                }], columnAggFuncChangeRequest: [{
                    type: i0.Output
                }], keyboardFocus: [{
                    type: i0.Output
                }], mouseFocus: [{
                    type: i0.Output
                }] } });

    var AgGridModule = /** @class */ (function () {
        function AgGridModule() {
        }
        AgGridModule.withComponents = function (components) {
            return {
                ngModule: AgGridModule,
                providers: [
                    { provide: i0.ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
                ],
            };
        };
        AgGridModule.forRoot = function (components) {
            return {
                ngModule: AgGridModule,
                providers: [
                    { provide: i0.ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
                ],
            };
        };
        return AgGridModule;
    }());
    AgGridModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AgGridModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AgGridModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AgGridModule, declarations: [AgGridAngular, AgGridColumn], exports: [AgGridAngular, AgGridColumn] });
    AgGridModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AgGridModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AgGridModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [AgGridAngular, AgGridColumn],
                        imports: [],
                        exports: [AgGridAngular, AgGridColumn]
                    }]
            }] });

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AgGridAngular = AgGridAngular;
    exports.AgGridColumn = AgGridColumn;
    exports.AgGridModule = AgGridModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=time-loop-ag-grid-angular.umd.js.map
