import React from "react";
import { FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { useLoaderData } from "react-router";

const ViewDetail = () => {
    const reviewData = useLoaderData();
    

    const {
        foodName,
        foodImage,
        restaurant,
        location,
        rating,
        review,
        name,
        email,
        photoURL,
        createdAt,
        updatedAt,
    } = reviewData || {};

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-[#FFF4DE] to-[#FFEFD5] flex items-center justify-center px-4 py-40">
            <div className="max-w-4xl w-11/12 bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl border border-[#F39C12]/20 overflow-hidden">

                {/* Food Image */}
                <div className="relative">
                    <img
                        src={foodImage}
                        alt={foodName}
                        className="w-full h-[350px] object-cover brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <h2 className="absolute bottom-6 left-6 text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                        {foodName}
                    </h2>
                </div>

                {/* Details Section */}
                <div className="p-8 space-y-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div>
                            <p className="text-lg text-gray-700">
                                <span className="font-semibold text-[#E67E22]">Restaurant:</span>{" "}
                                {restaurant}
                            </p>
                            <p className="text-lg text-gray-700">
                                <span className="font-semibold text-[#E67E22]">Location:</span>{" "}
                                {location}
                            </p>
                            <p className="text-lg text-gray-700">
                                <span className="font-semibold text-[#E67E22]">Reviewer:</span>{" "}
                                {name}
                            </p>
                        </div>

                        {/* Reviewer Avatar */}
                        <div className="flex flex-col items-center mt-5 md:mt-0">
                            <img
                                src={photoURL}
                                alt={name}
                                className="w-16 h-16 rounded-full border-4 border-[#F39C12] object-cover"
                            />
                            <p className="text-sm text-gray-500 mt-1">{email}</p>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-2">
                        {Array.from({ length: fullStars }).map((_, i) => (
                            <FaStar key={`full-${i}`} className="text-[#F39C12] text-lg" />
                        ))}

                        {hasHalfStar && (
                            <FaStarHalfStroke className="text-[#F39C12] text-lg" />
                        )}

                        {Array.from({ length: emptyStars }).map((_, i) => (
                            <FaRegStar key={`empty-${i}`} className="text-gray-300 text-lg" />
                        ))}

                        <p className="text-sm text-gray-600 ml-2">{rating}</p>
                    </div>

                    {/* Review Text */}
                    <div className="mt-4">
                        <p className="text-gray-700 text-lg leading-relaxed italic">
                            “{review}”
                        </p>
                    </div>

                    {/* Created / Updated Info */}
                    <div className="mt-6 text-sm text-gray-500 border-t border-[#F39C12]/30 pt-3">
                        <p> Posted on {new Date(createdAt).toLocaleDateString()}</p>
                        {updatedAt && (
                            <p> Last updated on {new Date(updatedAt).toLocaleDateString()}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetail;
