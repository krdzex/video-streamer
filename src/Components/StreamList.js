import React, { useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { allStreams, currentStream, goodDescription, goodTitle } from '../Actions';
import axios from "axios";
import { Grid, Image } from 'semantic-ui-react'

const StreamList = () => {
    const isLoggedUser = useSelector(state => state.isLogged);
    const currentUserId = useSelector(state => state.currentUser.googleId);
    const dispatch = useDispatch();
    const apiUrl = "http://localhost:3001/streams";

    useEffect(() => {
        axios.get(apiUrl).then(response => dispatch(allStreams(response.data)));
        dispatch(currentStream({}))
        dispatch(goodTitle());
        dispatch(goodDescription());
    }, [dispatch])

    const streams = useSelector(state => state.allStreams)
    return (<div className="streamListWrapper">

        <h1>Streams</h1>
        <Grid divided='vertically'>
            {streams.map((streams) => (
                <Grid.Row key={streams.id} className="row">
                    <Grid.Column width={1}>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <p style={{ fontSize: "20px", fontWeight: "bold" }}><Link to={`/streams/${streams.id}`}>{streams.title}</Link></p><br />
                        <p style={{ fontSize: "15px" }}>{streams.description}</p>
                    </Grid.Column>
                    <Grid.Column width={2} floated="right">
                        {streams.userId === currentUserId ? <div><Link to={`/streams/edit/${streams.id}`}><Button primary>Edit</Button></Link><Link to={`/streams/delete/${streams.id}`}><Button negative>Delete</Button></Link></div> : ""}
                    </Grid.Column>
                </Grid.Row >
            ))
            }
        </Grid >
        {isLoggedUser ? <Link to={"/streams/new"}>< Button primary floated="right" > Create Stream</Button ></Link > : ""
        }
    </div >

    );
};

export default StreamList;