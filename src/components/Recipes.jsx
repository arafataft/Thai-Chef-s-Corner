/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Row } from 'react-bootstrap';
import SingleRecipe from './SingleRecipe';

const Recipes = ({recipes}) => {
    return (
        <div className='container my-5 py-5'>
            <Row>
        {recipes.map((recipe,index )=>
          <SingleRecipe recipe={recipe} key={index} ></SingleRecipe>
        )}

      </Row>
        </div>
    );
};

export default Recipes;