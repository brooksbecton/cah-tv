import React, { Component } from 'react';
import './CreateTable.css'; 

class CreateTable extends Component {

    constructor(){
        super();

        this.state = {
            foo: 'bar'
        }
    }

    createTable(){
        console.log('createTable');
    }

    render() {
        return (
            <div className="CreateTable">
                <h1>Create Table</h1>
                <button onClick={this.createTable}>Create Table</button>
            </div>
        );
    }
} export default CreateTable;