import React from "react";
import LetterTile from "./LetterTile";
import styles from "./Word.module.css";

const Word = ({ word, guesses }) => {
  const letters = word.split("");
  return (
    <div className={styles.word}>
      {letters.map((letter) => (
        <LetterTile key={Math.random()} letter={letter} guesses={guesses}/>
      ))}
    </div>
  );
};

export default Word;
