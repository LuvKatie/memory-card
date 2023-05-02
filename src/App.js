import React, { useState, useEffect } from "react";
import CardContainer from "./components/CardContainer";
import NavBar from "./components/Navbar";
import './styles/App.css'
import './styles/CardContainer.css'
import './styles/Cards.css'
import './styles/NavBar.css'

const App = () => {


  return (
    <>
      <NavBar />
      <CardContainer />
    </>
  )
}

export default App;
