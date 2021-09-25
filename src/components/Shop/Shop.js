import React, { useEffect, useState } from 'react';
import { addTodb, getStoredData } from '../../utilities/fakedb';
import Food from '../Food/Food';
import Order from '../Order/Order';
import './Shop.css';
const Shop = () => {
    const [foods, setFoods] = useState([]);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, []);

    // if there has an url where stored all food, then localStorage could work
    /*
    useEffect(() => {
        const savedFood = getStoredData();
        const storedFood = [];
        if (foods.length) {
            for (const key in savedFood) {
                console.log(key)
                const matchedFood = foods.find(food => food.idMeal === key);
                storedFood.push(matchedFood);
            }
            setOrders(storedFood)
        }
    }, [foods])
    */

    const handleSearch = e => {
        const searchText = e.target.value;
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }

    const handleAddToOrder = food => {
        const newOrder = [...orders, food];
        addTodb(food.idMeal);
        setOrders(newOrder);
    }

    return (
        <>
            <div className="search-container">
                <input
                    onChange={handleSearch}
                    type="text" placeholder="Search Food" />
            </div>
            <div className="shop-container">
                <div className="food-container">
                    {foods.map(food => <Food
                        key={food.idMeal}
                        food={food}
                        handleAddToOrder={handleAddToOrder}></Food>)}
                </div>
                <div className="order-container">
                    <h2 className="order-title">Food Order List</h2>
                    <ol>
                        {orders.map(order => <Order
                            order={order.strMeal}></Order>)}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default Shop;