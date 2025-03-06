import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Nancy Ajram",
    image: "/imgs/landing-page/sec-6/girl.png",
    rating: 5.5,
    review:
      "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
    updated: "3 mins ago",
  },
  {
    id: 2,
    name: "Charlie Johnson",
    image: "/imgs/landing-page/sec-6/Rectangle 8 (1).png",
    rating: 5.5,
    review:
      "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
    updated: "5 mins ago",
  },
];

const Testimonials = () => {
  return (
    <div className={styles.testimonialsContainer}>
      <h3 className={styles.sectionTitle}>What People Say About Us?</h3>

      <Swiper
        spaceBetween={30}
        slidesPerView={1} 
        loop={true}  

        autoplay={{ delay: 2000, disableOnInteraction: false }}  
        modules={[Autoplay]}
     
        speed={800} // 
       >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className={styles.testimonialCard}>
            <div className={styles.cardContent}>
              <img src={item.image} alt={item.name} className={styles.avatar} />
              <div className={styles.testimonialContent}>
                <h4 className={styles.rating}>
                  <span>{item.rating}</span> stars ⭐⭐⭐⭐⭐
                </h4>
                <p className={styles.review}>{item.review}</p>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.updated}>Last updated {item.updated}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
