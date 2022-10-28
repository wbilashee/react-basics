import React from 'react';

export default function Flower({ flower }) {
    const { name, imgUrl } = flower;

    return (
        <div className='item-div'>
            <div className='img-div'>
                <img src={imgUrl} alt={name} />
            </div>
            <h4>{name}</h4>
        </div>
    )
}
