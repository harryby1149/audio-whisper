import React from 'react';
import './container.css';

export default function DashboardContainer(props) {
    return (
        <div className="main">
            {props.projects? 
                <div>Projects</div>
            : null}
            {props.account? 
                <div>Account</div>
            : null}
            {props.comments? 
                <div>Comments</div>
            : null}
            {props.friends? 
                <div>Friends</div>
            : null}
        </div>
    )
};