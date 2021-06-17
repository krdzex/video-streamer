import React from 'react';
import Form from './FormComponent';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { titleError, descriptionError, goodTitle, goodDescription } from '../Actions';
import { useHistory } from 'react-router';


const StreamCreate = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const header = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    const apiUrl = "http://localhost:3001/streams";
    const userId = useSelector(state => state.currentUser.googleId);



    const submit = async (values) => {
        if (values.title !== undefined && values.description !== undefined) {
            console.log(values)
            const newStream = {
                title: values.title,
                description: values.description,
                userId: userId
            }

            await axios.post(apiUrl, newStream, { header }).then(() => {
            })
            dispatch(goodDescription());
            dispatch(goodTitle());
            return history.push("/")
        } else {
            if (values.title === undefined) {
                dispatch(titleError())
            } else {
                dispatch(goodTitle())
            }
            if (values.description === undefined) {
                dispatch(descriptionError())
            } else {
                dispatch(goodDescription())
            }
        }
    }
    return (
        <div className="streamCreateWrapper">
            <h1>Create a Stream</h1>
            <Form onSubmit={submit} />
        </div>
    );
};

export default StreamCreate;