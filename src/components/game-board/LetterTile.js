import React from "react";
import styles from "./LetterTile.module.css";

const LetterTile = ({ letter, guesses }) => {
  const content = () => {
    if (letter === "," || letter === "!") return letter;
    else {
      return guesses.includes(letter) ? letter : "";
    }
  };
  return (
    <div
      className={
        letter === "," || letter === "!" ? styles.punctuation : styles.letter
      }
    >
      {content()}
    </div>
  );
};

export default LetterTile;
