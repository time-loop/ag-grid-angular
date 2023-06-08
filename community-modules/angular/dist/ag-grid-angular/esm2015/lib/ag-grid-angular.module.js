import { ANALYZE_FOR_ENTRY_COMPONENTS, NgModule } from '@angular/core';
import { AgGridAngular } from './ag-grid-angular.component';
import { AgGridColumn } from './ag-grid-column.component';
import * as i0 from "@angular/core";
export class AgGridModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWctZ3JpZC1hbmd1bGFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FnLWdyaWQtYW5ndWxhci9zcmMvbGliL2FnLWdyaWQtYW5ndWxhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLDRCQUE0QixFQUF1QixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7QUFPeEQsTUFBTSxPQUFPLFlBQVk7SUFDckIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFnQjtRQUNsQyxPQUFPO1lBQ0gsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNQLEVBQUMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQzthQUM3RTtTQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFnQjtRQUMzQixPQUFPO1lBQ0gsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNQLEVBQUMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQzthQUM3RTtTQUNKLENBQUM7SUFDTixDQUFDOzswR0FqQlEsWUFBWTsyR0FBWixZQUFZLGlCQUpOLGFBQWEsRUFBRSxZQUFZLGFBRWhDLGFBQWEsRUFBRSxZQUFZOzJHQUU1QixZQUFZLFlBSFosRUFBRTs0RkFHRixZQUFZO2tCQUx4QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUM7b0JBQzNDLE9BQU8sRUFBRSxFQUFFO29CQUNYLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUM7aUJBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7QWdHcmlkQW5ndWxhcn0gZnJvbSAnLi9hZy1ncmlkLWFuZ3VsYXIuY29tcG9uZW50JztcbmltcG9ydCB7QWdHcmlkQ29sdW1ufSBmcm9tICcuL2FnLWdyaWQtY29sdW1uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbQWdHcmlkQW5ndWxhciwgQWdHcmlkQ29sdW1uXSxcbiAgICBpbXBvcnRzOiBbXSxcbiAgICBleHBvcnRzOiBbQWdHcmlkQW5ndWxhciwgQWdHcmlkQ29sdW1uXVxufSlcbmV4cG9ydCBjbGFzcyBBZ0dyaWRNb2R1bGUge1xuICAgIHN0YXRpYyB3aXRoQ29tcG9uZW50cyhjb21wb25lbnRzPzogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVyczxBZ0dyaWRNb2R1bGU+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBBZ0dyaWRNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7cHJvdmlkZTogQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUywgdXNlVmFsdWU6IGNvbXBvbmVudHMsIG11bHRpOiB0cnVlfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9yUm9vdChjb21wb25lbnRzPzogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVyczxBZ0dyaWRNb2R1bGU+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBBZ0dyaWRNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7cHJvdmlkZTogQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUywgdXNlVmFsdWU6IGNvbXBvbmVudHMsIG11bHRpOiB0cnVlfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cbiJdfQ==