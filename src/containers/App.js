import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import DrawingAndInfoSectionWrapper from '../components/DrawingAndInfoSection/DrawingAndInfoSection';
import PhraseToGuessSection from '../components/PhraseToGuessSection/PhraseToGuessSection';
import LettersToClickSection from '../components/LettersToClickSection/LettersToClickSection';


const API = ' https://hangman-239ba.firebaseio.com/.json';

class App extends Component {

  state = {
    phraseToGuess: [],                                //phrase comes from API in componentDidMount
    lettersToClick: [                                 //letters in layout, possible to click or press (keyboard)
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
    timeToNextLetter: 5,                              //if time === 0 => random letter is clicked 
    mistakesLeft: 6,                                  // if we select wrong letter => mistakes--. If mistakes ===0 => game is over
  }

  startTimeToNextLetterHandler = () => {
    this.ID = setInterval(() => {
      this.setState({ timeToNextLetter: this.state.timeToNextLetter - 1 })
    }, 1000);
  }

  isSelectedLetterInPhraseHandler = (selectedLetterObj) => {
    const { phraseToGuess } = this.state
    const letterInPhrase = phraseToGuess.find(letterObj => letterObj.letter === selectedLetterObj.letter.toUpperCase())
    const selectedLetter = selectedLetterObj.letter.toUpperCase()
    selectedLetterObj.isClicked = true;
    if (letterInPhrase) {
      selectedLetterObj.isHit = true;
      phraseToGuess.forEach(letterObj => {
        if (letterObj.letter === selectedLetter) {
          letterObj.isLetterShowed = true;
        }
      })
    }
    else {
      this.setState({ mistakesLeft: this.state.mistakesLeft - 1 })
    }
  }

  clickOrPressKeyLetterHandler = (e, key) => {
    const { lettersToClick, phraseToGuess, } = this.state
    const clickedLetter = e.target.textContent
    let pressedOrClickedLetter;

    if (key) {
      pressedOrClickedLetter = key.toUpperCase()
    }
    else if (clickedLetter) {
      pressedOrClickedLetter = e.target.textContent;
    }

    const index = lettersToClick.findIndex(letter => letter.letter.toUpperCase() === pressedOrClickedLetter);

    if (index === -1 || lettersToClick[index].isClicked) return

    const selectedLetterObj = lettersToClick[index]
    this.isSelectedLetterInPhraseHandler(selectedLetterObj)
    clearInterval(this.ID)
    this.setState({ phraseToGuess, lettersToClick, timeToNextLetter: 5 });
    this.startTimeToNextLetterHandler();
  }

  //autoclick letter
  componentDidUpdate(prevProps, prevState) {

    if (prevState.timeToNextLetter !== this.state.timeToNextLetter) {
      const { phraseToGuess } = this.state
      const lettersToClick = prevState.lettersToClick;
      const filteredLetters = lettersToClick.filter(letterToClick => !letterToClick.isClicked);
      const random = Math.floor(Math.random() * filteredLetters.length);
      //this is random clicked letter
      const autoClicked = filteredLetters[random];

      if (this.state.timeToNextLetter === 0) {
        this.isSelectedLetterInPhraseHandler(autoClicked);
        this.setState({ phraseToGuess, lettersToClick });
        clearInterval(this.ID);
        setTimeout(() => {
          this.setState({ timeToNextLetter: 5 })
          this.startTimeToNextLetterHandler();
        }, 1000)
      }

    }

  }

  componentDidMount() {

    // this.startTimeToNextLetterHandler()
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
    const {
      phraseToGuess,
      lettersToClick,
      timeToNextLetter,
      mistakesLeft
    } = this.state

    return (

      <Layout>
        <DrawingAndInfoSectionWrapper
          mistakesLeft={mistakesLeft}
          timeToNextLetter={timeToNextLetter}
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
