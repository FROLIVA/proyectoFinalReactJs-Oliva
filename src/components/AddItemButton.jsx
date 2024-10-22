import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const AddItemButton = ({ item }) => {
    const { addItemToCart } = useContext(CartContext);

    const handleClick = () => addItemToCart(item);

    return <button onClick={handleClick} className="btn btn-success">Agregar al carrito</button>;
};

export default AddItemButton;
