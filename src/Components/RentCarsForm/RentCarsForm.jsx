import React from "react";
import styles from "./RentcarsForm.module.css";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
 
 
const RentcarsForm = () => {
  return (
    <Container className={styles.wrapper}>
      <Row className="align-items-center">
         <Col md={6}>
          <Card className={styles.formCard}>
            <Card.Body>
              <h2 className={styles.title}>
                Download Rentcars <br /> App for <span className={styles.highlight}>FREE</span>
              </h2>
              <p className={styles.subtext}>For faster, easier booking and exclusive deals.</p>
              
             <div className={styles.storeButtons}>
              <img src="/imgs/landing-page/andriod.png" alt="Google Play" className={styles.storeIcon} />
              <img src="/imgs/landing-page/ios.png" alt="App Store" className={styles.storeIcon} />
            </div>

               <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Name" className={styles.inputField} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Phone Number" className={styles.inputField} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Email" className={styles.inputField} />
                </Form.Group>
                <Button variant="primary" type="submit" className={styles.submitButton}>
                  Send
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

         <Col md={6} className="d-flex justify-content-center">
          <div className={styles.imageContainer}>
            <img src= "/imgs/landing-page/sec-7/iPhone-14.png" alt="Phone Mockup" className={styles.phoneImage} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RentcarsForm;
