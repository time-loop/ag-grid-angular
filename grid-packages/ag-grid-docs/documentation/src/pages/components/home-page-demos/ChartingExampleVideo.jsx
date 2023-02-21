import React from 'react';
import chartingVideo from '../../../videos/homepage-charts.mp4';

const ChartingExampleVideo = () => {
    // Overflow & transform are temporary fixes for video issue

    return (
        <div className="video-outer" style={{ overflow: 'hidden' }}>
            <video src={chartingVideo} autoPlay loop muted="true" style={{ transform: 'translateX(1px)' }}></video>

            <a href="/javascript-data-grid/grouping/">Read more about charting</a>
        </div>
    );
};

export default ChartingExampleVideo;
