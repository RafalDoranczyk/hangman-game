import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import StartPage from '../components/StartPage/StartPage';
import InGamePage from '../components/InGamePage/InGamePage';
import EndGamePage from '../components/EndGamePage/EndGamePage';
import axios from 'axios';

const TIME_TO_NEXT_LETTER = 7;
let allPhrasesFromApi = {};
const API = 'https://hangman-239ba.firebaseio.com/.json'

class App extends Component {

  state = {
    phraseToGuess: [],          //phrase comes from API in componentDidMount
    phraseInfo: {
      category: '',
      hint: '',
      titbit: '',
    },
    lettersToClick: [           //letters in layout, possible to click or press (keyboard)
      { letter: 'q', isClicked: false, isHit: false },
      { letter: 'w', isClicked: false, isHit: false },
      { letter: 'e', isClicked: false, isHit: false },
      { letter: 'r', isClicked: false, isHit: false },
      { letter: 't', isClicked: false, isHit: false },
      { letter: 'y', isClicked: false, isHit: false },
      { letter: 'u', isClicked: false, isHit: false },
      { letter: 'i', isClicked: false, isHit: false },
      { letter: 'o', isClicked: false, isHit: false },
      { letter: 'p', isClicked: false, isHit: false },
      { letter: 'a', isClicked: false, isHit: false },
      { letter: 's', isClicked: false, isHit: false },
      { letter: 'd', isClicked: false, isHit: false },
      { letter: 'f', isClicked: false, isHit: false },
      { letter: 'g', isClicked: false, isHit: false },
      { letter: 'h', isClicked: false, isHit: false },
      { letter: 'j', isClicked: false, isHit: false },
      { letter: 'k', isClicked: false, isHit: false },
      { letter: 'l', isClicked: false, isHit: false },
      { letter: 'z', isClicked: false, isHit: false },
      { letter: 'x', isClicked: false, isHit: false },
      { letter: 'c', isClicked: false, isHit: false },
      { letter: 'v', isClicked: false, isHit: false },
      { letter: 'b', isClicked: false, isHit: false },
      { letter: 'n', isClicked: false, isHit: false },
      { letter: 'm', isClicked: false, isHit: false },
    ],

    timeToNextLetter: 7,        //if time === 0 => random letter is clicked 
    mistakesLeft: 7,            // if we select wrong letter => mistakes--. If mistakes ===0 => game is over
    isGameInProgress: false,
    isGameEnded: false,
    isGameWon: false,
  }

  startGameHandler = () => {
    this.giveRandomPhraseHandler(allPhrasesFromApi)
    if (this.state.isGameEnded) {
      this.setState({
        isGameWon: false,
        isGameEnded: false,
        isGameInProgress: true,
        mistakesLeft: 7,
        timeToNextLetter: 7,
        lettersToClick: [
          { letter: 'q', isClicked: false, isHit: false },
          { letter: 'w', isClicked: false, isHit: false },
          { letter: 'e', isClicked: false, isHit: false },
          { letter: 'r', isClicked: false, isHit: false },
          { letter: 't', isClicked: false, isHit: false },
          { letter: 'y', isClicked: false, isHit: false },
          { letter: 'u', isClicked: false, isHit: false },
          { letter: 'i', isClicked: false, isHit: false },
          { letter: 'o', isClicked: false, isHit: false },
          { letter: 'p', isClicked: false, isHit: false },
          { letter: 'a', isClicked: false, isHit: false },
          { letter: 's', isClicked: false, isHit: false },
          { letter: 'd', isClicked: false, isHit: false },
          { letter: 'f', isClicked: false, isHit: false },
          { letter: 'g', isClicked: false, isHit: false },
          { letter: 'h', isClicked: false, isHit: false },
          { letter: 'j', isClicked: false, isHit: false },
          { letter: 'k', isClicked: false, isHit: false },
          { letter: 'l', isClicked: false, isHit: false },
          { letter: 'z', isClicked: false, isHit: false },
          { letter: 'x', isClicked: false, isHit: false },
          { letter: 'c', isClicked: false, isHit: false },
          { letter: 'v', isClicked: false, isHit: false },
          { letter: 'b', isClicked: false, isHit: false },
          { letter: 'n', isClicked: false, isHit: false },
          { letter: 'm', isClicked: false, isHit: false },
        ]
      })

    } else if (!this.state.isGameEnded) {
      this.setState({ isGameInProgress: true, isGameEnded: false });
    }

  };

  startTimeToNextLetterHandler = () => {
    if (this.state.isGameEnded) return;
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
    if (!this.state.isGameInProgress) return;
    //Do only if game is not ended
    if (this.state.isGameEnded || this.state.timeToNextLetter === 0) return;

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
    this.startTimeToNextLetterHandler();
    this.setState({ phraseToGuess, lettersToClick, timeToNextLetter: TIME_TO_NEXT_LETTER });
  }


  giveRandomPhraseHandler = (data) => {
    //RANDOM CATEGORY 
    const randomNumberForCategory = Math.floor(Math.random() * Object.keys(data).length);
    const randomCategoryObject = Object.entries(data)[randomNumberForCategory];
    const category = randomCategoryObject[0] //position [0] is always category name
    //RANDOM PHRASE IN THAT CATEGORY
    const randomNumberForPhrase = Math.floor(Math.random() * Object.keys(randomCategoryObject[1]).length);
    const randomPhraseObject = Object.entries(randomCategoryObject[1])[randomNumberForPhrase];
    const phrase = randomPhraseObject[0];   //position [0] is always phrase name
    //HINT AND TITBIT IN THAT PHRASE
    const hint = randomPhraseObject[1].hint; //we can easy do random hint or titbit if possible
    const titbit = randomPhraseObject[1].titbit;


    const phraseToGuess = [];
    [...phrase].map((phrase, index) => {
      return phraseToGuess.push({
        letter: phrase.toUpperCase(),
        id: index,
        isLetterShowed: false,
      })
    })
    phraseToGuess.filter(letterObj => (
      letterObj.letter === " " || letterObj.letter === "," || letterObj.letter === "-" ? letterObj.isLetterShowed = true : letterObj.isLetterShowed = false)
    )

    this.setState({
      phraseToGuess,
      phraseInfo: {
        category,
        hint,
        titbit,
      }
    })

  }


  fetchDataHandler = () => {

    axios.get(API)
      .then(response => response.statusText ? response : Error)
      .then(response => {
        allPhrasesFromApi = response.data;
        this.giveRandomPhraseHandler(response.data)
      });
  }


  componentDidUpdate(prevProps, prevState) {
    //END GAME HANDLER
    if (this.state.isGameEnded) return;
    const lettersToClick = prevState.lettersToClick;
    const allLettersAreShowed = this.state.phraseToGuess.filter(phrase => !phrase.isLetterShowed).length === 0;
    const noMistakesLeft = this.state.mistakesLeft === 0 && true;
    if (allLettersAreShowed) this.setState({ isGameWon: true });
    if (allLettersAreShowed || noMistakesLeft) {
      clearInterval(this.ID)
      clearTimeout(this.TimeoutID)
      this.setState({
        isGameEnded: true,
        isGameInProgress: false,
      })
    };
    //END GAME HANDLER

    //AUTO-CLICK LETTER HANDLER
    if (prevState.timeToNextLetter !== this.state.timeToNextLetter) {
      const { phraseToGuess } = this.state
      if (phraseToGuess.filter(phrase => !phrase.isLetterShowed).length === 0) return; // if the phrase is guessed
      if (lettersToClick.filter(letterObj => !letterObj.isClicked).length === 0) return; // if all letters are clicked

      const filteredLetters = lettersToClick.filter(letterToClick => !letterToClick.isClicked);
      const random = Math.floor(Math.random() * filteredLetters.length);
      const autoClicked = filteredLetters[random];   //this is random clicked letter (OBJECT)
      if (this.state.timeToNextLetter === 0) {
        this.isSelectedLetterInPhraseHandler(autoClicked);
        this.setState({ phraseToGuess, lettersToClick });
        clearInterval(this.ID);
        this.TimeoutID = setTimeout(() => {
          this.setState({ timeToNextLetter: TIME_TO_NEXT_LETTER })
          this.startTimeToNextLetterHandler();
        }, 1000);
      };
    };
  };



  componentDidMount() {
    document.addEventListener('keydown', (e) => this.clickOrPressKeyLetterHandler(e, e.key));
    this.fetchDataHandler();
  }



  componentWillUnmount() {

    document.removeEventListener('keydown', this.clickOrPressKeyLetterHandler())
  }

  render() {
    console.log(this.state.isGameEnded);
    const {
      phraseToGuess,
      lettersToClick,
      timeToNextLetter,
      mistakesLeft,
      isGameInProgress,
      isGameEnded,
      phraseInfo,
      isGameWon,
    } = this.state

    return (

      <Layout
        isGameInProgress={isGameInProgress}>
        <StartPage
          phraseToGuess={phraseToGuess}
          isGameEnded={isGameEnded}
          isGameInProgress={isGameInProgress}
          startGame={this.startGameHandler} />
        <InGamePage
          isGameEnded={isGameEnded}
          isGameInProgress={isGameInProgress}
          phraseInfo={phraseInfo}
          phraseToGuess={phraseToGuess}
          lettersToClick={lettersToClick}
          timeToNextLetter={timeToNextLetter}
          mistakesLeft={mistakesLeft}
          clickLetter={this.clickOrPressKeyLetterHandler}
          isGameWon={isGameWon}
        />
        <EndGamePage
          titbit={phraseInfo.titbit}
          startGame={this.startGameHandler}
          phraseToGuess={phraseToGuess}
          isGameWon={isGameWon}
          isGameEnded={isGameEnded} />
      </Layout>
    );
  }
}

export default App;
