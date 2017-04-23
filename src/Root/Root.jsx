import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import App from './../App/App';
import CreateTable from './../CreateTable/CreateTable';

const Root = ({ store }) => (

    <Provider store={store} >
        <Router>
            <div>
                <Route exact path='/' component={App} />
                <Route path='/create' component={CreateTable} />
            </div>
        </Router>
    </Provider >
)

export default Root;