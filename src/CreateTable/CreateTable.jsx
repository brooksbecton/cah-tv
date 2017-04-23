import React from 'react';
import { connect } from 'react-redux';
import { hri } from 'human-readable-ids';
import { ADD_TABLE, DEL_TABLE } from './actions/table';
import './CreateTable.css';


const mapStateToProps = (state) => { console.log(state); return { tables: state.table } }


let CreateTable = ({ dispatch, tables }) => {
    const createId = () => hri.random()
    const id = createId();

    const createTable = () => {
        dispatch(ADD_TABLE(id))
    };
    const deleteTable = () => {
        dispatch(DEL_TABLE(id))
    };

    return (
        <div className="CreateTable">
            <h1>Create Table</h1>
            <button onClick={createTable}>Create Table</button>
            <button onClick={deleteTable}>Delete Table</button>
        </div>
    )
}

CreateTable = connect(mapStateToProps)(CreateTable);

export default CreateTable;