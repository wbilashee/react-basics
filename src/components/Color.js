import React from 'react';
import { useState } from 'react';

export default function Color() {
    const [color, setColor] = useState("white");
    const hex = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const changeColor = () => {
        let hexColor = "#";

        const getRandomNumber = () => {
            return Math.floor(Math.random() * hex.length);
        }

        for (let i = 0; i < 6; i++) {
            const elem = hex[getRandomNumber()];
            hexColor += elem;
        }
        setColor(hexColor);
    }

    return (
        <section className='container'>
            <div style={{ background: `${color}` }}
                className='color-div'>
            </div>
            <button className='btn' onClick={changeColor}>Change Color</button>
        </section>
    )
}
