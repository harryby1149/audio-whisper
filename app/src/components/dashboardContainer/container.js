import React, { useState, useEffect } from 'react';
import './container.css';
import {
    BrowserRouter as Router,
    Redirect,
} from "react-router-dom";

export default function DashboardContainer(props) {
    //Ideally there will be an api call that happens after login. 
    //This api call will return a user object which contains all the info below.
    //The below function is going to attempt to replicate the api call and the object returned.
    const [user, setUser] = useState(undefined);
    const [redirect, setRedirect] = useState(false);
    const [pathName, setPathName] = useState(undefined);
    useEffect(() => {
        let thisUser = {
            //"id": "userId",
            posts: ["postId1", "postId2"],
            userId: "1948719287918729471924",
            username: "Kid Rock",
            tracks: ["trackId1", "trackId2", "trackId3","testTrack"]
        };
        setTimeout(setUser(thisUser), 500);
    }, [])

    const causeRedirect= (path) => {
        setPathName(path);
        setRedirect(true);
    };

    return (
        (redirect) ? <Redirect
                to={{
                    pathname: pathName,
                    //state: { from: location }
                }}
            /> :
        <div className="main">
            {props.projects ?
                <>
                    <h2 className="mainCon">Projects</h2>
                    <div className="subCon">
                        {user ? user.tracks.map(function (track) {
                            return (
                                <p><a onClick={()=> causeRedirect(track)}>{track}</a></p>
                            )
                        }) : <p>Loading...</p>}
                    </div>
                </>
                : null}
            {props.account ?
                <>
                    <h2 className="mainCon">Account</h2>
                    <div className="subCon">
                        {user ?
                            <>
                                <p><a>{user.username}</a></p>
                                <p><a>{user.userId}</a></p>
                            </>
                            : <p>Loading...</p>}
                    </div>
                </>
                : null}
            {props.comments ?
                <>
                    <h2 className="mainCon">Comments</h2>
                    <div className="subCon">
                        {user ? user.posts.map(function (post) {
                            return (
                                <p><a>{post}</a></p>
                            )
                        }) : <p>Loading...</p>}
                    </div>
                </>
                : null}
            {props.friends ?
                <>
                    <h2 className="mainCon">Friends</h2>
                    <div className="subCon">
                        {user.friends ? user.map(function (friend) {
                            return (
                                <p><a>{friend}</a></p>
                            )
                        }) : <p>You ain't got no friends.</p>}
                    </div>
                </>
                : null}
        </div>
    )
};