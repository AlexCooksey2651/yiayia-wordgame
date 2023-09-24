import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GameBoard from "./components/game-board/GameBoard";

function App() {

  return (
    <div className={styles.app}>
      <header className={styles.main_header}>
        <h1>Numbers & Letters</h1>
      </header>
      <GameBoard />
    </div>
  );
}

export default App;