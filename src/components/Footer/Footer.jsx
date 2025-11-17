import React from "react";
import logo from '../../assets/logo.png'
import { FaFacebookF, FaInstagram, FaYoutube, FaLocationArrow, FaEnvelope, FaPhoneAlt, } from "react-icons/fa";
import { Link } from "react-router";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-[#FFF8E7] via-white to-[#FFEFD5] text-gray-700 pt-16 pb-10">
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* --- 1️⃣ Brand Section --- */}
                <div className="space-y-4 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <img
                            src={logo}
                            alt="Food Lovers Logo"
                            className="w-40 object-contain"
                        />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Celebrating the joy of flavors - connecting food enthusiasts, home
                        chefs, and street food lovers around the world
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-center md:justify-start gap-3 text-xl pt-2">
                        <Link
                            to="#"
                            className="p-2 rounded-full bg-white shadow hover:bg-[#F39C12] hover:text-white transition-colors duration-200"
                        >
                            <FaFacebookF />
                        </Link>
                        <Link
                            to="#"
                            className="p-2 rounded-full bg-white shadow hover:bg-[#F39C12] hover:text-white transition-colors duration-200"
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            to="#"
                            className="p-2 rounded-full bg-white shadow hover:bg-[#F39C12] hover:text-white transition-colors duration-200"
                        >
                            <FaXTwitter />
                        </Link>
                        <Link
                            to="#"
                            className="p-2 rounded-full bg-white shadow hover:bg-[#F39C12] hover:text-white transition-colors duration-200"
                        >
                            <FaYoutube />
                        </Link>
                    </div>
                </div>

                {/* --- 2️⃣ Quick Links --- */}
                <div className="text-center md:text-left">
                    <h4 className="text-lg font-semibold text-[#F39C12] mb-4">
                        Quick Links
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-[#E67E22] transition-colors duration-200"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/allReview"
                                className="hover:text-[#E67E22] transition-colors duration-200"
                            >
                                All Reviews
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/addReview"
                                className="hover:text-[#E67E22] transition-colors duration-200"
                            >
                                Add Review
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="hover:text-[#E67E22] transition-colors duration-200"
                            >
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* --- 3️⃣ Support Section --- */}
                <div className="text-center md:text-left">
                    <h4 className="text-lg font-semibold text-[#F39C12] mb-4">
                        Support
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                to="#"
                                className="hover:text-[#E67E22] transition-colors duration-200"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-[#E67E22] transition-colors duration-200"
                            >
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-[#E67E22] transition-colors duration-200"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* --- 4️⃣ Contact Info --- */}
                <div className="text-center md:text-left">
                    <h4 className="text-lg font-semibold text-[#F39C12] mb-4">
                        Get In Touch
                    </h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-center md:justify-start items-center gap-2">
                            <FaLocationArrow className="text-[#E67E22]" />
                            <span>Bangladesh</span>
                        </li>
                        <li className="flex justify-center md:justify-start items-center gap-2">
                            <FaEnvelope className="text-[#E67E22]" />
                            <span>98sakib@gmail.com</span>
                        </li>
                        <li className="flex justify-center md:justify-start items-center gap-2">
                            <FaPhoneAlt className="text-[#E67E22]" />
                            <span>+8801855694857</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* --- Divider --- */}
            <div className="border-t border-[#F39C12]/30 mt-12 pt-5 text-center text-gray-600 text-sm">
                © {new Date().getFullYear()}{" "}
                <span className="text-[#E67E22] font-semibold">
                    Local Food Lovers Network
                </span>
                . All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
