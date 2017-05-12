import React from 'react';
import { connect } from 'react-redux';
import { hri } from 'human-readable-ids';
import { ADD_TABLE } from './../actions/table';

import CreateTableComponent from './CreateTableComponent';
import './CreateTable.css';


const mapStateToProps = (state) => { return { tables: state.table } }


let CreateTableContainer = ({ dispatch, tables }) => {
    const createId = () => hri.random();
    const id = createId();

    const createTable = () => {
        dispatch(ADD_TABLE(id))
    };

    return (
        <CreateTableComponent createTable={createTable}></CreateTableComponent>
    )
}

CreateTableContainer = connect(mapStateToProps)(CreateTableContainer);

export default CreateTableContainer;