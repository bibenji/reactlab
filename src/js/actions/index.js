import { ADD_ARTICLE } from "./../constants/action-types.js";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload: payload };
}

export function getData() {
    return function(dispatch) {
        return fetch("www.google.fr")
        // .then(response => response.json())
        .then(json => {
            // return {
            //     type: "DATA_LOADED",
            //     payload: "coucou"
            // };
            // en vrai on fait dispatch
            dispatch({
                type: "DATA_LOADED",
                payload: "coucou"
            });
        });
    }    
}