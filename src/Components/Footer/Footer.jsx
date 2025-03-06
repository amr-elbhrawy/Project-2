import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col md={4}>
            <h5 className={styles.brand}>RENTCARS</h5>
            <p><FaMapMarkerAlt className={styles.icon} /> 25566 Hc 1, Glenallen, Alaska, 99588, USA</p>
            <p><FaPhoneAlt className={styles.icon} /> +603 4784 273 12</p>
            <p><FaEnvelope className={styles.icon} /> rentcars@gmail.com</p>
          </Col>

          <Col md={2}>
            <h6 className={styles.sectionTitle}>Our Product</h6>
            <ul className={styles.footerList}>
              <li>Career</li>
              <li>Car</li>
              <li>Packages</li>
              <li>Features</li>
              <li>Priceline</li>
            </ul>
          </Col>

          <Col md={2}>
            <h6 className={styles.sectionTitle}>Resources</h6>
            <ul className={styles.footerList}>
              <li>Download</li>
              <li>Help Centre</li>
              <li>Guides</li>
              <li>Partner Network</li>
              <li>Cruises</li>
              <li>Developer</li>
            </ul>
          </Col>

          <Col md={2}>
            <h6 className={styles.sectionTitle}>About Rentcars</h6>
            <ul className={styles.footerList}>
              <li>Why choose us</li>
              <li>Our Story</li>
              <li>Investor Relations</li>
              <li>Press Center</li>
              <li>Advertise</li>
            </ul>
          </Col>

          <Col md={2}>
            <h6 className={styles.sectionTitle}>Follow Us</h6>
            <div className={styles.socialIcons}>
              <FaFacebook className={styles.socialIcon} />
              <FaInstagram className={styles.socialIcon} />
              <FaYoutube className={styles.socialIcon} />
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <p className={styles.copyright}>© 2023 Rentcars, All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
