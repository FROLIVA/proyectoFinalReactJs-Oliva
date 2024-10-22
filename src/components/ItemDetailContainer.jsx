import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchedItem = fetchItemById(id);
        setItem(fetchedItem);
    }, [id]);

    const fetchItemById = (id) => {
        const items = [
            { id: 1, name: 'Nike Air Max', price: 120, image: '/images/AirMax.jpg', description: 'Zapatillas icónicas para comodidad y estilo diario.' },
            { id: 2, name: 'Nike Air Force 1 07 LV8', price: 150, image: '/images/AirForce.jpg', description: 'Clásicas y versátiles, perfectas para cualquier ocasión.' },
            { id: 3, name: 'Nike Air Jordan 1 Retro High', price: 283, image: '/images/AirJordan.jpg', description: 'Icono del baloncesto, estilo único y comodidad superior.' },
            { id: 4, name: 'Adidas Forum Low', price: 100, image: '/images/ForumLow.jpg', description: '"Estilo retro y comodidad en cada paso."' },
            { id: 5, name: 'Puma Suede XL', price: 125, image: '/images/suede.jpg', description: 'Un clásico atemporal con elegancia y confort.' },
            { id: 8, name: 'New Balance 550', price: 300, image: '/images/550.jpg', description: 'Estilo retro con soporte y comodidad excepcionales.' },
            { id: 9, name: 'New Balance 530', price: 285, image: '/images/530.jpg', description: 'Comodidad diaria con un diseño clásico y elegante.' },
            { id: 9, name: 'Puma Suede Classic', price: 100, image: '/images/SuedeClassic.jpg', description: 'Comodidad diaria con un diseño clásico y elegante.' },
        ];

        return items.find(item => item.id === parseInt(id));
    };

    return (
        <div className="container mt-5">
            {item ? <ItemDetail item={item} /> : <p>Cargando detalles...</p>}
        </div>
    );
};

export default ItemDetailContainer;
