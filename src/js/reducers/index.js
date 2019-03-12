import { ADD_ARTICLE } from "../constants/action-types.js";

const initialState = {
    articles: [
        {
            title: "un article yo",
            id: 1
        }
    ]
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });        
    }

    if (action.type === "DATA_LOADED") {
        console.log('DATA_LOADED');
    }
    return state;
}

export default rootReducer;