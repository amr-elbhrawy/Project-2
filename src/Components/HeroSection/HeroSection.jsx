import React from "react";
import styles from "./HeroSection.module.css";
import { Container, Row, Col } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
                  <div className={styles.overlay}></div>  

      <Container fluid className="p-0">
        <Row className="align-items-center d-flex g-0 mx-0">
 
          <Col   md={6} sm={12} className={styles.textContainer}>
            <h1 className={styles.title}>
              Find, book and<br /> rent a car  
              <span className={styles.highlight}> Easily</span>
            </h1>
            <p className={styles.subtitle}>
              Get a car wherever and whenever you need it with your iOS and Android device.
            </p>
            <div className={styles.storeButtons}>
              <img src="/imgs/landing-page/andriod.png" alt="Google Play" className={styles.storeIcon} />
              <img src="/imgs/landing-page/ios.png" alt="App Store" className={styles.storeIcon} />
            </div>
          </Col>

           <Col   md={6} sm={12} className={`${styles.imageContainer} p-0 m-0`}>
            <img
              src="/imgs/landing-page/car 2 1.png"
              alt="Blue Car"
              className={styles.carImage}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;