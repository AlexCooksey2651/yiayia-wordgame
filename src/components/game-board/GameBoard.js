import React, { useState, useEffect } from "react";
import styles from "./GameBoard.module.css";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import Word from "./Word";
import LetterEntryForm from "./LetterEntryForm";
import SentenceEntryForm from "./SentenceEntryForm";
import LetterKey from "./LetterKey";
import Confetti from "react-confetti";

const LINE_1 = ["YOU'RE", "GOING"];
const LINE_2 = ["TO", "BE", "A"];
const LINE_3 = ["GREAT-GRANDMOTHER!"];
const LETTERS = [
  "Y",
  "O",
  "U",
  "R",
  "E",
  "G",
  "I",
  "N",
  "T",
  "B",
  "A",
  "M",
  "H",
  "D",
];

const SENTENCE1 = "YOU'RE GOING TO BE A GREAT-GRANDMOTHER!";
const SENTENCE2 = "YOU'RE GOING TO BE A GREAT-GRANDMOTHER"

const GameBoard = () => {
  const [guesses, setGuesses] = useState([]);
  const [guessLetter, setGuessLetter] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const checkIfDone = () => {
      if (LETTERS.every((letter) => guesses.includes(letter))) {
        setFinished(true);
      }
    };
    checkIfDone();
  }, [guesses]);

  const checkGuess = (letter) => {
    const converted = letter.toUpperCase();
    if (guesses.includes(converted)) {
      setErrorMessage("You've already guessed that letter!");
    } else if (LETTERS.includes(converted)) {
      setGuesses((currentGuesses) => {
        return [...currentGuesses, converted];
      });
    } else {
      setErrorMessage("That's not one of the letters. Guess again!");
    }
  };

  const checkSentenceGuess = (sentence) => {
    const converted = sentence.toUpperCase();
    if (converted === SENTENCE1 || converted === SENTENCE2) {
      setGuesses([
        "Y",
        "O",
        "U",
        "R",
        "E",
        "G",
        "I",
        "N",
        "T",
        "B",
        "A",
        "M",
        "H",
        "D",
      ]);
      setFinished(true);
    } else {
      setErrorMessage(
        "That's not quite right. Feel free to try again, or go back to guessing letters."
      );
    }
  };

  return (
    <Container fluid className={styles.gameBoard}>
      <Row>
        <Col>
          <h2>Instructions:</h2>
          <p className={styles.instructions}>
            Fill in the sentence by matching letters to the numbers you see in
            each space.
            <br />
            Each letter's number is its place in the alphabet (e.g. A = 1, B =
            2, C = 3, etc.).
            <br />
            Use the Letter Key below for help figuring out which letter matches
            a number.
          </p>
          <p className={styles.instructions}>If you want, you can also try guessing the full sentence (punctuation matters!). Enjoy!</p>
          <LetterKey />
        </Col>
      </Row>
      <Row className={styles.word_row}>
        {LINE_1.map((word) => (
          <Col className={styles.word_col}>
            <Word key={word} word={word} guesses={guesses} />
          </Col>
        ))}
      </Row>
      <Row className={styles.word_row}>
        {LINE_2.map((word) => (
          <Col className={styles.word_col}>
            <Word key={word} word={word} guesses={guesses} />
          </Col>
        ))}
      </Row>
      <Row className={styles.word_row}>
        {LINE_3.map((word) => (
          <Col className={styles.word_col}>
            <Word key={word} word={word} guesses={guesses} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={12}>
          {guessLetter ? (
            <LetterEntryForm
              checkGuess={checkGuess}
              setErrorMessage={setErrorMessage}
            />
          ) : (
            <SentenceEntryForm
              checkSentenceGuess={checkSentenceGuess}
              setErrorMessage={setErrorMessage}
            />
          )}
        </Col>
        <br />
        <Col xs={12}>
          <Button
            className={styles.toggle_btn}
            onClick={() => setGuessLetter(!guessLetter)}
          >
            {guessLetter ? "Guess Full Sentence?" : "Guess Single Letter?"}
          </Button>
        </Col>
      </Row>
      {errorMessage && (
        <Alert className={styles.errorAlert} variant="primary">
          {errorMessage}
        </Alert>
      )}
      <Row className={styles.guesses_row}>
        <h4>Guesses:</h4>
        {guesses.length > 0 && (
          <p className={styles.guesses}>{guesses.join(", ")}</p>
        )}
      </Row>
      {finished && <Confetti />}
    </Container>
  );
};

export default GameBoard;
