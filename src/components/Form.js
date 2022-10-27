import React, { useState, useRef, useEffect } from 'react';

export default function Form() {
    const [name, setName] = useState("");
    const prevName = useRef("");

    const focus = () => {
        prevName.current.focus();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        prevName.current.value = name;
    }, [name]);

    return (
        <section className='container'>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={name}
                    name="name"
                    id="name"
                    ref={prevName}
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name..."
                />
            </form>
            <p>Your name is: {prevName.current.value}</p>
            <button className="btn" onClick={focus}>Focus</button>
        </section>
    )
}
