import React from 'react';
import './songDisplayBox.css';

export default function SongDisplayBox(props) {
    return (
        <div className="promoWrapper">
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
        </div>
    )
}

