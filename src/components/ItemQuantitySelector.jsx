import React, { useState } from 'react';

const ItemQuantitySelector = () => {
    const [quantity, setQuantity] = useState(1);

    const handleChange = (e) => setQuantity(Number(e.target.value));

    return (
        <div>
            <label htmlFor="quantity">Cantidad: </label>
            <input type="number" id="quantity" value={quantity} onChange={handleChange} min="1" />
        </div>
    );
};

export default ItemQuantitySelector;
