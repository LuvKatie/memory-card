import React, { useState } from "react";
import Cards from "./components/Cards";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import './styles/App.css'
import './styles/CardContainer.css'
import './styles/Cards.css'
import './styles/NavBar.css'
import './styles/Footer.css'
import './styles/ResultMessage.css'

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

  const [score, setScore] = useState(9);
  
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
    const header = document.querySelector('header');

    const playAgain = document.getElementById('play-again');
    const resultContainer = document.getElementById('resultMessage')
    const resultMessage = document.getElementById('result')

    const victoryGif = 'https://64.media.tumblr.com/973b2c5280b4b5179bb09bc28c9b97d5/29c64f10a3375b77-94/s640x960/352b9bcc1cb235c175790eaa6057abc0ef13ffeb.gifv';
    const defeatGif = 'https://64.media.tumblr.com/ebf2748f2064107a0d9dcec26ad4fe9a/9e1fd39c604fff15-5f/s640x960/000eac0c83086730fb579a08074ffb6513c96f80.gifv';;
    
    if (result === 'correct') {
      bgImg.setAttribute('style', `background-image: url(${victoryGif})`)
      resultMessage.textContent = 'Victory'
      resultMessage.classList.add('victory')
    } else if (result === 'incorrect') {
      bgImg.setAttribute('style', `background-image: url(${defeatGif})`)
      resultMessage.classList.add('defeat')
      resultMessage.textContent = 'Defeat'
    }

    setTimeout(() => {
      playAgain.classList.add('reveal-results');
      resultContainer.classList.add('reveal-results');
      resultMessage.classList.add('reveal-results');
    }, 3000)

    cardContainer.classList.add('hide-ui');
    footer.classList.add('hide-ui');
    header.classList.add('hide-ui');

    leftBG.classList.add('left-reveal');
    rightBG.classList.add('right-reveal');
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
        // Display losing screen
        setTimeout(() => {
          resultScreen(result);
        }, 1200)
      } else {
        overlay.classList.toggle('hideToggle');
        overlay.classList.add('not-selected');
      }

      // Display winning screen
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
      }, 1350)
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
      resetGame();
    }
  }

  function resetGame() {
    const cardContainer = document.getElementById('card-container');
    const footer = document.getElementById('footer');
    const header = document.querySelector('header');

    const playAgain = document.getElementById('play-again');
    const resultContainer = document.getElementById('resultMessage')
    const resultMessage = document.getElementById('result')

    const leftBG = document.getElementById('left-bg');
    const rightBG = document.getElementById('right-bg');
    const bgImg = document.getElementById('bg-img');

    leftBG.classList.remove('left-reveal');
    rightBG.classList.remove('right-reveal');
    leftBG.classList.add('left-hide');
    rightBG.classList.add('right-hide');
    
    header.classList.remove('hide-ui')
    cardContainer.classList.remove('hide-ui')
    footer.classList.remove('hide-ui')

    playAgain.classList.remove('reveal-results')
    resultContainer.classList.remove('reveal-results')
    resultMessage.classList = '';
    
    header.classList.add('reveal-component')
    cardContainer.classList.add('reveal-component')
    footer.classList.add('reveal-component')

    setTimeout(() => {
      leftBG.classList.remove('left-hide');
      rightBG.classList.remove('right-hide');
      header.classList.remove('reveal-component')
      cardContainer.classList.remove('reveal-component')
      footer.classList.remove('reveal-component')
      bgImg.setAttribute('style', `background-image: ''`)
    }, 2000)

    setCards(initialCards)
    setScore(0)
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
      <div id="resultMessage">
        <span id="result"></span>
        <button id="play-again" onClick={resetGame}>Play Again</button>
      </div>
    </>
  )
}

export default App;