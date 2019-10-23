import store from "../store";

export const fetch_post = () => {
    return {
        type: "FETCH_USER"
    };
};

export const receive_post = post => {
    return {
        type: "FETCHED_USER",
        data: post
    };
};

export const receive_error = () => {
    return {
        type: "RECEIVE_ERROR"
    };
};

export const fetch_employees = () => {
    return {
        type: "FETCH_USER"
    };
};

export const receive_employees = post => {
    return {
        type: "FETCHED_USER",
        data: post
    };
};

export const thunk_action_creator = username => {
    const user = username.replace(/\s/g, "");
    store.dispatch(fetch_post());
    return function(dispatch, getState) {
        return fetch(`https://api.github.com/users/${user}`)
            .then(data => data.json())
            .then(data => {
                if (data.message === "Not Found") {
                    throw new Error("No such user found!!");
                } else dispatch(receive_post(data));
            })
            .catch(err => dispatch(receive_error()));
    };
};