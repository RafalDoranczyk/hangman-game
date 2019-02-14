import React, { Component } from 'react';
import PhraseToGuess from '../components/PhraseToGuess/PhraseToGuess';
import LettersToClick from '../components/LettersToClick/LettersToClick'
import Layout from '../components/Layout/Layout'
import HangmanDrawing from '../components/HangmanDrawing/HangmanDrawing'
import InfoAndHint from '../components/InfoAndHint/InfoAndHint';

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
    mistakes: 0,
  }



  // THESE TWO FUNCTION CAN BE ONE

  pressLetterHandler = (playerLetter) => {
    const { lettersToClick, phraseToGuess } = this.state;
    const index = lettersToClick.findIndex(letterToClick => (
      letterToClick.letter.toUpperCase() === playerLetter)
    );
    if (lettersToClick[index].isClicked) return
    if (index !== -1) {
      lettersToClick[index].isClicked = true

      phraseToGuess.map(phrase => {
        if (phrase.name === playerLetter) {
          phrase.isShowed = true;
          lettersToClick[index].isHit = true;
        }
      }
      )
      this.setState({ phraseToGuess, lettersToClick });
    } else return;
  }

  clickLetterHandler = (e) => {
    const { lettersToClick, phraseToGuess, } = this.state
    const target = e.target.textContent;

    const index = lettersToClick.findIndex(letterToClick => (
      letterToClick.letter.toUpperCase() === target.toUpperCase()
    ));
    lettersToClick[index].isClicked = true
    phraseToGuess.map(phrase => {
      if (phrase.name === target) {
        phrase.isShowed = true;
        lettersToClick[index].isHit = true;
      }
    }
    )

    this.setState({ phraseToGuess, lettersToClick });

  }



  componentWillMount() {
    document.addEventListener("keypress", (e) => this.pressLetterHandler(e.key.toUpperCase()))

  }

  componentDidMount() {
    const fetchedPhrase = 'Sahara Desert';
    const { phraseToGuess } = this.state;
    [...fetchedPhrase].map((phrase, index) => {
      return phraseToGuess.push({
        name: phrase.toUpperCase(),
        id: index,
        isShowed: false,
      })
    })
    phraseToGuess.filter(phrase => (
      phrase.name === " " || phrase.name === "," || phrase.name === "-" ? phrase.isShowed = true : phrase.isShowed = false)
    )
    this.setState({ phraseToGuess })
  }


  render() {
    console.log(this.state.lettersToClick);
    const { phraseToGuess, lettersToClick } = this.state
    return (
      <Layout>
        <InfoAndHint />
        <HangmanDrawing />
        <PhraseToGuess
          phraseToGuess={phraseToGuess}
        />
        <LettersToClick
          lettersToClick={lettersToClick}
          clickLetter={this.clickLetterHandler}
        />
      </Layout>
    );
  }
}

export default App;
