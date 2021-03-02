import React from 'react';
import './landing_page.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ActivityContainer from '../../components/activityContainer/activityContainer';
import SineWave from '../../components/sineSVG/sineWave';

export default function Landing() {
    //This can be grabbed when the component mounts
    const fakeRecentSongData = {
        song1: {
            title: 'I have a Fart for you',
            artist: 'Farter McGee',
            img: "https://picsum.photos/100",
        },
        song2: {
            title: 'Leave my farts alone',
            artist: 'Fartwood Mac',
            img: "https://picsum.photos/100",
        },
        song3: {
            title: 'Crazy On You',
            artist: 'Feart',
            img: "https://picsum.photos/100",
        },
        }

    return (
        <div>
            <Header />
            <SineWave/>
            <ActivityContainer songData={fakeRecentSongData}/>
            <Footer />
        </div>
    )
};

