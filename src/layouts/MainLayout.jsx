import React from 'react';
import Home from '../pages/Home/Home';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import { Toaster } from "react-hot-toast";
import Footer from '../components/Footer/Footer';


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </div>

    );
};

export default MainLayout;