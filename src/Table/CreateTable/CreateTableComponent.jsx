import React from 'react';

const CreateTableComponent = ({ createTable }) => {
    return (
        <div>
            <h1>Create Table</h1>
            <button onClick={createTable}>Create Table</button>
        </div>
    )
}

export default CreateTableComponent;