import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";
const url = "https://api.github.com/users";

export default function Users() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const fetchData = async () => {
        const response = await fetch(url);
        const users = await response.json();
        dispatch({ type: 'ADD_USERS', payload: users });
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return (
        <section className='container'>
            <h2>Users</h2>
            <div className='users items'>
                {users && users.map(item => {
                    return <User key={item.id} user={item} />
                })}
            </div>
        </section>
    )
}
