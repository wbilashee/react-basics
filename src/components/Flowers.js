import React, { useEffect, useState } from 'react';
import Flower from './Flower';
const url = "https://api.jsonbin.io/v3/b/6360cb3765b57a31e6a92611";

export default function Flowers() {
    const [flowers, setFlowers] = useState([]);

    const fetchProducts = async () => {
        const response = await fetch(url, {
            headers: {
                "X-MASTER-KEY": "$2b$10$2l5eoFEt2PyWwTwFWMxK9eNM/x/1NARopBxmrarg4lLpBSFJAnym6",
                "X-ACCESS-KEY": "$2b$10$eT1v9z5.yyr3o.bXwNIBHeYd4IWUNl7U27IUXesvRTdhCnQMSQo0e",
            }
        });
        const data = await response.json();
        setFlowers(data.record);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <section className='container'>
            <h2>Flowers</h2>
            <div className='flowers'>
                {flowers && flowers.map(item => {
                    return <Flower key={item.id} flower={item} />
                })}
            </div>
        </section>
    )
}
