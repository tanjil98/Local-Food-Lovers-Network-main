import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa6';
import useAxios from '../hooks/useAxios';
import { User } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const { createUser, signInWithGoogle, setUser, updateUserProfile } = use(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const axiosInstance = useAxios();
    const navigate = useNavigate();
    // const [error,setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        // console.log(displayName, email, photoURL, password, confirmPassword);
        // setError("");

        if (!/[A-Z]/.test(password)) {
            // setError("Password must contain at least one uppercase letter!");
            toast.error("Password must contain at least one uppercase letter!");
            return;
        }

        if (!/[a-z]/.test(password)) {
            // setError("Password must contain at least one lowercase letter!");
            toast.error("Password must contain at least one lowercase letter!");
            return;
        }

        if (password.length < 6) {
            // setError("Password must be at least 6 characters long!");
            toast.error("Password must be at least 6 characters long!");
            return;
        }

        if (password !== confirmPassword) {
            // setError("Passwords do not match!");
            toast.error("Passwords do not match!");
            return;
        }

        // toast.loading("Creating user...", { id: "create-user" });

        createUser(email, password)
            .then((result) => {
                // console.log(result.user);
                // const user = result.user;
                // setUser({
                //     ...user,
                //     displayName: name,
                //     photoURL: photoURL
                // })
                updateUserProfile(displayName, photoURL)
                    .then(() => {
                        setUser({
                            ...User,
                            displayName,
                            photoURL,
                        });
                    })
                const newUser = {
                    name: displayName,
                    email: result.user.email,
                    photoURL: photoURL
                }
                axiosInstance.post('/user', newUser)
                    .then(() => {

                    })
                e.target.reset();
                navigate("/");
            })
            .catch((error) => {
                // console.log(error);
                toast.error(error.message);
            });

    }

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInWithGoogle()
            .then(result => {
                setUser(result.user)
                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    photoURL: result.user.photoURL
                }

                axiosInstance.post('/user', newUser)
                    .then(data => {
                        if (data.data.insertedId) {
                            alert('new user crate done..')
                        }
                    })

                navigate("/");
            })
            .catch(err => {
                // console.log(err)
                toast.error(err.message);
            })
    }

    return (
        <div>
            <div>

            </div>
            <div class="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-white to-[#FFF0DA] flex items-center justify-center px-4">
                <div class="w-full max-w-md bg-white backdrop-blur-md rounded-2xl shadow-2xl p-8 my-40">

                    {/* <!-- Logo / Title --> */}
                    <div class="text-center mb-6">
                        <div class="flex justify-center mb-2">

                        </div>
                        <h2 class="text-3xl font-bold text-[#F39C12]">Join Food Lovers</h2>
                        <p class="text-sm text-gray-600 mt-1">Create your account and start sharing your taste journey</p>
                    </div>

                    {/* <!-- Form --> */}
                    <form onSubmit={handleRegister} class="space-y-4">
                        {/* name */}
                        <div>
                            <label class="block text-gray-700 font-medium mb-1">Name</label>
                            <input name='name' type="text" placeholder="Your full name" class="input input-bordered w-full border-[#F39C12]/40 focus:outline-none focus:ring-2 focus:ring-[#F39C12]" required />
                        </div>

                        {/* email */}
                        <div>
                            <label class="block text-gray-700 font-medium mb-1">Email</label>
                            <input name='email' type="email" placeholder="you@example.com" class="input input-bordered w-full border-[#F39C12]/40 focus:outline-none focus:ring-2 focus:ring-[#F39C12]" required />
                        </div>

                        {/* photoURL */}
                        <div >
                            <label class="block text-gray-700 font-medium mb-1">Photo URL</label>
                            <input name='photoURL' type="text" placeholder="Link to your profile photo" class="input input-bordered w-full border-[#F39C12]/40 focus:outline-none focus:ring-2 focus:ring-[#F39C12]" required />

                        </div>

                        {/* password */}
                        <div className='relative'>
                            <label class="block text-gray-700 font-medium mb-1">Password</label>
                            <input name='password' type={showPassword ? "text" : "password"} placeholder="••••••••" class="input input-bordered w-full border-[#F39C12]/40 focus:outline-none focus:ring-2 focus:ring-[#F39C12]" required />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-10 text-gray-600 hover:text-[#F39C12]"
                            >
                                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>
                        </div>

                        <div>
                            <label class="block text-gray-700 font-medium mb-1">Confirm Password</label>
                            <input name='confirmPassword' type="password" placeholder="Re-type password" class="input input-bordered w-full border-[#F39C12]/40 focus:outline-none focus:ring-2 focus:ring-[#F39C12]" required />
                        </div>
                        {/* <div>
                        {
                            error && <p className='text-red-500'>{error}</p>
                        }
                    </div> */}

                        <button type="submit" class="btn btn-primary w-full bg-gradient-to-r from-[#F39C12] to-[#E67E22] border-none text-white font-semibold shadow-md hover:opacity-90 hover:scale-[1.02] transition-transform duration-200">
                            Create Account
                        </button>

                        <div class="divider text-gray-500 text-sm">or</div>

                        {/* <!-- Continue with Google --> */}
                        <button
                            onClick={handleGoogleLogin}
                            type="button"
                            class="btn w-full bg-white text-[#F39C12] border-2 border-[#F39C12] hover:bg-gray-100 flex items-center justify-center gap-2"
                        >
                            <FcGoogle size={20} />
                            Continue with Google
                        </button>

                        <p class="text-center text-sm text-gray-600 mt-3">
                            Already have an account?
                            <Link to={'/login'} class="text-[#E67E22] font-semibold hover:underline">Login here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;