import React, { Component } from 'react';
import PhraseToGuessSection from '../components/PhraseToGuessSection/PhraseToGuessSection';
import LettersToClickSection from '../components/LettersToClickSection/LettersToClickSection'
import Layout from '../components/Layout/Layout'
import DrawingAndInfoSectionWrapper from '../components/DrawingAndInfoSection/DrawingAndInfoSection';
import axios from 'axios'

const API = ' https://hangman-239ba.firebaseio.com/.json';

class App extends Component {

  state = {

    phraseToGuess: [],
    lettersToClick: [
      { letter: 'a', isClicked: false, isHit: false },
      { letter: 'b', isClicked: false, isHit: false },
      { letter: 'c', isClicked: false, isHit: false },
      { letter: 'd', isClicked: false, isHit: false },
      { letter: 'e', isClicked: false, isHit: false },
      { letter: 'f', isClicked: false, isHit: false },
      { letter: 'g', isClicked: false, isHit: false },
      { letter: 'h', isClicked: false, isHit: false },
      { letter: 'i', isClicked: false, isHit: false },
      { letter: 'j', isClicked: false, isHit: false },
      { letter: 'k', isClicked: false, isHit: false },
      { letter: 'l', isClicked: false, isHit: false },
      { letter: 'm', isClicked: false, isHit: false },
      { letter: 'n', isClicked: false, isHit: false },
      { letter: 'o', isClicked: false, isHit: false },
      { letter: 'p', isClicked: false, isHit: false },
      { letter: 'q', isClicked: false, isHit: false },
      { letter: 'r', isClicked: false, isHit: false },
      { letter: 's', isClicked: false, isHit: false },
      { letter: 't', isClicked: false, isHit: false },
      { letter: 'u', isClicked: false, isHit: false },
      { letter: 'v', isClicked: false, isHit: false },
      { letter: 'w', isClicked: false, isHit: false },
      { letter: 'y', isClicked: false, isHit: false },
      { letter: 'x', isClicked: false, isHit: false },
      { letter: 'z', isClicked: false, isHit: false },
    ],
    mistakesLeft: 0,
    time: 0,
    timeToNextLetter: 5,
    lastClickedLetter: 0
  }


  isLetterHitHandler = () => {

  }

  clickOrPressKeyLetterHandler = (e, key) => {
    const { lettersToClick, phraseToGuess, } = this.state
    const clickedLetter = e.target.textContent
    const pressedLetter = key
    const index = lettersToClick.findIndex(letterToClick => {
      let index;
      if (key) {
        index = letterToClick.letter.toUpperCase() === pressedLetter.toUpperCase()
      }
      else if (clickedLetter) {
        index = letterToClick.letter.toUpperCase() === clickedLetter.toUpperCase();
      }
      return index;

    });
    if (index === -1 || lettersToClick[index].isClicked) return

    lettersToClick[index].isClicked = true
    phraseToGuess.map(letterObj => {
      if (letterObj.letter === clickedLetter || (pressedLetter && pressedLetter.toUpperCase() === letterObj.letter)) {
        letterObj.isLetterShowed = true;
        lettersToClick[index].isHit = true;
      }
      return letterObj;
    }
    )
    this.setState({ phraseToGuess, lettersToClick, });
    clearInterval(this.ID)
    this.start()


  }

  start = () => {
    let time = 5
    this.ID = setInterval(() => {
      this.setState({ timeToNextLetter: time-- })
    }, 1000);
  }


  componentDidUpdate(prevProps, prevState) {

    if (prevState.timeToNextLetter !== this.state.timeToNextLetter) {
      const { phraseToGuess } = this.state
      const lettersToClick = prevState.lettersToClick;
      const filteredLetters = lettersToClick.filter(letterToClick => !letterToClick.isClicked);
      const random = Math.floor(Math.random() * filteredLetters.length);
      const autoClicked = filteredLetters[random];
      if (this.state.timeToNextLetter === 0) {
        clearInterval(this.ID)
        autoClicked.isClicked = true;
        phraseToGuess.map(letterObj => {
          if (letterObj.letter === autoClicked.letter.toUpperCase()) {
            autoClicked.isHit = true;
            letterObj.isLetterShowed = true
          }
          return letterObj
        })
        this.setState({ phraseToGuess, lettersToClick })
        this.start()

      }

    }
  }

  componentWillMount() {
    this.start()
  }

  componentDidMount() {

    document.addEventListener('keypress', (e) => this.clickOrPressKeyLetterHandler(e, e.key));
    const fetchedPhrase = 'Great Wall of China';
    const { phraseToGuess } = this.state;
    [...fetchedPhrase].map((phrase, index) => {
      return phraseToGuess.push({
        letter: phrase.toUpperCase(),
        id: index,
        isLetterShowed: false,
      })
    })
    phraseToGuess.filter(letterObj => (
      letterObj.letter === " " || letterObj.letter === "," || letterObj.letter === "-" ? letterObj.isLetterShowed = true : letterObj.isLetterShowed = false)
    )
    this.setState({ phraseToGuess })
  }

  componentWillUnmount() {

    document.removeEventListener('keypress', this.clickOrPressKeyLetterHandler)
  }

  render() {

    const { phraseToGuess, lettersToClick, timeToNextLetter, mistakesLeft } = this.state
    return (
      <Layout>
        <DrawingAndInfoSectionWrapper
          timeToNextLetter={timeToNextLetter}
          mistakesLeft={mistakesLeft}
        />
        <PhraseToGuessSection

          phraseToGuess={phraseToGuess}
        />
        <LettersToClickSection
          lettersToClick={lettersToClick}
          clickLetter={this.clickOrPressKeyLetterHandler}
        />
      </Layout>
    );
  }
}

export default App;
