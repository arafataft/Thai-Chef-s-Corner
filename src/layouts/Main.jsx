/* eslint-disable no-unused-vars */
import React from 'react';
import MenuBar from '../pages/Shared/MenuBar/MenuBar';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div style={{ backgroundImage: "url('https://img.freepik.com/free-photo/cardboard-texture_1194-5419.jpg?", height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
            <div style={{ position: 'relative' }}>
              <Footer style={{ position: 'absolute', bottom: 0 }}></Footer>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Main;