import React from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import Description from './Description';
import AddItemButton from './AddItemButton';
import './ItemDetail.css'; 

const ItemDetail = ({ item }) => {
    return (
        <div className="item-detail-container d-flex justify-content-center align-items-center">
            <div className="card item-detail-card">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">${item.price}</p>
                    <Description description={item.description} />
                    <ItemQuantitySelector />
                    <AddItemButton item={item} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
