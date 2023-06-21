/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Banner from '../../components/Banner';
import AllChef from '../../components/AllChef/AllChef';
import Gallery from '../../components/Gallery/Gallery';
import Catering from '../../components/Catering';
import Aos from 'aos';

const Home = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000, // animation duration
            easing: 'ease-in-out', // animation easing
            once: true // whether animation should execute only once
        });
    }, []);
    return (
        <div>
            <div data-aos="fade-up">
            <Banner></Banner>
            </div>
            <div data-aos="fade-up">
            <AllChef></AllChef>
            </div>
            <div data-aos="fade-up">
            <Gallery></Gallery>
            </div>
            
            
            <Catering></Catering>
        </div>
    );
};

export default Home;