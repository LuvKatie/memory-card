import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

const Cards = (props) => {

    function createCards() {
        const cardItems = [];

        for (let img in props.images) {
            cardItems.push(<img className={`card ${img}`} key={`${uniqid()}`} alt="Character Card of Valorant Agent" src={props.images[img]}></img>)
        }
        
        return randomizeCards(cardItems);
    }

    function randomizeCards(cards) {
        for (let i = 0; i < 27; i++) {
            let num1 = Math.floor(Math.random() * cards.length);
            let num2 = Math.floor(Math.random() * cards.length);

            if (num1 === num2) {
                continue;
            }

            let card1 = cards[num1];
            let card2 = cards[num2];

            cards[num2] = card1;
            cards[num1] = card2;
        }

        return cards;
    }

    return (
        createCards()
    )
}

export default Cards;