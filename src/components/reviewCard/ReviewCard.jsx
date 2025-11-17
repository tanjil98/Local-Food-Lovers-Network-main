import React, { use } from 'react';
import { FaHeart, FaRegStar, FaStar, FaStarHalfStroke } from 'react-icons/fa6';
import { Link } from 'react-router';
import useAxios from '../../hooks/useAxios';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthContext';

const ReviewCard = ({ review, delay }) => {
    const axiosInstance = useAxios();
    const {user} = use(AuthContext);
    // console.log(user.email);
    const { foodImage, foodName, restaurant, location, name, email, rating } = review;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);


    const handleMyFavorite = ()=>{
        // console.log('click..')
        const newFavorite = {
            favoriteReviewCardId: review._id,
            foodImage,
            foodName,
            restaurant,
            location,
            name,
            email,
            userEmail: user.email
        }
        // console.log(newFavorite);
        // console.log(review)
        axiosInstance.post('/favorite', newFavorite)
            .then(data => {
                // console.log(data.data)
                if (data.data.insertedId) {
                    toast.success("This review has been successfully added to your favorites! Please check your My Favorites page.")
                }
                else if (data.data.message) {
                    toast.error("You have already added this review to your favorites. Please check your My Favorites page.")
                }
            })
    }

    return (
        <div data-aos="fade-up" data-aos-delay={delay} className="bg-white/90 border border-[#F39C12]/20 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row gap-4 p-5">

            {/* Food Image */}
            <div className="w-full md:w-1/3">
                <img
                    src={foodImage}
                    alt=""
                    className="w-full h-48 md:h-[200px] object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Review Details */}
            <div className="flex flex-col justify-between w-full md:w-2/3">
                <div>
                    <div className='flex justify-between items-center'>
                        <h2 className="text-2xl font-bold text-[#F39C12] mb-1">{foodName}</h2>
                        <div onClick={handleMyFavorite}>
                            <FaHeart
                                size={35}
                                className="text-red-500 cursor-pointer hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    <p className="text-gray-700">
                        <span className="font-semibold text-[#E67E22]">Restaurant:</span> {restaurant}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold text-[#E67E22]">Location:</span> {location}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold text-[#E67E22]">Reviewer:</span> {name}
                    </p>

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
                </div>

                <div className="mt-4 flex justify-end">
                    <Link to={`/viewDetail/${review._id}`} className="btn btn-primary border-none text-white font-semibold shadow-md">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;