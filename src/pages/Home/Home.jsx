/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../../components/Banner';
import AllChef from '../../components/AllChef';
import Gallery from '../../components/Gallery/Gallery';
import Catering from '../../components/Catering';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllChef></AllChef>
            <Gallery></Gallery>
            <Catering></Catering>
        </div>
    );
};

export default Home;