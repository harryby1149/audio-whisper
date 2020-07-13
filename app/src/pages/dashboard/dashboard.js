import React from 'react';
import './dashboard.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Sidebar from '../../components/sidebar/sidebar';

export default function Dashboard() {
    return (
        <div>
            <Header />
            <Sidebar/>
            <Footer />
        </div>
    )
};
