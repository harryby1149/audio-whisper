import React, { useState } from 'react';
import './songDisplayBox.css';
import {
    BrowserRouter as Router,
    Redirect,
} from "react-router-dom";


export default function SongDisplayBox(props) {

    const [redirect, setRedirect] = useState(false);
    const [path, setPath] = useState("");

    const handleRedirect = (thePath) => {
        setRedirect(true);
        setPath(thePath);
    }


    return (
        (redirect) ? <Redirect
            to={{
                pathname: path,
            }}
        /> :
        <div className="promoWrapper">
            <a onClick={() => handleRedirect(props.url)}>
            <div className="promoHolder">
                <div className="promoText">
                    <h2 className="promoSongTitle">{props.title}</h2>
                    <p className="promoSongArtist">{props.artist}</p>
                    <div className="transport"><i className="fa awe fa-backward"></i>
                        <i className="fa awe fa-play"></i>
                        <i className="fa awe fa-pause"></i>
                        <i className="fa awe fa-stop"></i>
                        <i className="fa awe fa-forward"></i>
                    </div>
                </div>
                <img className="promoSongImg" src={props.img} />
            </div>
            </a>
        </div>
    )
}

