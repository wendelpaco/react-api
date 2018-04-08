import React from 'react';
import './index.css';
import RouterContainer from './router/Router';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {};

    }
    render() {
        return (
            <div className="container-default">
                <RouterContainer />
            </div>
        )
    }
}