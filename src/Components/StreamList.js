import React, { useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { allStreams } from '../Actions';
import axios from "axios";
import { Grid, Image } from 'semantic-ui-react'
const StreamList = () => {
    const isLoggedUser = useSelector(state => state.isLogged);
    const currentUserId = useSelector(state => state.currentUser.googleId);
    const dispatch = useDispatch();
    const apiUrl = "http://localhost:3001/streams";

    useEffect(() => {
        axios.get(apiUrl).then(response => dispatch(allStreams(response.data)));
    }, [dispatch])

    const streams = useSelector(state => state.allStreams)
    return (<div className="streamListWrapper">

        <h1>Streams</h1>
        <Grid divided='vertically'>
            {streams.map((streams, id) => (
                <Grid.Row key={id}>
                    <Grid.Column width={1}>
                        <Image width="5000" src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        {streams.title}<br />
                        {streams.description}
                    </Grid.Column>
                    <Grid.Column width={2} floated="right">
                        {streams.userId === currentUserId ? <div><Button primary>Edit</Button><Button secondary>Delete</Button></div> : ""}
                    </Grid.Column>
                </Grid.Row>
            ))}
        </Grid>
        {isLoggedUser ? <Link to={"/streams/new"}><Button primary floated="right">Create Stream</Button></Link> : ""}
    </div >

    );
};

export default StreamList;