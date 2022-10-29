import React from 'react';
import { useDispatch } from 'react-redux';

export default function User({ user }) {
    const { id, login, avatar_url } = user;
    const dispatch = useDispatch();

    const removeUser = (id) => {
        dispatch({ type: "REMOVE_USER", payload: id });
    }

    return (
        <div className='item-div'>
            <div className='img-div'>
                <button
                    onClick={() => removeUser(id)}
                    className="btn"
                >X</button>
                <img src={avatar_url} alt={login} />
            </div>
            <h4>{login}</h4>
        </div>
    )
}
