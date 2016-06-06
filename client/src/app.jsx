import React from 'react';
import { connect } from 'react-redux';

import { fetchHello } from './actions';

class App extends React.Component {
    constructor() {
        super();
        this.onClickHello = this.onClickHello.bind(this);
    }

    onClickHello() {
        this.props.dispatch(fetchHello());
    }

    render() {
        return (
            <div>
                <h1>{this.props.message}</h1>
                <button onClick={this.onClickHello}>Hello</button>
                <div>
                    {this.props.isFetching ? 'Fetching...' : ''}
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        message: state.message,
        isFetching: state.isFetching
    };
})(App);
