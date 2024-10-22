import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
    const categories = [...new Set(items.map(item => item.category))]; // Obtiene categorías únicas

    return (
        <div>
            <h1>Categorías</h1>
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Selecciona una categoría
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {categories.map(category => (
                        <li key={category}>
                            <Link className="dropdown-item" to={`/category/${category.toLowerCase()}`}>
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="row">
                {items.map(item => (
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

export default ItemList;
