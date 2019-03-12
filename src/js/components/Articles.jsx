import React, { Component } from 'react';
import { connect } from "react-redux";
import { getData } from "./../actions/index.js";

import ThemeContext from './TestContext.js';

const mapStateToProps = state => {
    return { articles: state.articles };
};

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article)),
        getData: result => dispatch(getData())
    }
}

class ArticlesComponent extends Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
        
        // this.state = {
        //     articles: [
        //         { title: "React with Redux Tuto", id: 1},
        //         { title: "Redux Bible For Pros", id: 2}
        //     ],
        //     test: "test"
        // }

        this.addArticle = this.addArticle.bind(this);
    }

    componentDidMount() {
        let res = this.props.getData();
        console.log(res);

        let filledArray = new Array(10).fill(null).map(() => ({'hello':'goodbye'}));
        console.log(filledArray);
    }

    addArticle() {
        console.log('addArticle');
        this.props.addArticle({
            title: "test",
            id: 32
        });
    }

    render() {
        const { articles } = this.props;

        console.log(this.context);

        return (
            <div>
                {this.context}
                <ul>
                    {articles.map(el => <li key={el.id}>{el.title}</li>)}
                </ul>
                <button onClick={this.addArticle}>Add</button>
            </div>
        );
    }
}

const Articles = connect(mapStateToProps, mapDispatchToProps)(ArticlesComponent);
export default Articles;