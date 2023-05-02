/* eslint-disable no-unused-vars */
import React from 'react';
import MenuBar from '../pages/Shared/MenuBar/MenuBar';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;