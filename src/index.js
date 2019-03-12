import React from "react";
import ReactDOM from "react-dom";

import store from "./js/store/index.js";
import { addArticle } from "./js/actions/index.js";

import ThemeContext from './js/components/TestContext.js';

window.store = store;
window.addArticle = addArticle;

import { Provider } from "react-redux";

import AppRouter from "./js/components/Router.jsx";
import HelloComponent from "./js/components/HelloComponent.jsx";

const Index = () => {
//   return <div>Hello React!</div>;
  return (
        <ThemeContext.Provider value="dark">
            <Provider store={store}>
                <AppRouter />
            </Provider>                
        </ThemeContext.Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));