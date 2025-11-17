import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import ReviewCard from '../../components/reviewCard/ReviewCard';
import Aos from 'aos';
import 'aos/dist/aos.css';
import useAxios from '../../hooks/useAxios';
import LoaderSpinner from '../../components/LoaderSpinner/LoaderSpinner';

const AllReview = () => {
    const allReviews = useLoaderData();
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isSearched, setIsSearched] = useState(false); 
    const axiosInstance = useAxios();

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            offset: 120,
        });
    }, []);

    useEffect(() => {
        if (allReviews && allReviews.length > 0) Aos.refresh();
    }, [allReviews]);

    const handleSearch = () => {
        const search_text = searchText.trim();
        setLoading(true);
        setIsSearched(true); 


        if (!search_text) {
            setReviews([]);
            setLoading(false);
            setIsSearched(false); 
            return;
        }

        axiosInstance.get(`/search?search=${search_text}`)
            .then(res => {
                setReviews(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    };

    const displayedReviews = isSearched ? reviews : allReviews;

    return (
        <div className="w-11/12 mx-auto my-32">
            <h1 className="text-4xl font-semibold text-center text-[#F39C12] mb-6">
                Explore All Food Reviews
            </h1>

            <div className="flex justify-center mb-12">
                <div className="relative w-full max-w-md flex items-center">
                    <svg
                        className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.2"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>

                    <input
                        type="text"
                        name="search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search by food name..."
                        className="w-full rounded-l-full border border-[#F39C12]/40 pl-12 pr-4 py-3 
                        text-gray-700 placeholder-gray-400 shadow-sm
                        focus:outline-none focus:ring-2 focus:ring-[#F39C12]
                        transition-all duration-300"
                    />

                    <button
                        onClick={handleSearch}
                        className="px-6 py-3 rounded-r-full btn-primary text-white font-semibold"
                    >
                        Search
                    </button>
                </div>
            </div>

            {loading && <LoaderSpinner />}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {loading ? (
                    <LoaderSpinner />
                ) : displayedReviews.length > 0 ? (
                    displayedReviews.map((review, idx) => (
                        <ReviewCard key={review._id} review={review} delay={idx * 30} />
                    ))
                ) : (
                    isSearched && (
                        <p className="text-center text-gray-500 col-span-2">
                            No reviews found for your search.
                        </p>
                    )
                )}
            </div>
        </div>
    );
};

export default AllReview;
