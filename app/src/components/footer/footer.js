import React from 'react';
import './footer.css';

export default function Footer() {
   return (
   <footer>
        <div id="footerText">
            <a className="email" id="footerLink" href="mailto:jack.jackryan@protonmail.com?subject=Question about Audio Whisper" target="_blank" rel="noopener noreferrer">
            Contact Us
            </a>
        </div>
        <div className="separator" id="footerText"> | </div>
        <div id="footerText">
            <a className="footerGithub" id="footerLink" href="https://github.com/harryby1149/audio-whisper" target="_blank" rel="noopener noreferrer">Harry & Jack 2020</a>
        </div>
    </footer>
   )
};

