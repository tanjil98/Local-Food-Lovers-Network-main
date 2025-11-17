// Banner.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import banner1 from "../../assets/local_rsturent_image.jpg";
import banner2 from "../../assets/streetFoodImage.jpg";
import banner3 from "../../assets/home-cooked-image.jpg";

const slides = [
    {
        image: banner1,
        slogan: "Find the Best Local Restaurants",
        subtext: "Taste the dishes everyone's talking about — fresh, local, and delicious.",
    },
    {
        image: banner2,
        slogan: "Taste the Street, Feel the Flavor",
        subtext: "Discover your city's most loved street foods — full of spice and stories.",
    },
    {
        image: banner3,
        slogan: "Home-Cooked Meals, Just Like Family",
        subtext: "Enjoy warm, homemade food made with love by local chefs.",
    },
];

const Banner = () => {
    return (
        // <section className="absolute flex top-0 left-0 w-[700px] h-[600px] overflow-hidden">
        <section className="relative w-full h-[600px] overflow-hidden">
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative w-full h-[600px] bg-center bg-cover"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Animated text */}
                            <motion.div
                                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <h1 className="text-4xl md:text-6xl font-bold text-base-100 drop-shadow-lg mb-4">
                                    {slide.slogan}
                                </h1>
                                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                                    {slide.subtext}
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-secondary text-white font-semibold rounded-full px-6 py-3 shadow-lg"
                                >
                                    Explore Now
                                </motion.button>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Banner;
