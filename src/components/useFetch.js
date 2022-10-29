import { useEffect, useState } from 'react';

export default function useFetch(url, headers) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url, {
            headers: headers
        })
            .then(res => res.json())
            .then(data => setData(data));
    }, [url, headers])

    return data.record;
}