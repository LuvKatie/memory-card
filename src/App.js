import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import './styles/App.css'
import './styles/CardContainer.css'
import './styles/Cards.css'
import './styles/NavBar.css'
import './styles/Footer.css'

const App = () => {
 
  const initialCards = {
    sage: {
      clicked: false
    },
    reyna: {
      clicked: false
    },
    viper: {
      clicked: false
    },
    neon: {
      clicked: false
    },
    kj: {
      clicked: false
    },
    fade: {
      clicked: false
    },
    astra: {
      clicked: false
    },
    raze: {
      clicked: false
    },
    jett: {
      clicked: false
    },
    skye: {
      clicked: false
    },
  };

  const [cards, setCards] = useState(initialCards)

  const [score, setScore] = useState(0);
  
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

  function handleClick(card) {
    if (cards[card].clicked === false) {
      handleOverlays(card, 'correct');
      setTimeout(() => {
        handleCardState(card, 'correct')
      }, 1200)
    } else {
      handleOverlays(card, 'incorrect');
      setTimeout(() => {
        handleCardState(card, 'incorrect')
      }, 1200)
    }
  }

  function handleOverlays(card, result) {
    const getOverlays = document.querySelectorAll("#overlay");

    getOverlays.forEach(overlay => {
      if (overlay.className.includes(`${card}`) && result === 'correct') {
        overlay.classList.toggle('hideToggle');
        overlay.classList.add('correct');
      } else if (overlay.className.includes(`${card}`) && result === 'incorrect') {
        overlay.classList.toggle('hideToggle');
        overlay.classList.add('incorrect');
      } else {
        overlay.classList.toggle('hideToggle');
        overlay.classList.add('not-selected');
      }
    })
  }

  function handleCardState(card, result) {
    if (result === 'correct') {
      setCards(allCards => ({
        ...allCards,
        [card]: {
          clicked: true
        }
      }))

      setScore(score + 1)
    } else {
      setCards(initialCards)
      setScore(0)
    }
  }

  useEffect(() => {
    console.log('useEffect')
    console.log(cards)
  }, [cards])

  return (
    <>
      <NavBar score={score}/>
      <Cards images={characterImages} randomize={randomizeCards} clickEvent={handleClick}/>
      <Footer />
    </>
  )
}

export default App;