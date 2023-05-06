import React, { useState, useEffect } from "react";
import CardContainer from "./components/CardContainer";
import NavBar from "./components/Navbar";
import './styles/App.css'
import './styles/CardContainer.css'
import './styles/Cards.css'
import './styles/NavBar.css'

const App = () => {
  
  const characterImages = {
    sage: require('./images/sage.jpg'),
    reyna: require('./images/reyna.jpg'),
    fade: require('./images/fade.jpg'),
    jett: require('./images/jett.jpg'),
    neon: require('./images/neon.jpg'),
    kj: require('./images/kj.jpg'),
    raze: require('./images/raze.webp'),
    astra: require('./images/astra.webp'),
    viper: require('./images/viper.jpg'),
    skye: require('./images/skye.webp')
  }


  return (
    <>
      <NavBar />
      <CardContainer images={characterImages}/>
    </>
  )
}

export default App;
