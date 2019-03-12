import React from 'react';

class Hoc extends React.Component {
    constructor() {
        super();


    }

    render() {
        return (
            <div>
                <h1>test</h1>
                <p>{this.props.title}</p>                
                {this.props.children}
            </div>
        )
    }    
}

function getHigher(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                title: 'higher higher'
            };
        }

        componentDidMount() {
            this.setState((prevState, props) => {
                return { title: 'super super higher'};
            });
        }

        render() {
            return (
                <WrappedComponent
                    {...this.state}
                    // title={this.state.title}
                >
                    <div>test props children</div>
                </WrappedComponent>   
            );
        }
    }
}

const HocHigher = getHigher(Hoc);
export default HocHigher;