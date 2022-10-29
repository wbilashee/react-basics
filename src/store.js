import { createStore } from "redux";

const initialState = {
    users: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USERS":
            return { ...state, users: action.payload };
        case "REMOVE_USER":
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;