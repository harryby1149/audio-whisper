import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import './header.css';
import './modal.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            isAuthenticated: false,
            redirect: false,
            pathName: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.signup = this.signup.bind(this);
        this.login = this.login.bind(this);
        this.sendHome = this.sendHome.bind(this);
    }

    setRedirect = () => {
        this.setState({
            redirect: true,
            pathName: '/dashboard'
        })
    }

    sendHome = () => {
        this.setState({
            redirect: true,
            pathName: '/'
        })
    }

    authenticate = (cb) => {
        this.state.isAuthenticated = true;
        setTimeout(this.setRedirect(), 100); // fake async
    }
    signout = (cb) => {
        this.state.isAuthenticated = false;
        setTimeout(cb, 100);
    }

    login = (event) => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            this.authenticate();
        } else {
            console.log('Not authenticated');
        }
    };

    signup = (event) => {
        event.preventDefault();
        //Fake authentication
        if (this.state.username && this.state.password && this.state.email) {
            this.authenticate();
        } else {
            console.log('Not authenticated!');
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClear = () => {
        this.setState({
            username: "",
            email: "",
            password: "",
            isAuthenticated: false,
            redirect: false,
            pathName: "",
        })
    }

    render() {
        let location= window.location.href;
        return (
            (this.state.redirect) ? <Redirect
                to={{
                    pathname: this.state.pathName,
                    //state: { from: location }
                }}
            /> :
                <>
                    <nav className="navBar">
                        <header className="navHeader">
                            <div className="headerContainer">
                                <h1 className="title">Audio Whisper</h1>
                                <h3 className='subtitle'>Share | Collaborate | Remix</h3>
                            </div>
                            {location === 'http://localhost:3000/' ?  
                            <div className="joinContainer">
                                <div className="signupLink" id="headerText"><a id="headerLink" href="#open-signup">Signup</a></div>
                                <div className="headerSeparator" id="headerText">|</div>
                                <div className="loginLink" id="headerText"><a id="headerLink" href="#open-login">Login</a></div>
                            </div> 
                            :
                            <div className="joinContainer">
                            </div>
                            }
                        </header>
                    </nav>
                    <div id="open-signup" className="modal-window">
                        <div>
                            <a href="#" title="Close" className="modal-close" onClick={this.handleClear}>Close</a>
                            <h2>Sign Up</h2>
                            <form id="signupForm">
                                <input type="text" id="username" name="username" required
                                    minLength="4" maxLength="100" size="50" placeholder="Username" onChange={this.handleChange} value={this.state.username}></input>
                                <input type="email" id="email" name="email" required
                                    size="50" placeholder="Email Address" onChange={this.handleChange} value={this.state.email}></input>
                                <input type="password" id="password" name="password" required
                                    minLength="8" size="50" placeholder="Password" onChange={this.handleChange} value={this.state.password}></input>
                                <input type="submit" value="Sign Up" onClick={this.signup}></input>
                            </form>
                        </div>
                    </div>
                    <div id="open-login" className="modal-window">
                        <div>
                            <a href="#" title="Close" className="modal-close" onClick={this.handleClear}>Close</a>
                            <h2>Login</h2>
                            <form id="loginForm">
                                <input type="text" id="usernameLogin" name="username" required
                                    minLength="4" maxLength="100" size="50" placeholder="Username" onChange={this.handleChange} value={this.state.username}></input>
                                <input type="password" id="passwordLogin" name="password" required
                                    minLength="8" size="50" placeholder="Password" onChange={this.handleChange} value={this.state.password}></input>
                                <input type="submit" value="Login" onClick={this.login}></input>
                            </form>
                        </div>
                    </div>
                </>
        )
    }
};

export default Header;
