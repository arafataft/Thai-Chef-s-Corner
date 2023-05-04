/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../../components/Banner';
import AllChef from '../../components/AllChef';
import Gallery from '../../components/Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllChef></AllChef>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;