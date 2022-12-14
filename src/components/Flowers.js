import React from 'react';
import Flower from './Flower';
import useFetch from './useFetch';
const url = "https://api.jsonbin.io/v3/b/6360cb3765b57a31e6a92611";
const headers = {
    "X-MASTER-KEY": "$2b$10$2l5eoFEt2PyWwTwFWMxK9eNM/x/1NARopBxmrarg4lLpBSFJAnym6",
    "X-ACCESS-KEY": "$2b$10$eT1v9z5.yyr3o.bXwNIBHeYd4IWUNl7U27IUXesvRTdhCnQMSQo0e",
};

export default function Flowers() {
    const flowers = useFetch(url, headers);

    return (
        <section className='container flowers'>
            <h2>Flowers</h2>
            <div className='items'>
                {flowers && flowers.map(item => {
                    return <Flower key={item.id} flower={item} />
                })}
            </div>
        </section>
    )
}
