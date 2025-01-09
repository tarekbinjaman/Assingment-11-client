import React from 'react';
import Navbar from '../Pages/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/shared/Footer';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
