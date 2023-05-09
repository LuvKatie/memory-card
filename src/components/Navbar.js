import React from "react";

const NavBar = (props) => {
    
    return (
        <header>
            <p id="title">Valorant Memory Card</p>
            <p id="score">Score: {props.score} / 10</p>
        </header>
    )
}

export default NavBar;