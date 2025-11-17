import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF8E7] via-[#FFF4DE] to-[#FFEFD5] text-gray-800 px-6">

            {/* Fun Image */}
            <img
                src="https://i.ibb.co.com/nNbwP3zv/404.jpg"
                alt="Lost Burger"
                className="w-64 md:w-50 mb-8 animate-bounce"
            />

            {/* Error Text */}
            <h1 className="text-6xl md:text-8xl font-extrabold text-[#F39C12] drop-shadow-lg">
                404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#E67E22] mt-2">
                Oops! Page Not Found 
            </h2>
            <p className="text-gray-600 text-center mt-4 max-w-md">
                Looks like you've wandered off the food trail.
                Don't worry - our chefs are cooking up something better!
            </p>

            {/* Back Button */}
            <Link to="/" className="mt-8 flex items-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform duration-200">
                <FaHome /> Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
