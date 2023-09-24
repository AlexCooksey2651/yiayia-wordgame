import React from "react";
import styles from "./StartGameButton.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const StartGameButton = ({ setGameStarted }) => {
  return (
    <Container fluid className={styles.startBtn_container}>
      <Row className="align-items-center">
        <Col>
          <Button onClick={() => setGameStarted(true)}>Start Game?</Button>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col>
          <h2>Instructions:</h2>
          <p className={styles.instructions}>
            Use the provided equation to guess letters to complete the sentence.
            <br />
            To guess a letter, let 'x' equal the number of the alphabet that
            corresponds to the letter (e.g. A = 1, B = 2, etc.). Enter the
            result ('y') into the box.
            <br />
            For example, if the equation is y = 2x - 2 and you want to guess G,
            x = 7 (G is 7<sup>th</sup> letter of the alphabet) so y = 2 * 7 - 2 = 12, so you would enter
            '12'.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default StartGameButton;
