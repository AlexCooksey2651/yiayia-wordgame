import React, { useState } from "react";
import styles from "./NumberEntryForm.module.css";
import { Col, Form, Row, Button } from "react-bootstrap";

const NumberEntryForm = ({ checkGuess, setErrorMessage }) => {
  const [guess, setGuess] = useState("");

  const handleSubmitGuess = (e) => {
    e.preventDefault();
    setErrorMessage("")
    if (guess === "") setErrorMessage("You forgot to enter a guess!")
    else {
        checkGuess(guess)
        setGuess("")
    }
    setTimeout(() => {
        setErrorMessage("")
    }, 3000)
  }

  return (
    <Form onSubmit={handleSubmitGuess} className={styles.number_form}>
      <Row className="align-items-center">
        <Col xs={8}>
          <Form.Control type="number" placeholder="Please enter your guess here" value={guess} onChange={(e)=> setGuess(e.target.value)}/>
        </Col>
        <Col>
            <Button type="submit">Guess</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default NumberEntryForm;
