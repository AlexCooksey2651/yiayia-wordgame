import { useState } from "react";
import styles from "./LetterKey.module.css";
import { Button, Offcanvas } from "react-bootstrap";

function LetterKey() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow} className={styles.btn}>
        Letter Key
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body className={styles.body}>
          <div className={styles.letterKey}>
            <p>
              A: 1<br />
              B: 2<br />
              C: 3<br />
              D: 4<br />
              E: 5<br />
              F: 6<br />
              G: 7<br />
              H: 8<br />
              I: 9<br />
              J: 10
              <br />
              K: 11
              <br />
              L: 12
              <br />
              M: 13
              <br />
              N: 14
              <br />
              O: 15
              <br />
              P: 16
              <br />
              Q: 17
              <br />
              R: 18
              <br />
              S: 19
              <br />
              T: 20
              <br />
              U: 21
              <br />
              V: 22
              <br />
              W: 23
              <br />
              X: 24
              <br />
              Y: 25
              <br />
              Z: 26
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default LetterKey;
