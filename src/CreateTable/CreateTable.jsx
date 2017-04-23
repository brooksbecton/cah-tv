import React from 'react';
import { connect } from 'react-redux';
import { hri } from 'human-readable-ids';
import { ADD_TABLE } from './actions/table';
import './CreateTable.css';


const mapStateToProps = (state) => { return { tables: state.tables } }


let CreateTable = ({ dispatch, tables }) => {

    const createId = () => hri.random()
    const createTable = () => {
        const id = createId();
        dispatch(ADD_TABLE(id))
    };

    return (
        <div className="CreateTable">
            <h1>Create Table</h1>
            <button onClick={createTable}>Create Table</button>
        </div>
    )
}

CreateTable = connect(mapStateToProps)(CreateTable);

export default CreateTable;