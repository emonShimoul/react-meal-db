import React from 'react';

const OrderList = (props) => {
    const {order} = props;
    return (
        <div>
            <h2>Order List</h2>
            <h4>Items Ordered: {order.length}</h4>
        </div>
    );
};

export default OrderList;