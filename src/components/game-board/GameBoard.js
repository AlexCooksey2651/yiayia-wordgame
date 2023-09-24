import React, { useState, useEffect } from "react";
import styles from "./GameBoard.module.css";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import Word from "./Word";
import NumberEntryForm from "./NumberEntryForm";
import LetterKey from "./LetterKey";
import Confetti from 'react-confetti'

const LINE_1 = ["MOM", "AND", "DAD,",];
const LINE_2 = ["YOU", "WILL", "BE"];
const LINE_3 = ["GRANDPARENTS!"];
const LETTERS = ["M", "O", "A", "N", "D", "Y", "U", "W", "I", "L", "B", "E", "G", "R", "P", "S"]

function solutions(str) {
  let solutions = {};
  for (let i = 1; i <= str.length; i++) {
    let newNum = (i**2) + 19;
    solutions[newNum] = str[i - 1];
  }
  return solutions;
}

const SOLUTION_KEY = solutions("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
console.log(SOLUTION_KEY)

const GameBoard = ({ setGameStarted }) => {
  const [guesses, setGuesses] = useState([]);
  const [errorMessage, setErrorMessage] = useState("")
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const checkIfDone = () => {
        if (LETTERS.every(letter => guesses.includes(letter))) {
            setFinished(true);
        }
    }
    checkIfDone()
  }, [guesses])

  const checkGuess = (num) => {
    if (num in SOLUTION_KEY) {
      let letter = SOLUTION_KEY[num];
      if (guesses.includes(SOLUTION_KEY[num])) {
        setErrorMessage("You've already guessed that letter!");
      } else {
        setGuesses((currentGuesses) => {
          return [...currentGuesses, letter];
        });
      }
    } else {
      setErrorMessage("That number doesn't match a letter!");
    }
  };
  console.log(guesses);

  return (
    <Container fluid className={styles.gameBoard}>
      <Row>
        <Col>
        <p><em>Warning: Clicking this will clear the game board!</em></p>
          <Button onClick={() => setGameStarted(false)}>
            Return to Home Screen
          </Button>
        </Col>
      </Row>
      <Row className={styles.word_row}>
        {LINE_1.map((word) => (
          <Col className={styles.word_col}>
            <Word key={word} word={word} guesses={guesses}/>
          </Col>
        ))}
      </Row>
      <Row className={styles.word_row}>
        {LINE_2.map((word) => (
          <Col className={styles.word_col}>
            <Word key={word} word={word} guesses={guesses}/>
          </Col>
        ))}
      </Row>
      <Row className={styles.word_row}>
        {LINE_3.map((word) => (
          <Col className={styles.word_col}>
            <Word key={word} word={word} guesses={guesses}/>
          </Col>
        ))}
      </Row>

      <Row className={styles.numberEntry_row}>
        <h2>
          <b>
            EQUATION: y = x<sup>2</sup> + 19
          </b>
        </h2>
        <h5>
          <em>
            Reminder: For 'x', use the number of the alphabet that matches your chosen letter (you can use the letter key for help).
          </em>
        </h5>
        <LetterKey />
        <br />
        <h4>Enter 'y' below:</h4>
      </Row>
      <Row>
        <NumberEntryForm checkGuess={checkGuess} setErrorMessage={setErrorMessage}/>
      </Row>
      {errorMessage && <Alert className={styles.errorAlert} variant="primary">{errorMessage}</Alert>}
      <Row className={styles.guesses_row}>
        <h4>Guesses:</h4>
        {guesses.length > 0 && <p className={styles.guesses}>{guesses.join(', ')}</p>}
      </Row>
      {finished && <Confetti />}
    </Container>
  );
};

export default GameBoard;
