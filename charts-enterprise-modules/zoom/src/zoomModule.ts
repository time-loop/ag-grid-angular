import { _ModuleSupport } from 'ag-charts-community';
import { Zoom } from './zoom';

export const ZoomModule: _ModuleSupport.Module = {
    optionsKey: 'zoom',
    chartTypes: ['cartesian'],
    initialiseModule(ctx: _ModuleSupport.ModuleContext) {
        const instance = new Zoom(ctx);
        return { instance };
    },
};
