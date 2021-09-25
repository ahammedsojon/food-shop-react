import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import './Food.css'
const Food = (props) => {
    // console.log(props.food);
    const { strMeal, strMealThumb, strCategory, strYoutube } = props.food;
    return (
        <div className="food">
            <div className="food-image">
                <img src={strMealThumb} alt="" />
            </div>
            <div className="food-details">
                <h3>{strMeal}</h3>
                <p><small>Category: {strCategory}</small></p>
                <button className="btn-regular"><a target="_balnk" href={strYoutube}><FontAwesomeIcon icon={faPlayCircle} /> watch recipe</a> </button>
                <button
                    onClick={() => props.handleAddToOrder(props.food)}
                    className="btn-regular"><FontAwesomeIcon icon={faShoppingCart} /> add to order
                </button>
            </div>

        </div>
    );
};

export default Food;