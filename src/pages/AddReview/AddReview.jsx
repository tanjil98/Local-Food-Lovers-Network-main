import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import useAxios from '../../hooks/useAxios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const AddReview = () => {
    const {user} =use(AuthContext);
    // console.log(user)
    const axiosInstance = useAxios();
    const navigate = useNavigate();

    const handleReviewSubmit =(e)=>{
        e.preventDefault();
        const foodName = e.target.foodName.value;
        const foodImage = e.target.foodImage.value;
        const restaurant = e.target.restaurant.value;
        const location = e.target.location.value;
        const rating = parseFloat(e.target.rating.value);
        const review = e.target.review.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        // console.log(foodImage,restaurant,location,rating,review,name,email,photoURL);
        if (rating < 1 || rating > 5) {
            toast.error("Rating must be a number between 1 and 5");
            return;
        }

        const newReview = {
            foodName,
            foodImage,
            restaurant,
            location,
            rating: rating,  
            review,
            name,
            email,
            photoURL,
            createdAt: new Date().toISOString(),  
        };
        // console.log(newReview);
        axiosInstance.post('/reviews',newReview)
        .then(()=>{
            toast.success("your review is pleased....")
            e.target.reset();
            navigate('/');
        })

    }


    return (
        <div class="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-[#FFF4DE] to-[#FFEFD5] flex flex-col-reverse md:flex-row gap-5  items-center justify-center px-6 py-20 md:p-35">

            <div class="w-full md:w-1/2 bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-8 md:p-10">
                <h2 class="text-3xl font-bold text-[#F39C12] mb-6 text-center">Add Your Review</h2>

                <form onSubmit={handleReviewSubmit} class="space-y-5">

                    {/* food Name  */}
                    <div>
                        <label class="block text-gray-700 font-medium mb-1">Food Name</label>
                        <input name='foodName' type="text" placeholder="type food name" class="input input-bordered w-full border-[#F39C12]/40 focus:ring-2 focus:outline-none focus:ring-[#F39C12]" required />
                    </div>

                    {/* food image  */}
                    <div>
                        <label class="block text-gray-700 font-medium mb-1">Food Image URL</label>
                        <input name='foodImage' type="text" placeholder="Paste food image link" class="input input-bordered w-full border-[#F39C12]/40 focus:ring-2 focus:outline-none focus:ring-[#F39C12]" required/>
                    </div>

                    {/* RestaurantName  */}
                    <div>
                        <label class="block text-gray-700 font-medium mb-1">Restaurant Name</label>
                        <input name='restaurant' type="text" placeholder="Restaurant name" class="input input-bordered w-full border-[#F39C12]/40 focus:ring-2 focus:outline-none focus:ring-[#F39C12]" required/>
                    </div>

                    {/* location  */}
                    <div>
                        <label class="block text-gray-700 font-medium mb-1">Location</label>
                        <input name='location' type="text" placeholder="City or area" class="input input-bordered w-full border-[#F39C12]/40 focus:ring-2 focus:outline-none focus:ring-[#F39C12]" required/>
                    </div>

                    {/* rating */}
                    <div>
                        <label class="block text-gray-700 font-medium mb-1">Star Rating</label>
                        <input name='rating' type="" placeholder="Rate between 1 to 5" class="input input-bordered w-full border-[#F39C12]/40 focus:ring-2 focus:outline-none focus:ring-[#F39C12]" required/>
                    </div>

                    {/* review  */}
                    <div>
                        <label class="block text-gray-700 font-medium mb-1">Your Review</label>
                        <textarea name='review' rows="4" placeholder="Write your experience..." class="textarea textarea-bordered w-full border-[#F39C12]/40 focus:ring-2 focus:outline-none focus:ring-[#F39C12]" required></textarea >
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* name  */}
                        <div>
                            <label class="block text-gray-700 font-medium mb-1">Name</label>
                            <input name='name' type="text" placeholder="Your name" readOnly defaultValue={user.displayName} class="input focus:outline-none input-bordered w-full border-[#F39C12]/40 focus:ring-2 focus:ring-[#F39C12]" />
                        </div>
                        {/* email  */}
                        <div>
                            <label class="block text-gray-700 font-medium mb-1">Email</label>
                            <input name='email' type="email" readOnly defaultValue={user.email} placeholder="you@example.com" class="input input-bordered w-full border-[#F39C12]/40 focus:ring-2 focus:outline-none focus:ring-[#F39C12]" />
                        </div>

                        {/* photo URL  */}
                        <div>
                            <label class="block text-gray-700 font-medium mb-1">Photo URL</label>
                            <input name='photoURL' type="text" readOnly defaultValue={user.photoURL} placeholder="Your photo link" class="input input-bordered w-full border-[#F39C12]/40 focus:outline-none focus:ring-2 focus:ring-[#F39C12]" />
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary w-full bg-primary border-none text-white font-semibold shadow-md">
                        Submit Review
                    </button>
                </form>
            </div>
            <div class="md:w-1/2 w-full mt-8 md:mt-0 md:pl-10 flex flex-col items-center text-center md:text-left">
                <h1 class="text-5xl md:text-6xl font-extrabold text-[#F39C12] mb-4 leading-tight">
                    Share Your <br /> <span class="text-[#E67E22]">Flavor Story</span>
                </h1>
                <p class="text-lg text-gray-700 max-w-md">
                    Every meal tells a story — from sizzling street bites to cozy homemade recipes.
                    Add your review and let others taste your journey
                </p>

                <div class="mt-8">
                    <div class="h-1 w-20 bg-[#F39C12] rounded-full mb-3"></div>
                    <p class="text-sm text-gray-500 italic">“Your words can inspire someone's next favorite meal.”</p>
                </div>
            </div>

        </div>
    );
};

export default AddReview;