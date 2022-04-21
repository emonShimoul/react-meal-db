import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const {strMeal, strInstruction, strMealThumb} = props.meal;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <button>Add this Food</button>
        </div>
    );
};

export default Meal;