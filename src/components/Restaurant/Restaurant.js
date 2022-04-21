import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import OrderList from '../OrderList/OrderList';
import './Restaurant.css';

const Restaurant = () => {
    const [meals, setMeals] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(res => res.json())
        .then(data => setMeals(data.meals));
    }, []);

    const handleAddToOrder = meal => {
        const newOrder = [...order, meal];
        setOrder(newOrder);
    }

    return (
        <div className='restaurant-menu'>
            <div className='meals-container'>
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                        handleAddToOrder={handleAddToOrder}
                    ></Meal>)
                }
            </div>
            <div className='order-list'>
                <OrderList order={order}></OrderList>
            </div>
        </div>
    );
};

export default Restaurant;