import Form from './FormComponent';
import { useDispatch, useSelector } from 'react-redux';

import React, { useEffect, useState } from 'react';
import { currentStream } from '../Actions';


const StreamEdit = ({ match }) => {
    const dispatch = useDispatch();
    // const apiUrl = "http://localhost:3001/streams";
    const streams = useSelector(state => state.allStreams);
    const [id] = useState(match.params.id);

    useEffect(() => {
        for (let i = 0; i < streams.length; i++) {
            if (parseInt(id) === streams[i].id) {
                dispatch(currentStream(streams[i]));
            }
        }
    }, [id, streams, dispatch])

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