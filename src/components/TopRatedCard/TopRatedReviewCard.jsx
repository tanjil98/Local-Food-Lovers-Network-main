import { FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const TopRatedReviewCard = ({ review, delay }) => {
    const { foodImage, foodName, restaurant, location, name, rating } = review;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div data-aos="fade-up" data-aos-delay={delay}>
            <div className="card bg-gradient-to-br from-[#FFF8E7] to-[#FFEFD5] shadow-xl border border-[#F39C12]/30 rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">

                {/* Food Image */}
                <figure className="relative">
                    <img
                        src={foodImage}
                        alt="Food Dish"
                        className="h-56 w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Food Name on Image */}
                    <h2 className="absolute bottom-3 left-5 text-2xl font-extrabold text-white drop-shadow-md">
                        {foodName}
                    </h2>
                </figure>

                {/* Card Body */}
                <div className="card-body px-6 py-5 bg-white/95 backdrop-blur-sm rounded-t-3xl">
                    <div className="space-y-1 text-gray-700">
                        <p><span className="font-semibold text-[#E67E22]">Restaurant:</span> {restaurant}</p>
                        <p><span className="font-semibold text-[#E67E22]">Location:</span> {location}</p>
                        <p><span className="font-semibold text-[#E67E22]">Reviewer:</span> {name}</p>
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
                    {/* Action Button */}
                    <div className="card-actions justify-end mt-4">
                        <Link to={`/viewDetail/${review._id}`} className="btn btn-primary border-none text-white font-semibold shadow-md ">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRatedReviewCard;