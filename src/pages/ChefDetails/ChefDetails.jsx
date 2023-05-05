/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleChef from '../../components/SingleChef';
import Recipes from '../../components/Recipes';

const ChefDetails = () => {
    const ChefDetailsInfo = useLoaderData();
    let {id} = useParams();

    //find that chef which params id
    const Chef=ChefDetailsInfo.find(info=>info.id==id);


    const { recipes }=Chef;

    return (
        <div>
            <SingleChef Chef={Chef}></SingleChef>
            <Recipes recipes={recipes}></Recipes>
        </div>
    );
};

export default ChefDetails;