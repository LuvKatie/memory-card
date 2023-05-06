import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const CardContainer = (props) => {

    return (
        <div id="card-container">
            <Cards images={props.images}/>
        </div>
    )
}

export default CardContainer;