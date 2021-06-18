import { ReactFlvPlayer } from 'react-flv-player'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentStream } from '../Actions';
import axios from 'axios';
const StreamShow = ({ match }) => {
    const apiUrl = "http://localhost:3001/streams"
    const dispatch = useDispatch();
    const [id] = useState(match.params.id);
    const url = `http://localhost:8000/live/${id}.flv`
    useEffect(() => {
        axios.get(`${apiUrl}/${id}`).then(response => dispatch(currentStream(response.data)));
    }, [id, dispatch])
    const title = useSelector(state => state.currentStream.title);
    const description = useSelector(state => state.currentStream.description);
    console.log(ReactFlvPlayer.event)
    return (
        <div>
            <div className="videoPlayer">
                <ReactFlvPlayer
                    type="flv"
                    url={url}
                    heigh="100%"
                    width="80%"
                />
                <h2>{title}</h2>
                <h4>{description}</h4>
            </div>

        </div>
    );
};

export default StreamShow;