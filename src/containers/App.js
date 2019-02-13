import React, { Component } from 'react';
import PhraseToGuess from '../components/PhraseToGuess/PhraseToGuess';
import LettersToClick from '../components/LettersToClick/LettersToClick'
import Layout from '../components/Layout/Layout'


class App extends Component {

  state = {
    playerLetter: '',
    phraseToGuess: [],
    lettersToClick: [
      { letter: 'a', isClicked: false },
      { letter: 'b', isClicked: false },
      { letter: 'c', isClicked: false },
      { letter: 'd', isClicked: false },
      { letter: 'e', isClicked: false },
      { letter: 'f', isClicked: false },
      { letter: 'g', isClicked: false },
      { letter: 'h', isClicked: false },
      { letter: 'i', isClicked: false },
      { letter: 'j', isClicked: false },
      { letter: 'k', isClicked: false },
      { letter: 'l', isClicked: false },
      { letter: 'm', isClicked: false },
      { letter: 'n', isClicked: false },
      { letter: 'o', isClicked: false },
      { letter: 'p', isClicked: false },
      { letter: 'q', isClicked: false },
      { letter: 'r', isClicked: false },
      { letter: 's', isClicked: false },
      { letter: 't', isClicked: false },
      { letter: 'u', isClicked: false },
      { letter: 'v', isClicked: false },
      { letter: 'w', isClicked: false },
      { letter: 'y', isClicked: false },
      { letter: 'z', isClicked: false },
    ],
    mistakes: 0,
  }



  // THESE TWO FUNCTION CAN BE ONE

  pressLetterHandler = (playerLetter) => {
    const { phraseToGuess, lettersToClick } = this.state
    const index = lettersToClick.findIndex(letterToClick => (
      letterToClick.letter.toUpperCase() === playerLetter.toUpperCase()));

    if (index !== -1) {
      if (lettersToClick[index].isClicked) return

      this.setState({ playerLetter })
      lettersToClick[index].isClicked = true
      phraseToGuess.map(phrase => phrase.name === playerLetter ? phrase.isShowed = true : false
      );
      this.setState({ phraseToGuess, lettersToClick });
    } else return;
  }

  clickLetterHandler = (e) => {
    const { lettersToClick, phraseToGuess, } = this.state
    const target = e.target.textContent;

    const index = lettersToClick.findIndex(letterToClick => (
      letterToClick.letter.toUpperCase() === target.toUpperCase()
    ));
    if (!lettersToClick[index].isClicked) {
      this.setState({ playerLetter: target })
    }
    lettersToClick[index].isClicked = true
    phraseToGuess.map(phrase => phrase.name === target ? phrase.isShowed = true : false
    );

    console.log(lettersToClick[index]);
    this.setState({ phraseToGuess, lettersToClick });

  }



  componentWillMount() {
    document.addEventListener("keypress", (e) => this.pressLetterHandler(e.key.toUpperCase()))

  }

  componentDidMount() {
    const fetchedPhrase = 'aleksander';
    const { phraseToGuess } = this.state;
    [...fetchedPhrase].map((phrase, index) => {
      return phraseToGuess.push({
        name: phrase.toUpperCase(),
        id: index,
        isShowed: false,
      })
    })
    this.setState({ phraseToGuess })
  }


  render() {

    const { playerLetter, phraseToGuess, lettersToClick } = this.state
    return (
      <Layout>
        <PhraseToGuess
          phraseToGuess={phraseToGuess}
          playerLetter={playerLetter} />
        <LettersToClick
          lettersToClick={lettersToClick}
          clickLetter={this.clickLetterHandler}
        />
      </Layout>
    );
  }
}

export default App;
