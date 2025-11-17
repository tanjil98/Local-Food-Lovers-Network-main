import { Link, useLoaderData } from 'react-router';
import Banner from '../../components/Banner/Banner';
import TopRatedReviewCard from '../../components/TopRatedCard/TopRatedReviewCard';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Footer from '../../components/Footer/Footer';

const Home = () => {
    const latestReviews = useLoaderData();

    //in animation 
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            offset: 120,
        });
    }, []);

    useEffect(() => {
        if (latestReviews && latestReviews.length > 0) {
            Aos.refreshHard();
        }
    }, [latestReviews]);


    return (
        <div>
            <Banner></Banner>
            {/* --- Section 1: Discover Local Flavors --- */}
            <section data-aos="fade-up" className="py-20 bg-gradient-to-br from-[#FFF8E7] via-white to-[#FFEFD5]">
                <div className="w-11/12 mx-auto text-center space-y-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#F39C12]">
                        Discover Local <span className="text-[#E67E22]">Flavors</span> 
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
                        Explore your city's hidden gems - from cozy cafés to spicy street food stalls.
                        Every meal tells a story, and every flavor deserves to be celebrated.
                    </p>
                </div>
            </section>


            {/* top picks section  */}
            <div className='py-20 w-11/12 mx-auto'>
                <h1 className='text-center text-4xl text-[#F39C12] font-semibold'>Top Picks by Food Lovers</h1>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                    {
                        latestReviews.map((review,idx) => <TopRatedReviewCard key={review._id} review={review} delay={idx * 50}></TopRatedReviewCard>)
                    }
                </div>
                <div className="flex items-center justify-center my-10">
                    <div className="w-full h-px bg-[#F39C12]"></div>
                    <Link
                        to="/allReview"
                        className="mx-4 px-6 py-2 btn btn-primary  text-white font-semibold rounded-full shadow-md"
                    >
                        Show All
                    </Link>
                    <div className="w-full h-px bg-[#F39C12]"></div>
                </div>
            </div>

            {/* ---  Meet Our Top Foodies --- */}
            <section data-aos="fade-up" className=" py-20 bg-gradient-to-br from-[#FFF8E7] via-white to-[#FFEFD5]">
                <div className="w-11/12 mx-auto text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#F39C12]">
                        Meet Our <span className="text-[#E67E22]">Top reviewers</span> 
                    </h2>
                    <p className="text-gray-700 text-lg mt-3 max-w-2xl mx-auto">
                        Our most passionate food reviewers - sharing love, taste, and honest bites from every corner 
                    </p>
                </div>

                {/*  Cards */}
                <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/*  1 */}
                    <div className="bg-white/90 border border-[#F39C12]/20 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-[1.03] transition-transform duration-300">
                        <img
                            src="https://avatars.githubusercontent.com/u/190505557?v=4"
                            alt=""
                            className="w-24 h-24 rounded-full border-4 border-[#F39C12] object-cover"
                        />
                        <h3 className="text-xl font-bold text-[#E67E22] mt-4">Arif Billah</h3>
                        <p className="text-gray-600"> 28 Reviews</p>
                        <p className="italic text-gray-500 mt-2 text-sm">“Street food is pure happiness.”</p>
                    </div>

                    {/*  2 */}
                    <div className="bg-white/90 border border-[#F39C12]/20 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-[1.03] transition-transform duration-300">
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600"
                            alt=""
                            className="w-24 h-24 rounded-full border-4 border-[#F39C12] object-cover"
                        />
                        <h3 className="text-xl font-bold text-[#E67E22] mt-4">Tanvir Hasan</h3>
                        <p className="text-gray-600"> 22 Reviews</p>
                        <p className="italic text-gray-500 mt-2 text-sm">“Good food, good mood, always!”</p>
                    </div>

                    {/*  3 */}
                    <div className="bg-white/90 border border-[#F39C12]/20 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-[1.03] transition-transform duration-300">
                        <img
                            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600"
                            alt=""
                            className="w-24 h-24 rounded-full border-4 border-[#F39C12] object-cover"
                        />
                        <h3 className="text-xl font-bold text-[#E67E22] mt-4">Sadia Rahman</h3>
                        <p className="text-gray-600"> 19 Reviews</p>
                        <p className="italic text-gray-500 mt-2 text-sm">“Food connects people more than anything.”</p>
                    </div>

                </div>
            </section>

            {/* --- Taste the Stories --- */}
            <section data-aos="fade-up" className="my-10 md:my-20 py-20 bg-gradient-to-br from-[#FFF8E7] via-white to-[#FFEFD5]">
                <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* Left: Text Content */}
                    <div className="md:w-1/2 space-y-6 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#F39C12] leading-tight">
                            Taste the <span className="text-[#E67E22]">Stories</span> Behind Every Bite
                        </h2>

                        <p className="text-gray-700 text-lg max-w-md mx-auto md:mx-0">
                            From street vendors to home chefs — everyone has a flavor worth sharing.
                            Read inspiring food stories and be part of a growing community that celebrates authentic taste and culture.
                        </p>
                    </div>

                    {/* Right: Image */}
                    <div className="md:w-1/2 relative">
                        <img
                            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=900"
                            alt="Food Story"
                            className="rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-300"
                        />
                        <div className="absolute -bottom-5 -right-5 bg-[#F39C12]/10 w-40 h-40 rounded-full blur-2xl"></div>
                    </div>

                </div>
            </section>

            {/* --- Newsletter Section --- */}
            <section
                data-aos="fade-up"
                className="relative py-20 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1600')",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 w-11/12 mx-auto text-center text-white space-y-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold">
                        Subscribe to Our <span className="text-[#F39C12]">Food Lovers</span> Newsletter 
                    </h2>
                    <p className="text-gray-200 max-w-2xl mx-auto text-lg">
                        Get tasty updates, exclusive discounts, and delicious food stories delivered right to your inbox.
                    </p>

                    {/* Newsletter Form */}
                    <div className="flex justify-center mt-6">
                        <div className="w-11/12 max-w-md mx-auto flex flex-col sm:flex-row items-stretch sm:items-center overflow-hidden shadow-sm rounded-lg border border-[#F39C12]/40 bg-white">
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                className="flex-grow px-5 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F39C12] rounded-t-lg sm:rounded-t-none sm:rounded-l-lg"
                            />
                            <button
                                type="button"
                                className="px-5 py-3 bg-gradient-to-r from-[#F39C12] to-[#E67E22] text-white font-semibold hover:brightness-110 transition-all duration-200 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;