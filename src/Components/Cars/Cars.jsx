import React, { useEffect, useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import axios from "axios";
import {
  FaStar,
  FaUsers,
  FaCar,
  FaSnowflake,
  FaDoorOpen,
  FaSearch,
  FaMapMarkerAlt
} from "react-icons/fa";
import styleCar from "./styleCar.module.css";
import { useNavigate } from "react-router-dom";

const Cars = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [visibleCars, setVisibleCars] = useState(4);

  const carImages = [
    "/imgs/landing-page/car1.png",
    "/imgs/landing-page/car2.png",
    "/imgs/landing-page/car3.png"
  ];

  useEffect(() => {
    axios
      .get("https://myfakeapi.com/api/cars/")
      .then(response => {
        setCars(response.data.cars);
      })
      .catch(error => {
        console.error("Error fetching cars:", error);
      });
  }, []);

  const filteredCars = cars.filter(car =>
    car.car.toLowerCase().includes(search.toLowerCase())
  );

  const handleRentNow = (car, imageUrl) => {
    navigate(`/cars/${car.id}`, {
      state: {
        car,
        imageUrl,
        transmission: "Manual",
        doors: 4,
        passengers: 2,
        airConditioning: car.air_conditioning
      }
    });
  };

  return (
    <div className={styleCar.container}>
      <div className="row">
        <InputGroup
          className={`shadow-sm ${styleCar.searchContainer} p-0`}
          style={{ maxWidth: "100%" }}
        >
          <InputGroup.Text className={styleCar.searchIcon}>
            <FaMapMarkerAlt className="text-secondary" size={18} />
          </InputGroup.Text>

          <Form.Control
            type="text"
            placeholder="Search By Name"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className={styleCar.searchInput}
          />

          <Button variant="primary" className={styleCar.searchButton}>
            <FaSearch size={18} />
          </Button>
        </InputGroup>
      </div>

      <div className="row text-center my-4">
        <p className="text-muted">Popular Rental Deals</p>
        <h1 className="fw-bold">Most Popular Cars Rental Deals</h1>
      </div>

      <div className="row">
        {filteredCars.length > 0
          ? filteredCars.slice(0, visibleCars).map((car, index) =>
              <div key={car.id} className="col-lg-3 col-md-6 col-sm-12 mt-3">
                <div className="card mb-1 shadow-sm p-3 rounded h-100 d-flex flex-column">
                  <img
                    src={carImages[index % carImages.length]}
                    alt="Car"
                    className="card-img-top p-3"
                    style={{ height: "180px", objectFit: "contain" }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                      {car.car}
                    </h5>
                    <div className="d-flex align-items-center text-muted mb-2">
                      <FaStar className="text-warning me-1" />
                      <strong className="me-1">
                        4.{Math.floor(Math.random() * 10)}
                      </strong>
                      <span>
                        ({Math.floor(Math.random() * 3000)} reviews)
                      </span>
                    </div>

                    <div className="row">
                      <div className="col-6 d-flex flex-column gap-2">
                        <div
                          className="d-flex align-items-center"
                          style={{ minHeight: "30px" }}
                        >
                          <FaUsers className="me-2" /> <span>2 Passengers</span>
                        </div>
                        <div
                          className="d-flex align-items-center"
                          style={{ minHeight: "30px" }}
                        >
                          <FaSnowflake className="me-2" />{" "}
                          <span>Air Conditioning</span>
                        </div>
                      </div>
                      <div className="col-6 d-flex flex-column gap-2">
                        <div
                          className="d-flex align-items-center"
                          style={{ minHeight: "30px" }}
                        >
                          <FaDoorOpen className="me-2" /> <span>4 Doors</span>
                        </div>
                        <div
                          className="d-flex align-items-center"
                          style={{ minHeight: "30px" }}
                        >
                          <FaCar className="me-2" /> <span>Manual</span>
                        </div>
                      </div>
                    </div>

                    <hr />
                    <div className="row">
                      <div className="col">
                        <p>Price:</p>
                      </div>
                      <div className="col text-end">
                        <span className="text-dark fw-bold">
                          {car.price} <span className="text-muted">/day</span>
                        </span>
                      </div>
                    </div>

                    <button
                      className="btn btn-primary w-100 fw-bold mt-auto"
                      onClick={() =>
                        handleRentNow(car, carImages[index % carImages.length])}
                    >
                      Rent Now →
                    </button>
                  </div>
                </div>
              </div>
            )
          : <p className="text-center text-muted">No cars available</p>}
      </div>

      {visibleCars < filteredCars.length &&
        <div className="text-center mt-3">
          <button
            className="btn btn-outline-primary"
            onClick={() => setVisibleCars(visibleCars + 4)}
          >
            Show More ↓
          </button>
        </div>}
    </div>
  );
};

export default Cars;
