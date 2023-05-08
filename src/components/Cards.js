import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

const Cards = (props) => {

    function createCards() {
        const cardItems = [];

        for (let img in props.images) {
            cardItems.push(
            <div id="card" key={`${uniqid()}`}>

            <img className={img} 
            alt="Character Card of Valorant Agent" 
            src={props.images[img]}
            onClick={() => {props.clickEvent(img)}}>
            </img>

            <div id="overlay" className={`${img} hideToggle`}></div>
            </div>)
        }
        
        return props.randomize(cardItems);
    }

    return (
        <div id="card-container">
            {createCards()}
        </div>
    )
}

export default Cards;