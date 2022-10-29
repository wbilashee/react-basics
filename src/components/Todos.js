import React, { useReducer, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const actions = {
    ADD_TODO: "ADD_TODO",
    REMOVE_TODO: "REMOVE_TODO"
}

const newTodo = (title) => {
    return {
        id: new Date().getTime().toString(),
        todo: title,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case actions.ADD_TODO:
            return [...state, newTodo(action.payload)];
        case actions.REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}

export default function Todos() {
    const [state, dispatch] = useReducer(reducer, []);
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_TODO", payload: title });
        setTitle("");
    }

    const removeTodo = (id) => {
        dispatch({ type: "REMOVE_TODO", payload: id });
    }

    return (
        <section className='container'>
            <h2>Todos</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    value={title}
                    autoComplete="off"
                    placeholder="Add todo here..."
                    onChange={(e) => setTitle(e.target.value)}
                />
            </form>
            <button
                type="submit"
                className="btn"
                onClick={handleSubmit}
            >Add todo</button>
            <div className="todos">
                {state && state.map(item => {
                    const { id, todo } = item;
                    return <div key={id} className="todo">
                        <p>{todo}</p>
                        <button
                            className="btn"
                            onClick={() => removeTodo(id)}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                })}
            </div>
        </section>
    )
}
