import React, { Component } from 'react';
import './dashboard.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Sidebar from '../../components/sidebar/sidebar';
import DashboardContainer from '../../components/dashboardContainer/container';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: true,
            account: false,
            comments: false,
            friends: false,
            redirect: false,
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
        this.logout = this.logout.bind(this);
    }

    toggleDisplay = (type) => {
        this.setState({
            [type]: true,
            [!type]: false,
        })
    }

    logout = () => {
        this.setState({
            redirect: true,
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Sidebar toggleDisplay={this.toggleDisplay} logout={this.logout} redirect={this.state.redirect}/>
                <DashboardContainer projects={this.state.projects} account={this.state.account} comments={this.state.comments} friends={this.state.friends}/>
                <Footer />
            </div>
        )
    }
};

export default Dashboard;
