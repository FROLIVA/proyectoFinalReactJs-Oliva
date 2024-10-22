import React from 'react';

const Brief = ({ items }) => {
    return (
        <ul className="list-group">
            {items.map(item => (
                <li key={item.id} className="list-group-item">
                    {item.name} - ${item.price} x {item.quantity}
                </li>
            ))}
        </ul>
    );
};

export default Brief;
