import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { titleError, descriptionError, goodTitle, goodDescription, streamId } from '../Actions';

const FormComponent = ({ handleSubmit }) => {
    const dispatch = useDispatch();
    const header = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    const apiUrl = "http://localhost:3001/streams";
    const title = useSelector(state => state.creatingStreamErr.title);
    const description = useSelector(state => state.creatingStreamErr.description);
    const streamingId = useSelector(state => state.creatingStreamErr.streamId)
    const userId = useSelector(state => state.currentUser.googleId);

    console.log(streamingId)
    const submit = (values) => {
        if (values.hasOwnProperty('title') && values.hasOwnProperty('description')) {
            const newStream = {
               // id: streamingId,
                title: values.title,
                description: values.description,
                userId: userId
            }

            axios.post(apiUrl, newStream, { header }).then(() => {
            })
            dispatch(goodDescription());
            dispatch(goodTitle());
            dispatch(streamId());
        } else {
            if (!values.hasOwnProperty('title')) {
                dispatch(titleError())
            } else {
                dispatch(goodTitle())
            }
            if (!values.hasOwnProperty('description')) {
                dispatch(descriptionError())
            } else {
                dispatch(goodDescription())
            }
        }
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(submit)}>
                <h3>Enter title</h3>
                <Field name="title" component="input" type="text"></Field>
                {title && (<h5 style={{ color: "red" }}>This input is required and cant be empty</h5>)}
                <h3>Enter description</h3>
                <Field name="description" component="input" type="text"></Field>
                {description && (<h5 style={{ color: "red" }}>This input is required and cant be empty</h5>)}
                < Button type='submit' primary>Submit</Button>
            </Form>
        </div >
    );
};
export default reduxForm({
    form: "form",
})(FormComponent);
