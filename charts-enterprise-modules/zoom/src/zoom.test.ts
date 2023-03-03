import { describe, expect, it, beforeEach, afterEach, jest } from '@jest/globals';
import { Zoom } from './zoom';
import { _ModuleSupport, _Scene } from 'ag-charts-community';

describe('Zoom', () => {
    const ctx: any = {
        scene: {},
        interactionManager: {
            addListener: jest.fn(),
        },
        layoutService: {
            addListener: jest.fn(),
        },
        zoomManager: {
            getZoom: jest.fn(),
            updateZoom: jest.fn(),
        },
    };

    beforeEach(() => {
        console.warn = jest.fn();
    });

    afterEach(() => {
        expect(console.warn).not.toBeCalled();
    });

    describe('onWheel', () => {
        it('should ...', () => {
            const zoomModule = new Zoom(ctx);

            // zoomModule.seriesRect = {
            //     x:
            // }

            // ctx.zoomManager.getZoom

            const event = {
                sourceEvent: {
                    clientX: 0.5,
                    clientY: 0.5,
                },
            };

            // zoomModule.onWheel(event);

            // expect(ctx.zoomManager.updateZoom).toHaveBeenCalledWith()
        });
    });
});
