import React from 'react';
import { useParams } from 'react-router-dom';

const items = [
    { id: 1, name: 'Nike Air Max', category: 'Nike', price: 120, image: '/images/AirMax.jpg' },
    { id: 2, name: 'Nike Air Force 1 07 LV8', category: 'Nike', price: 150, image: '/images/AirForce.jpg' },
    { id: 3, name: 'Nike Air Jordan 1 Retro High', category: 'Adidas', price: 150, image: '/images/AirJordan.jpg' },
    { id: 4, name: 'Adidas Forum Low', category: 'Adidas', price: 150, image: '/images/ForumLow.jpg' },
    { id: 5, name: 'Puma Suede XL', category: 'Adidas', price: 150, image: '/images/suede.jpg' },
    { id: 6, name: 'Puma Palermo', category: 'Adidas', price: 150, image: '/images/Palermo.jpg' },
    { id: 7, name: 'Puma Park Lifestyle', category: 'Adidas', price: 150, image: '/images/Park.jpg' },
    { id: 8, name: 'New Balance 550', category: 'Adidas', price: 150, image: '/images/550.jpg' },
    { id: 9, name: 'New Balance 530', category: 'Adidas', price: 150, image: '/images/530.jpg' },
    { id: 10, name: 'Puma Suede Classic', category: 'Adidas', price: 150, image: '/images/SuedeClassic.jpg' },
];

const CategoryPage = () => {
    const { categoryName } = useParams();
    const filteredItems = items.filter(item => item.category === categoryName);

    return (
        <div>
            <h1>Productos en {categoryName}</h1>
            <div className="row">
                {filteredItems.map(item => (
                    <div className="col-md-4 mb-4" key={item.id}>
                        <div className="card">
                            <img src={item.image} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">${item.price}</p>
                                <Link to={`/item/${item.id}`} className="btn btn-primary">Ver detalles</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
