import React from 'react';
import './container.css';

export default function DashboardContainer(props) {
    return (
        <div className="main">
            {props.projects? 
                <>
                <h2 className="mainCon">Projects</h2>
                <div className="subCon">
                    <ul>
                        <li>Bull</li>
                        <li>Shit</li>
                        <li>Content!</li>
                    </ul>
                </div>
                </>
            : null}
            {props.account? 
                <>
                <h2 className="mainCon">Account</h2>
                <div className="subCon">
                    <ul>
                        <li>Bull</li>
                        <li>Shit</li>
                        <li>Content!</li>
                    </ul>
                </div>
                </>
            : null}
            {props.comments? 
            <>
                <h2 className="mainCon">Comments</h2>
                <div className="subCon">
                    <ul>
                        <li>Bull</li>
                        <li>Shit</li>
                        <li>Content!</li>
                    </ul>
                </div>
                </>
            : null}
            {props.friends? 
            <>
                <h2 className="mainCon">Friends</h2>
                <div className="subCon">
                    <ul>
                        <li>Bull</li>
                        <li>Shit</li>
                        <li>Content!</li>
                    </ul>
                </div>
                </>
            : null}
        </div>
    )
};