import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import LoaderSpinner from '../../components/LoaderSpinner/LoaderSpinner';

const MyReview = () => {
    const { user } = use(AuthContext);
    const axiosInstance = useAxios();
    const [myReview, setReview] = useState([]);
    const [loadingReviews, setLoadingReviews] = useState(true);

    useEffect(() => {
        setLoadingReviews(true);
        axiosInstance.get(`https://local-food-lovers-network-server-fawn.vercel.app/myReviews?email=${user.email}`)
            .then((data) => {
                setReview(data.data)
                setLoadingReviews(false);
            })
    }, [user, setReview, axiosInstance])
    // console.log(loadingReviews);

    if (loadingReviews) {
        return (
            <div className="flex justify-center items-center h-screen">
                <LoaderSpinner></LoaderSpinner>
            </div>
        );
    }


    //for delete 
    const handleReviewDelete = (_id) => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`https://local-food-lovers-network-server-fawn.vercel.app/reviews/${_id}`)
                    .then(data => {
                        // console.log(data.data.deletedCount);
                        if (data.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your review has been deleted.",
                                icon: "success"
                            });
                            const remainingReviews = myReview.filter(review => review._id !== _id);
                            setReview(remainingReviews);
                        }
                    })


            }
        });
    }

    // console.log(myReview);
    return (
        <div className='my-40'>
            <div className="overflow-x-auto w-11/12 mx-auto my-10">
                <h2 className="text-3xl font-semibold text-center text-[#F39C12] mb-8">
                    My Review's
                </h2>
                <table className="table bg-white/90 border border-[#F39C12]/30 shadow-md rounded-xl overflow-hidden">
                    {/* Head */}
                    <thead className="bg-gradient-to-r from-[#F39C12] to-[#E67E22] text-white text-sm">
                        <tr>
                            <th>#</th>
                            <th>Food Image</th>
                            <th>Food Name</th>
                            <th>Restaurant</th>
                            <th>Posted Date</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody className="text-gray-700">
                        {/* Row 1 */}
                        {myReview.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center py-10 text-gray-500 italic">
                                    No favorite reviews found.
                                </td>
                            </tr>
                        ) : (myReview.map((review, index) =>
                            <tr key={review._id} className="hover:bg-[#FFF8E7] transition-all">
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-14 w-14">
                                            <img
                                                src={review.foodImage}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="font-semibold">{review.foodName}</td>
                                <td>{review.restaurant}</td>
                                <td>{review.createdAt.split("T")[0]}</td>
                                <td className="text-center space-y-2 md:space-y-0 md:space-x-2">
                                    <Link to={`/editReview/${review._id}`} className="btn btn-xs bg-[#F39C12] hover:bg-[#E67E22] text-white border-none">
                                        Edit
                                    </Link>
                                    <button onClick={() => handleReviewDelete(review._id)} className="btn btn-xs border-2 border-red-400 text-red-400 ">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>

                    {/* Foot */}
                    <tfoot className="bg-[#FFF8E7] text-gray-700 font-semibold">
                        <tr>
                            <th>#</th>
                            <th>Food Image</th>
                            <th>Food Name</th>
                            <th>Restaurant</th>
                            <th>Posted Date</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
    );
};

export default MyReview;