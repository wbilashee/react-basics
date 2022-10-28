import React from "react";
import useFetch from "./useFetch";
import User from "./User";
const url = "https://api.github.com/users";

export default function Users() {
    const users = useFetch(url);

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
