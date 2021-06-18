import Form from './FormComponent';
import { useDispatch } from 'react-redux';

import React, { useEffect, useState } from 'react';
import { currentStream, descriptionError, goodDescription, goodTitle, titleError } from '../Actions';
import { useHistory } from 'react-router';
import axios from 'axios';


const StreamEdit = ({ match }) => {
    const history = useHistory();
    const header = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    const dispatch = useDispatch();
    const apiUrl = "http://localhost:3001/streams";
    const [id] = useState(match.params.id);


    useEffect(() => {
        axios.get(`${apiUrl}/${id}`).then(response => dispatch(currentStream(response.data)));
    }, [id, dispatch])

    const submit = async (values) => {
        if (values.title !== "" && values.description !== "") {
            console.log(values)
            const changes = {
                title: values.title,
                description: values.description
            }
            await axios.patch((`${apiUrl}/${id}`), changes, { header });
            dispatch(goodDescription());
            dispatch(goodTitle());
            return history.push("/")
        } else {
            if (values.title === "") {
                dispatch(titleError())
            } else {
                dispatch(goodTitle())
            }
            if (values.description === "") {
                dispatch(descriptionError())
            } else {
                dispatch(goodDescription())
            }
        }
    }
    return (
        <div className="streamEditWrapper">
            <h1>Edit a stream</h1>
            <Form onSubmit={submit} />
        </div>
    );
};

export default StreamEdit;