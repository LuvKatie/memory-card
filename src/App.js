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
      // setTimeout(() => {
      //   handleCardState(card, 'incorrect')
      // }, 1200)
    }
  }

  function resultScreen (result) {
    const leftBG = document.getElementById('left-bg');
    const rightBG = document.getElementById('right-bg');
    const bgImg = document.getElementById('bg-img');
    const cardContainer = document.getElementById('card-container');
    const footer = document.getElementById('footer');

    const victoryGif = 'https://64.media.tumblr.com/973b2c5280b4b5179bb09bc28c9b97d5/29c64f10a3375b77-94/s640x960/352b9bcc1cb235c175790eaa6057abc0ef13ffeb.gifv';
    const defeatGif = 'https://64.media.tumblr.com/ebf2748f2064107a0d9dcec26ad4fe9a/9e1fd39c604fff15-5f/s640x960/000eac0c83086730fb579a08074ffb6513c96f80.gifv';;
    
    if (result === 'correct') {
      bgImg.setAttribute('style', `background-image: url(${victoryGif})`)
    } else if (result === 'incorrect') {
      bgImg.setAttribute('style', `background-image: url(${defeatGif})`)
    }

    cardContainer.classList.add('hide-container');
    footer.classList.add('hide-footer');
    leftBG.classList.add('left-hover');
    rightBG.classList.add('right-hover');
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
        setTimeout(() => {
          resultScreen(result);
        }, 1200)
      } else {
        overlay.classList.toggle('hideToggle');
        overlay.classList.add('not-selected');
      }

      if (score === 9) {
        setTimeout(() => {
          resultScreen(result);
        }, 1200)
      }
    })
  }

  function handleCardState(card, result) {
    if (score === 9) {
      setTimeout(() => {
        setCards(allCards => ({
          ...allCards,
          [card]: {
            clicked: true
          }
        }))
  
        setScore(score + 1)
      }, 1500)
      return;
    }

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

  return (
    <>
    <div id="bg-img">
      <div id="left-bg"></div>
      <div id="right-bg"></div>
    </div>
      <NavBar score={score}/>
      <Cards images={characterImages} randomize={randomizeCards} clickEvent={handleClick}/>
      <Footer />
    </>
  )
}

export default App;