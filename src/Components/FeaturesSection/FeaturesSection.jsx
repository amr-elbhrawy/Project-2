import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMoneyBillWave, FaCarSide, FaTools } from "react-icons/fa";
import styles from "./FeaturesSection.module.css";  

const FeaturesSection = () => {
  return (
    <Container fluid className={`py-5 position-relative ${styles.featuresContainer}`}>
     <div className={styles.overlayBg}></div>

    <Row className={`align-items-center ${styles.featuresRow}`}>
      <Col md={6} sm={12} className="text-center position-relative img-car">
        <img
          src={"/imgs/landing-page/sec-5/Audi 1.png"}
          alt="Luxury Car"
          className={`img-fluid ${styles.carImage}`}
        />
      </Col>

      <Col md={6}>
        <button className={styles.whyChooseUsBtn}>WHY CHOOSE US</button>
        <h2 className={styles.mainTitle}>
          We Offer The Best Experience With Our Rental Deals
        </h2>

        <div className="mt-4">
          <Feature
            icon={<FaMoneyBillWave className={styles.iconStyle} />}
            title="Best price guaranteed"
            description="Find a lower price? We’ll refund you 100% of the difference."
          />
          <Feature
            icon={<FaCarSide className={styles.iconStyle} />}
            title="24 hour car delivery"
            description="Book your car anytime and we will deliver it directly to you."
          />
          <Feature
            icon={<FaTools className={styles.iconStyle} />}
            title="24/7 technical support"
            description="Have a question? Contact Rentcars support any time when you have a problem."
          />
                  <Feature
            icon={<FaMoneyBillWave className={styles.iconStyle} />}
            title="Best price guaranteed"
            description="Find a lower price? We’ll refund you 100% of the difference."
          />
        </div>
      </Col>
    </Row>
  </Container>

  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.iconContainer}>{icon}</div>
      <div>
        <h5 className={styles.featureTitle}>{title}</h5>
        <p className={styles.featureText}>{description}</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
