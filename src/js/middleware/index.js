import { ADD_ARTICLE } from "../constants/action-types.js";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            
            if (action.type === ADD_ARTICLE) {
                let foundWord = forbiddenWords.filter(word => action.payload.title.includes(word));
                foundWord = 'blablabla';
                if (foundWord.length) {
                    return dispatch({ type: "FOUND_BAD_WORD"});
                }
            }

            
            return next(action);
        }
    }
}