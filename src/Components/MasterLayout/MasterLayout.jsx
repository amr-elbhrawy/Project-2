import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import Cars from "../Cars/Cars";
import CarRental from "../CarRental/CarRental";
import Testimonials from "../Testimonials/Testimonials";
import RentCarsForm from "../RentcarsForm/RentcarsForm";
import Footer from "../Footer/Footer";
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import styles from "./MasterLayout.module.css";  

const MasterLayout = () => {
  const location = useLocation();
  const isCarDetailsPage = location.pathname.includes("/cars/");

  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      
      <div className={styles.content}>
        {!isCarDetailsPage && (
          <>
            <HeroSection />
            <Cars />
            <CarRental />
            <FeaturesSection />
            <Testimonials />
            <RentCarsForm />
          </>
        )}
        
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MasterLayout;
