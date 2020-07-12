import React from 'react';
import './landing_page.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ActivityContainer from '../../components/activityContainer/activityContainer';
import SineWave from '../../components/sineSVG/sineWave';

export default function Landing() {
    return (
        <div>
            <Header />
            <SineWave/>
            <ActivityContainer/>
            <Footer />
        </div>
    )
};

