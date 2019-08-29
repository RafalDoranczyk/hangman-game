import React, { Component } from "react";
import Layout from "../Layout/Layout";
import StartPage from "../components/StartPage/StartPage";
import InGamePage from "../components/InGamePage/InGamePage";
import EndGamePage from "../components/EndGamePage/EndGamePage";
import { withFirebase } from "../hoc/Firebase";
const TIME_TO_NEXT_LETTER = 5;
const INITIAL_LETTERS_TO_CLICK = [
  { letter: "Q", isClicked: false, isHit: false },
  { letter: "W", isClicked: false, isHit: false },
  { letter: "E", isClicked: false, isHit: false },
  { letter: "R", isClicked: false, isHit: false },
  { letter: "T", isClicked: false, isHit: false },
  { letter: "Y", isClicked: false, isHit: false },
  { letter: "U", isClicked: false, isHit: false },
  { letter: "I", isClicked: false, isHit: false },
  { letter: "O", isClicked: false, isHit: false },
  { letter: "P", isClicked: false, isHit: false },
  { letter: "A", isClicked: false, isHit: false },
  { letter: "S", isClicked: false, isHit: false },
  { letter: "D", isClicked: false, isHit: false },
  { letter: "F", isClicked: false, isHit: false },
  { letter: "G", isClicked: false, isHit: false },
  { letter: "H", isClicked: false, isHit: false },
  { letter: "J", isClicked: false, isHit: false },
  { letter: "K", isClicked: false, isHit: false },
  { letter: "L", isClicked: false, isHit: false },
  { letter: "Z", isClicked: false, isHit: false },
  { letter: "X", isClicked: false, isHit: false },
  { letter: "C", isClicked: false, isHit: false },
  { letter: "V", isClicked: false, isHit: false },
  { letter: "B", isClicked: false, isHit: false },
  { letter: "N", isClicked: false, isHit: false },
  { letter: "M", isClicked: false, isHit: false }
];

const initialState = {
  allPhrasesFromApi: [],
  isGameInProgress: false,
  isGameEnded: false,
  isGameWon: false,
  isLoading: false,
  phraseToGuess: [],
  phraseInfo: {
    category: "",
    hint: "",
    titbit: ""
  },
  lettersToClick: INITIAL_LETTERS_TO_CLICK,
  timeToNextLetter: TIME_TO_NEXT_LETTER, //if time === 0 => random letter is clicked
  mistakesLeft: 7 // if we select wrong letter => mistakes--. If mistakes ===0 => game is over
};

class App extends Component {
  state = {
    ...initialState
  };

  componentDidMount() {
    document.addEventListener("keydown", e =>
      this.clickOrPressKeyHandler(e, e.key)
    );
    this.fetchAllPhrasesHandler();
  }

  fetchAllPhrasesHandler = () => {
    this.setState({ isLoading: true });
    this.props.firebase.db.ref().once("value", snapshot => {
      const allPhrasesFromApi = Object.entries(snapshot.val()).map(obj => obj);
      this.setState({
        allPhrasesFromApi,
        isLoading: false
      });
    });
  };

  startGameHandler = () => {
    const randomPhrase = this.giveRandomPhraseHandler();
    const { phraseToGuess, phraseInfo } = randomPhrase;

    this.setState({
      isGameInProgress: true,
      phraseToGuess,
      phraseInfo,
      isGameEnded: false,
      isGameWon: false,
      lettersToClick: [
        { letter: "Q", isClicked: false, isHit: false },
        { letter: "W", isClicked: false, isHit: false },
        { letter: "E", isClicked: false, isHit: false },
        { letter: "R", isClicked: false, isHit: false },
        { letter: "T", isClicked: false, isHit: false },
        { letter: "Y", isClicked: false, isHit: false },
        { letter: "U", isClicked: false, isHit: false },
        { letter: "I", isClicked: false, isHit: false },
        { letter: "O", isClicked: false, isHit: false },
        { letter: "P", isClicked: false, isHit: false },
        { letter: "A", isClicked: false, isHit: false },
        { letter: "S", isClicked: false, isHit: false },
        { letter: "D", isClicked: false, isHit: false },
        { letter: "F", isClicked: false, isHit: false },
        { letter: "G", isClicked: false, isHit: false },
        { letter: "H", isClicked: false, isHit: false },
        { letter: "J", isClicked: false, isHit: false },
        { letter: "K", isClicked: false, isHit: false },
        { letter: "L", isClicked: false, isHit: false },
        { letter: "Z", isClicked: false, isHit: false },
        { letter: "X", isClicked: false, isHit: false },
        { letter: "C", isClicked: false, isHit: false },
        { letter: "V", isClicked: false, isHit: false },
        { letter: "B", isClicked: false, isHit: false },
        { letter: "N", isClicked: false, isHit: false },
        { letter: "M", isClicked: false, isHit: false }
      ],
      timeToNextLetter: TIME_TO_NEXT_LETTER,
      mistakesLeft: 7
    });
  };

  giveRandom = i => Math.floor(Math.random() * i);

  giveRandomPhraseHandler = () => {
    const { allPhrasesFromApi } = this.state;
    const { giveRandom } = this;

    const randomCategory =
      allPhrasesFromApi[giveRandom(allPhrasesFromApi.length)];

    const allQuestionsInThisCategory = Object.entries(randomCategory[1]).map(
      obj => obj
    );
    const randomQuestion =
      allQuestionsInThisCategory[giveRandom(allQuestionsInThisCategory.length)];

    const category = randomCategory[0];
    const phrase = randomQuestion[0];
    const { hint, titbit } = randomQuestion[1];

    const phraseToGuess = [...phrase].map((letter, index) => ({
      id: index,
      letter: letter.toUpperCase(),
      isLetterShowed:
        letter === "," || letter === "-" || letter === " " ? true : false
    }));

    return {
      phraseToGuess,
      phraseInfo: {
        category,
        hint,
        titbit
      }
    };
  };

  clickOrPressKeyHandler = (e, keydownLetter) => {
    const {
      isGameInProgress,
      timeToNextLetter,
      isGameEnded,
      lettersToClick
    } = this.state;
    console.log(keydownLetter);
    if (!isGameInProgress || isGameEnded || timeToNextLetter === 0) {
      return;
    } else {
      let keyPressedOrClickedLetter;

      if (keydownLetter) {
        keyPressedOrClickedLetter = keydownLetter.toUpperCase();
      } else if (e.target.textContent) {
        keyPressedOrClickedLetter = e.target.textContent;
      }

      const index = lettersToClick.findIndex(
        ({ letter }) => letter === keyPressedOrClickedLetter
      );

      if (index === -1 || lettersToClick[index].isClicked) {
        return;
      } else {
        const selectedLetterObj = lettersToClick[index];
        return this.checkIfLetterIsInPhraseHandler(selectedLetterObj);
      }
    }
  };

  autoClickLetter = () => {
    const { checkIfLetterIsInPhraseHandler, giveRandom } = this;
    const { lettersToClick } = this.state;
    const notClickedLetters = lettersToClick.filter(
      letter => !letter.isClicked
    );
    const random = giveRandom(notClickedLetters.length);
    const selectedLetter = notClickedLetters[random];
    return checkIfLetterIsInPhraseHandler(selectedLetter);
  };

  componentDidUpdate(prevProps, prevState) {
    //END GAME HANDLER
    const { timeToNextLetter, mistakesLeft } = this.state;

    if (prevState.mistakesLeft !== mistakesLeft && mistakesLeft === 0) {
      clearInterval(this.ID);
      this.setState({ isGameEnded: true, isGameInProgress: false });
    }

    if (
      prevState.timeToNextLetter !== timeToNextLetter &&
      timeToNextLetter === -1
    ) {
      this.autoClickLetter();
      this.setState({ timeToNextLetter: TIME_TO_NEXT_LETTER });
    }
  }

  checkIfLetterIsInPhraseHandler = selectedLetterObj => {
    this.startTimeToNextLetterHandler();
    const { phraseToGuess, lettersToClick } = this.state;
    const slicedPhrase = phraseToGuess.slice();
    const slicedLettersToClick = lettersToClick.slice();

    const letterToClickIndex = slicedLettersToClick.findIndex(
      obj => obj.letter === selectedLetterObj.letter
    );
    slicedLettersToClick[letterToClickIndex].isClicked = true;

    const letterInPhrase = phraseToGuess.find(
      obj => obj.letter === selectedLetterObj.letter
    );

    if (letterInPhrase) {
      slicedLettersToClick[letterToClickIndex].isHit = true;
      slicedPhrase.forEach(
        obj =>
          obj.letter === selectedLetterObj.letter && (obj.isLetterShowed = true)
      );
      const isPhraseGuessed = this.checkIfAllLettersAreShowed();
      if (isPhraseGuessed) {
        clearInterval(this.ID);
        this.setState({
          isGameInProgress: false,
          isGameEnded: true,
          isGameWon: true
        });
      } else if (!isPhraseGuessed) {
        this.setState({
          phraseToGuess: slicedPhrase,
          lettersToClick: slicedLettersToClick
        });
      }
    } else if (!letterInPhrase) {
      slicedLettersToClick[letterToClickIndex].isHit = false;
      this.setState({
        mistakesLeft: this.state.mistakesLeft - 1,
        timeToNextLetter: TIME_TO_NEXT_LETTER
      });
    }
  };

  startTimeToNextLetterHandler = () => {
    clearInterval(this.ID);
    this.ID = setInterval(() => {
      this.setState({ timeToNextLetter: this.state.timeToNextLetter - 1 });
    }, 1000);
  };

  checkIfAllLettersAreShowed = () => {
    const { phraseToGuess } = this.state;
    const arrayOfBoolean = phraseToGuess.map(obj => obj.isLetterShowed);
    const areAllLettersShowed = !arrayOfBoolean.includes(false);
    return areAllLettersShowed;
  };

  componentWillUnmount() {
    document.removeEventListener("keydown", this.clickOrPressKeyHandler());
  }

  render() {
    const {
      phraseToGuess,
      lettersToClick,
      timeToNextLetter,
      mistakesLeft,
      isGameInProgress,
      isGameEnded,
      phraseInfo,
      isGameWon,
      isLoading
    } = this.state;

    const { category, hint, titbit } = phraseInfo;

    return (
      <Layout isGameInProgress={isGameInProgress}>
        <StartPage
          phraseToGuess={phraseToGuess}
          isGameEnded={isGameEnded}
          isGameInProgress={isGameInProgress}
          startGame={this.startGameHandler}
          isLoading={isLoading}
        />
        <InGamePage
          isGameEnded={isGameEnded}
          isGameInProgress={isGameInProgress}
          category={category}
          hint={hint}
          phraseToGuess={phraseToGuess}
          lettersToClick={lettersToClick}
          timeToNextLetter={timeToNextLetter}
          mistakesLeft={mistakesLeft}
          clickLetter={this.clickOrPressKeyHandler}
          isGameWon={isGameWon}
        />
        <EndGamePage
          titbit={titbit}
          onClick={this.startGameHandler}
          phraseToGuess={phraseToGuess}
          isGameWon={isGameWon}
          isGameEnded={isGameEnded}
        />
      </Layout>
    );
  }
}

export default withFirebase(App);
