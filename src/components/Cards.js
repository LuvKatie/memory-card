import React, { useState, useEffect } from "react";

const Cards = () => {

    function createCards(n) {
        const cardItems = [];

        for (let i = 0; i < n; i++) {
            cardItems.push(<div className={"card"} key={`${i}`}></div>)
        }

        return cardItems;
    }

    return (
        createCards(21)
    )
}

export default Cards;