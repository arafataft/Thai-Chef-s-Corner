/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleChef from '../../components/SingleChef';

const ChefDetails = () => {
    const ChefDetailsInfo = useLoaderData();
    let {id} = useParams();

    const Chef=ChefDetailsInfo.find(info=>info.id==id);


    const { recipes }=Chef;

    return (
        <div>
            <SingleChef Chef={Chef}></SingleChef>
        </div>
    );
};

export default ChefDetails;