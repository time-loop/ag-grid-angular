import React from 'react';
import RowGroupingVideo from '../../../videos/homepage-row-grouping.mp4';

const RowGrouping = () => {
    return (
        <div className="video-outer">
            <video src={RowGroupingVideo} autoPlay loop muted="true"></video>

            <a href="/javascript-data-grid/grouping/">Read more about grouping and pivoting</a>
        </div>
    );
};

export default RowGrouping;
