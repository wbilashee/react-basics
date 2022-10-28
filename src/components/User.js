import React from 'react';

export default function User({ user }) {
    const { login, avatar_url } = user;
    return (
        <div className='item-div'>
            <div className='img-div'>
                <button
                    className="btn"
                >X</button>
                <img src={avatar_url} alt={login} />
            </div>
            <h4>{login}</h4>
        </div>
    )
}
