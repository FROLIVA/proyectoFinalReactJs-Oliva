import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProductsByCategory(categoryId).then((data) => setProducts(data));
    }, [categoryId]); 

    return (
        <div className="item-list-container">
            <h2>{categoryId ? `Categoría: ${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}` : "Coroná tu outfit"}</h2>
            <ItemList items={products} />
        </div>
    );
};

// Simulación de una función que obtiene productos según la categoría
const fetchProductsByCategory = async (categoryId) => {
    const allProducts = [
        { id: 1, name: 'Nike Air Max', category: 'nike', price: 120, image: '/images/AirMax.jpg' },
        { id: 2, name: 'Nike Air Force 1 07 LV8', category: 'nike', price: 150, image: '/images/AirForce.jpg' },
        { id: 3, name: 'Nike Air Jordan 1 Retro High', category: 'adidas', price: 283, image: '/images/AirJordan.jpg' },
        { id: 4, name: 'Adidas Forum Low', category: 'adidas', price: 100, image: '/images/ForumLow.jpg' },
        { id: 5, name: 'Puma Suede XL', category: 'puma', price: 125, image: '/images/suede.jpg' },
        { id: 6, name: 'Puma Palermo', category: 'puma', price: 300, image: '/images/Palermo.jpg' },
        { id: 7, name: 'Puma Park Lifestyle', category: 'puma', price: 285, image: '/images/Park.jpg' },
        { id: 8, name: 'New Balance 550', category: 'newbalance', price: 300, image: '/images/550.jpg' },
        { id: 9, name: 'New Balance 530', category: 'newbalance', price: 285, image: '/images/530.jpg' },
        { id: 10, name: 'Puma Suede Classic', category: 'puma', price: 100, image: '/images/SuedeClassic.jpg' },
    ];

    if (categoryId) {
        return allProducts.filter((product) => product.category.toLowerCase() === categoryId.toLowerCase());
    }
    return allProducts;
};

export default ItemListContainer;
