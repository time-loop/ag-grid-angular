import {NgModule} from '@angular/core';

import {AgGridAngular} from './ag-grid-angular.component';
import {AgGridColumn} from './ag-grid-column.component';

@NgModule({
    declarations: [AgGridAngular, AgGridColumn],
    exports: [AgGridAngular, AgGridColumn]
})
export class AgGridModule {}
