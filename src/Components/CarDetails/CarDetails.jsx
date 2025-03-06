import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaCar, FaUsers, FaSnowflake, FaDoorOpen } from "react-icons/fa";
import { Container, Row, Col, Button, Card } from "react-bootstrap";  

const CarDetails = () => {
  const { carId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [car, setCar] = useState(location.state?.car || null);
  const [loading, setLoading] = useState(!car);
  const imageUrl = location.state?.imageUrl || "/imgs/landing-page/default-car.png";

  const transmission = location.state?.transmission || "Manual";
  const doors = location.state?.doors || 4;
  const passengers = location.state?.passengers || 2;

  useEffect(() => {
    if (!car) {
      axios
        .get(`https://myfakeapi.com/api/cars/`)
        .then((response) => {
          const foundCar = response.data.cars.find((c) => c.id === parseInt(carId));
          setCar(foundCar);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching car details:", error);
          setLoading(false);
        });
    }
  }, [carId, car]);

  if (loading) return <p className="text-center">Loading car details...</p>;
  if (!car) return <p className="text-center text-danger">Car details not available</p>;

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center  overflow-hidden">
      <Row className="w-100 h-100 align-items-center">
        <Col md={6} className="d-flex justify-content-center">
          <Card style={{ border: "none" }}>
            <Card.Img variant="top" src={imageUrl} alt={car.name} style={{ width: "500px", height: "auto" }} />
          </Card>
        </Col>

        <Col md={6}>
          <h5 className="text-primary">WHY CHOOSE US</h5>
          <h2 className="fw-bold">We offer the best experience with our rental deals</h2>
          <div className="mt-4">
            <div className="d-flex align-items-center mb-2">
              <FaSnowflake className="me-2 text-secondary" /> <strong className="pe-2">Air Conditioning:</strong> {car.airConditioning ? "Yes" : "No"}
            </div>
            <div className="d-flex align-items-center mb-2">
              <FaUsers className="me-2 text-secondary" /> <strong className="pe-2">Passengers:</strong> {passengers}
            </div>
            <div className="d-flex align-items-center mb-2">
              <FaCar className="me-2 text-secondary" /> <strong className="pe-2">Transmission:</strong> { transmission}
            </div>
            <div className="d-flex align-items-center mb-2">
              <FaDoorOpen className="me-2 text-secondary" /> <strong className="pe-2">Doors:</strong> {doors}
            </div>
          </div>
          <p className="mt-3 text-secondary"><strong>Price:</strong> {car.price} /day</p>
          <Button variant="primary" onClick={() => navigate(-1)}>
            ← Back
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CarDetails;
