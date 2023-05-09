import React from "react";
import logo from '../images/github-icon.svg'

const Footer = (props) => {
    return (
        <div id="footer">
            <p>Background by <a href="https://www.peakpx.com/en/hd-wallpaper-desktop-egele/download/1920x967">www.peakpx.com</a></p>
            <a href="https://github.com/LuvKatie/memory-card"><img src={logo} id="github-icon" alt="Icon of Github logo"></img></a>
        </div>
    )
}

export default Footer;