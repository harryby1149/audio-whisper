import React from 'react';
import './activityContainer.css';

export default function ActivityContainer() {
    return (
        <div className='latestActivityContainer'>
            <h1 className="activityHeader">Latest Jams</h1>
            <div className="boxContainer">
                <div className="activityBox">BOX 1</div>
                <div className="activityBox">BOX 2</div>
                <div className="activityBox">BOX 3</div>
                <div className="activityBox">BOX 4</div>
                <div className="activityBox">BOX 5</div>
            </div>
        </div>
    )
};