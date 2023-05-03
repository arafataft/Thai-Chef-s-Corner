/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {
    const ChefDetailsInfo = useLoaderData();
    let {id} = useParams();

    const chef=ChefDetailsInfo.find(info=>info.id==id);
    console.log(chef);
    const {name, image, experience, numOfLike, description, recipes, numOfRecipe}=chef

    return (
        <div>
            
        </div>
    );
};

export default ChefDetails;