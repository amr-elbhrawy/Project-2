import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaCar, FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const CarRental = () => {
  const brands = [
    "/imgs/landing-page/audi.png",
    "/imgs/landing-page/nissan.png",
    "/imgs/landing-page/volvo.png",
    "/imgs/landing-page/jaguar.png",
    "/imgs/landing-page/ac.png"
  ];

  return (
    <Container className="text-center my-5">
      <Button variant="primary" className="mb-3">
        HOW IT WORK
      </Button>
      <h2>Most popular cars rental deals</h2>
      <Row className="mt-4">
        <Col md={4}>
          <Card className="p-4 shadow-sm">
            <FaMapMarkerAlt size={40} className="text-primary mx-auto" />
            <h5 className="mt-3">Choose location</h5>
            <p>Choose your location and find your best car</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-4 shadow-sm">
            <FaCar size={40} className="text-primary mx-auto" />
            <h5 className="mt-3">Pick-up date</h5>
            <p>Select your pick-up date and time to book your car</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-4 shadow-sm">
            <FaCheckCircle size={40} className="text-primary mx-auto" />
            <h5 className="mt-3">Book your car</h5>
            <p>Book your car and we will deliver it directly to you</p>
          </Card>
        </Col>
      </Row>

       <Row className="mt-5">
  <Col>
    <Swiper
      slidesPerView={3}  
      spaceBetween={10}  
      loop={true}  
      autoplay={{ delay: 2000, disableOnInteraction: false }}  
      modules={[Autoplay]}
    >
      {brands.map((brand, index) => (
        <SwiperSlide 
          key={index} 
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100px" }} 
        >
          <img 
            src={brand} 
            alt="brand" 
            style={{ maxHeight: "60px", width: "auto", objectFit: "contain" }} 
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </Col>
</Row>


    </Container>
  );
};

export default CarRental;
