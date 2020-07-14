import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    Redirect,
    useHistory,
    useLocation,
} from "react-router-dom";
import './sidebar.css';

export default function Sidebar(props) {
    return (
        (props.redirect) ? <Redirect
        to={{
            pathname: "/",
            //state: { from: location }
        }}
    />  : 
    <div className="container">
        <nav className="main-menu">
            <ul>
                <li>
                    <a onClick={() => props.toggleDisplay('projects')} href="#">
                        <i className="fa fa-play-circle fa-2x"></i>
                        <span className="nav-text">
                            Projects
                        </span>
                    </a>
                  
                </li>
                <li>
                    <a onClick={()=>props.toggleDisplay('comments')} href="#">
                        <i className="fa fa-comments fa-2x"></i>
                        <span className="nav-text">
                            Comments
                        </span>
                    </a>
                    
                </li>
                <li>
                    <a onClick={()=>props.toggleDisplay('friends')} href="#">
                       <i className="fa fa-users fa-2x"></i>
                        <span className="nav-text">
                            Friends
                        </span>
                    </a>
                    
                </li>
                <li>
                    <a onClick={()=>props.toggleDisplay('account')} href="#">
                       <i className="fa fa-cog fa-2x"></i>
                        <span className="nav-text">
                            Account
                        </span>
                    </a>
                   
                </li>
                </ul>

            <ul className="logout">
                <li>
                   <a onClick={()=>props.logout()}>
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
        </div>
    )
}