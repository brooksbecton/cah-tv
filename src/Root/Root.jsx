import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import App from './../App/App';
import CreateTable from './../CreateTable/CreateTable';


class Root extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={App} />
                    <Route path='/create' component={CreateTable} />
                </div>
            </Router>

        );
    }
}

export default Root;