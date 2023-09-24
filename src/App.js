import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import StartGameButton from "./components/StartGameButton";
import GameBoard from "./components/game-board/GameBoard";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const content = gameStarted ? (
    <GameBoard setGameStarted={setGameStarted} />
  ) : (
    <StartGameButton setGameStarted={setGameStarted} />
  );

  return (
    <div className={styles.app}>
      <header className={styles.main_header}>
        <h1>Numbers & Letters</h1>
      </header>
      {content}
    </div>
  );
}

export default App;