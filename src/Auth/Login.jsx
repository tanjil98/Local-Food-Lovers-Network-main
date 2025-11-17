import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import toast from 'react-hot-toast';
import useAxios from '../hooks/useAxios';


const Login = () => {
    const { signInWithGoogle, signInUser, setUser } = use(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const axiosInstance = useAxios();
    const navigate = useNavigate();
    const location = useLocation();

    const signInUserEmail = (e) => {
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;
        // console.log(email,password);
        // toast.loading("Login user...", { id: "create-user" });
        // console.log(email);

        signInUser(email, password)
            .then((result) => {
                setUser(result.user)
                e.target.reset();
                navigate(`${location?.state ? location.state : '/'}`);
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInWithGoogle()
            .then(result => {
                setUser(result.user);
                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    photoURL: result.user.photoURL
                }

                axiosInstance.post('/user', newUser)
                    .then(() => {
                        navigate(`${location?.state ? location.state : '/'}`);
                    })
                
            })
            .catch(err => {
                // console.log(err)
                toast.error(err.message);
            })
    }
    return (
        <div class="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-white to-[#FFF0DA] flex items-center justify-center px-4">
            <div class="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8">

                {/* <!-- Logo / Title --> */}
                <div class="text-center mb-6">
                    <h2 class="text-3xl font-bold text-[#F39C12]">Welcome Back</h2>
                    <p class="text-sm text-gray-600 mt-1">Login to continue your flavor journey </p>
                </div>

                {/* <!-- Login Form --> */}
                <form onSubmit={signInUserEmail} class="space-y-4">
                    <div>
                        <label class="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            name='email'
                            type="email"
                            placeholder="you@example.com"
                            class="input input-bordered w-full border-[#F39C12]/40 focus:outline-none focus:ring-2 focus:ring-[#F39C12]"
                        />
                    </div>

                    <div className='relative'>
                        <label class="block text-gray-700 font-medium mb-1">Password</label>
                        <input
                            name='password'
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            class="input input-bordered w-full border-[#F39C12]/40 focus:outline-none focus:ring-2 focus:ring-[#F39C12]"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-10 text-gray-600 hover:text-[#F39C12]"
                        >
                            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        class="btn btn-primary w-full bg-gradient-to-r from-[#F39C12] to-[#E67E22] border-none text-white font-semibold shadow-md hover:opacity-90 hover:scale-[1.02] transition-transform duration-200"
                        
                    >
                        Login
                    </button>

                    <div class="divider text-gray-500 text-sm">or</div>

                    {/* <!-- Continue with Google --> */}
                    <button
                        onClick={handleGoogleLogin}
                        type="button"
                        class="btn w-full bg-white text-[#F39C12] border-2 border-[#F39C12] hover:bg-gray-100 flex items-center justify-center gap-2"
                    >
                        <FcGoogle size={20}/>
                        Continue with Google
                    </button>

                    <p class="text-center text-sm text-gray-600 mt-3">
                        Don't have an account?
                        <Link to={'/register'} class="text-[#E67E22] font-semibold hover:underline">Create one</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;