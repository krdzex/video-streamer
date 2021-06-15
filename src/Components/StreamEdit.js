import React from 'react';
import Form from './FormComponent';
const StreamEdit = () => {
    const submit = () => {

    }
    return (
        <div className="streamEditWrapper">
            <h1>Edit a stream</h1>
            <Form onSubmit={submit} />
        </div>
    );
};

export default StreamEdit;