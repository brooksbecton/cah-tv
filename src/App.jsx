import React, { Component } from 'react';
import CreateTable from './CreateTable/CreateTable';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="CreateTable" >
                <CreateTable></CreateTable>
            </div>
        );
    }
}

export default App;