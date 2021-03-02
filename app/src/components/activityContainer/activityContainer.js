import React from 'react';
import './activityContainer.css';
import SongDisplayBox from '../songDisplayBox/songDisplayBox';

export default function ActivityContainer(props) {
    
    return (
        <div className='latestActivityContainer'>
            <h1 className="activityHeader">Latest Jams</h1>
            <div className="boxContainer">
                {Object.keys(props.songData).map(function(key, index) {
                    return (
                        <SongDisplayBox title={props.songData[key].title} artist={props.songData[key].artist} img={props.songData[key].img} />
                    )
                })
            }
            </div>
        </div>
    )
};