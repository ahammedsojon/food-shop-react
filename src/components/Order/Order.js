import React from 'react';
import './Order.css';

const Order = (props) => {
    return (
        <>
            <li>{props.order}</li>
        </>
    );
};

export default Order;