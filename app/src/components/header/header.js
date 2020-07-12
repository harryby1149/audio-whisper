import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import './header.css';
import './modal.css';

export default function Header() {
    return (
        <>
            <nav className="navBar">
                <header className="navHeader">
                    <div className="headerContainer">
                        <h1 className="title">Audio Whisper</h1>
                        <h3 className='subtitle'>Share | Collaborate | Remix</h3>
                    </div>
                    <div className="joinContainer">
                        <div className="signupLink" id="headerText"><a id="headerLink" href="#open-signup">Signup</a></div>
                        <div className="headerSeparator" id="headerText">|</div>
                        <div className="loginLink" id="headerText"><a id="headerLink" href="#open-login">Login</a></div>
                    </div>
                </header>
            </nav>
            <div id="open-signup" className="modal-window">
                <div>
                    <a href="#" title="Close" className="modal-close">Close</a>
                    <h2>Sign Up</h2>
                    <form id="signupForm">
                        <input type="text" id="username" name="username" required
                            minLength="4" maxLength="8" size="50" placeholder="Username"></input>
                        <input type="email" id="email" name="email" required
                            size="50" placeholder="Email Address"></input>
                        <input type="password" id="password" name="password" required
                            minLength="8" size="50" placeholder="Password"></input>
                        <input type="submit" value="Sign Up"></input>
                    </form>
                </div>
            </div>
            <div id="open-login" className="modal-window">
                <div>
                    <a href="#" title="Close" className="modal-close">Close</a>
                    <h2>Login</h2>
                    <form id="loginForm">
                        <input type="text" id="usernameLogin" name="username" required
                            minLength="4" maxLength="8" size="50" placeholder="Username"></input>
                        <input type="password" id="passwordLogin" name="password" required
                            minLength="8" size="50" placeholder="Password"></input>
                        <input type="submit" value="Login"></input>
                    </form>
                </div>
            </div>
        </>
    )
};
