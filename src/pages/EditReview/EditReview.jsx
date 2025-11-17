import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router';
import useAxios from '../../hooks/useAxios';

const EditReview = () => {
    const { user } = use(AuthContext);
    const axiosInstance = useAxios();
    const navigate = useNavigate();

    const existingReview = useLoaderData();
    // console.log(existingReview);

    const handleEditSubmit = (e) => {
        e.preventDefault();

        const updatedReview = {
            foodName: e.target.foodName.value,
            foodImage: e.target.foodImage.value,
            restaurant: e.target.restaurant.value,
            location: e.target.location.value,
            rating: parseFloat(e.target.rating.value),
            review: e.target.review.value,
            name: e.target.name.value,
            email: e.target.email.value,
            photoURL: e.target.photoURL.value,
            createdAt: existingReview.createdAt,
            updatedAt: new Date().toISOString(),
        };

        if (updatedReview.rating < 1 || updatedReview.rating > 5) {
            toast.error("Rating must be a number between 1 and 5");
            return;
        }

        axiosInstance.put(`/reviews/${existingReview._id}`, updatedReview)
            .then(() => {
                toast.success("Review updated successfully!");
                navigate('/myReview'); 
            })
            .catch((error) => {
                console.error(error);
                toast.error("Something went wrong while updating!");
            });

        
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-[#FFF4DE] to-[#FFEFD5] flex flex-col-reverse md:flex-row gap-5 items-center justify-center px-6 py-20 md:p-35">

            {/* Left Side: Edit Form */}
            <div className="w-full md:w-1/2 bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-8 md:p-10">
                <h2 className="text-3xl font-bold text-[#F39C12] mb-6 text-center">Edit Your Review</h2>

                <form onSubmit={handleEditSubmit} className="space-y-5">

                    {/* Food Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Food Name</label>
                        <input
                            name='foodName'
                            type="text"
                            defaultValue={existingReview.foodName}
                            className="input input-bordered w-full border-[#F39C12]/40 focus:ring-2 focus:outline-none focus:ring-[#F39C12]"
                            required
                        />
                    </div>

                    {/* Food Image */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Food Image URL</label>
                        <input
                            name='foodImage'
                            type="text"
                            defaultValue={existingReview.foodImage}
                            className="input input-bordered w-full border-[#F39C12]/40 focus:ring-2 focus:outline-none focus:ring-[#F39C12]"
                            required
                        />
                    </div>

                    {/* Restaurant */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Restaurant Name</label>
                        <input
                            name='restaurant'
                            type="text"
                            defaultValue={existingReview.restaurant}
                            className="input input-bordered w-full border-[#F39C12]/40 focus:ring-2 focus:outline-none focus:ring-[#F39C12]"
                            required
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Location</label>
                        <input
                            name='location'
                            type="text"
                            defaultValue={existingReview.location}
                            className="input input-bordered w-full border-[#F39C12]/40 focus:ring-2 focus:outline-none focus:ring-[#F39C12]"
                            required
                        />
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Star Rating</label>
                        <input
                            name='rating'
                            type=""
                            defaultValue={existingReview.rating}
                            className="input input-bordered w-full border-[#F39C12]/40 focus:ring-2 focus:outline-none focus:ring-[#F39C12]"
                            required
                        />
                    </div>

                    {/* Review Text */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Your Review</label>
                        <textarea
                            name='review'
                            rows="4"
                            defaultValue={existingReview.review}
                            className="textarea textarea-bordered w-full border-[#F39C12]/40 focus:ring-2 focus:outline-none focus:ring-[#F39C12]"
                            required
                        ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Name */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Name</label>
                            <input
                                name='name'
                                type="text"
                                defaultValue={user.displayName || existingReview.name}
                                readOnly
                                className="input focus:outline-none input-bordered w-full border-[#F39C12]/40 focus:ring-2 focus:ring-[#F39C12]"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Email</label>
                            <input
                                name='email'
                                type="email"
                                defaultValue={user.email || existingReview.email}
                                readOnly
                                className="input input-bordered w-full border-[#F39C12]/40 focus:ring-2 focus:outline-none focus:ring-[#F39C12]"
                            />
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Photo URL</label>
                            <input
                                name='photoURL'
                                type="text"
                                defaultValue={user.photoURL || existingReview.photoURL}
                                readOnly
                                className="input input-bordered w-full border-[#F39C12]/40 focus:outline-none focus:ring-2 focus:ring-[#F39C12]"
                            />
                        </div>
                    </div>

                    {/* Update Button */}
                    <button
                        type="submit"
                        className="btn btn-primary w-full bg-primary border-none text-white font-semibold shadow-md hover:opacity-90 hover:scale-[1.02] transition-transform duration-200"
                    >
                        Update Review
                    </button>
                </form>
            </div>

            {/* Right Side: Slogan */}
            <div className="md:w-1/2 w-full mt-8 md:mt-0 md:pl-10 flex flex-col items-center text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-extrabold text-[#F39C12] mb-4 leading-tight">
                    Update Your <br /> <span className="text-[#E67E22]">Flavor Story</span>
                </h1>
                <p className="text-lg text-gray-700 max-w-md">
                    Refine your review — because every bite deserves your best words.
                </p>

                <div className="mt-8">
                    <div className="h-1 w-20 bg-[#F39C12] rounded-full mb-3"></div>
                    <p className="text-sm text-gray-500 italic">
                        “Your updated review might inspire someone’s next favorite dish.”
                    </p>
                </div>
            </div>

        </div>
    );
};

export default EditReview;
