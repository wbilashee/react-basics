import React, { useState, useEffect } from "react";
import User from "./User";

export default function Users() {
    const [users, setUsers] = useState([]);
    const url = "https://api.github.com/users";

    const fetchUsers = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
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
