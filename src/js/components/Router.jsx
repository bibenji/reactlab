import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Articles from './Articles.jsx';
import Smart from './SmartComponent.jsx';
import Pdf from './PdfComponent.jsx';
import Hoc from './HocComponent.jsx';

function Index() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function AppRouter() {
    return (        
        <Router>
            <div>
                <h1>Router</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>                            
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/articles">Articles</Link>
                        </li>
                        <li>
                            <Link to="/smartanddumb">SmartAndDumb</Link>
                        </li>
                        <li>
                            <Link to="/pdf">Pdf</Link>
                        </li>
                        <li>
                            <Link to="/hoc">Hoc</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Index}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/articles" component={Articles}></Route>
                <Route path="/smartanddumb" component={Smart}></Route>
                <Route path="/pdf" component={Pdf}></Route>
                <Route path="/hoc" component={Hoc}></Route>
            </div>
        </Router>
    )
}

export default AppRouter;