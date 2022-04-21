import React, { useEffect, useState } from 'react';
import { addToDb, getDb } from '../../localstorage/localstorage';
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

    useEffect(() => {
        // console.log('call local storage');
        if(meals.length){
            const savedDb = getDb();
            const savedOrder = [];
            for (const mealId in savedDb){
                // console.log(mealId);
                const meal = meals.find(ml => ml.idMeal === mealId);
                const quantity = savedDb[mealId];
                meal.quantity = quantity;
                // console.log(mealId, meal);
                savedOrder.push(meal);
            }
            // console.log(savedDb);
            setOrder(savedOrder);
        }
    }, [meals]);

    const handleAddToOrder = meal => {
        meal.quantity = 1;
        const newOrder = [...order, meal];
        setOrder(newOrder);
        // console.log(meal);
        addToDb(meal.idMeal);
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