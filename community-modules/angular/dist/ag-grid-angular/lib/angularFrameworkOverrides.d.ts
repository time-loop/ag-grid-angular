import { NgZone } from "@angular/core";
import { VanillaFrameworkOverrides } from "@ag-grid-community/core";
import * as i0 from "@angular/core";
export declare class AngularFrameworkOverrides extends VanillaFrameworkOverrides {
    private _ngZone;
    constructor(_ngZone: NgZone);
    setTimeout(action: any, timeout?: any): void;
    addEventListenerOutsideAngular(element: HTMLElement, type: string, listener: EventListener | EventListenerObject, useCapture?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AngularFrameworkOverrides, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AngularFrameworkOverrides>;
}
