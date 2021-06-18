import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Header, Modal } from 'semantic-ui-react'
import { useSelector } from 'react-redux';
import { currentStream } from '../Actions';
import { useDispatch } from 'react-redux';
const StreamDelete = ({ match }) => {
    const dispatch = useDispatch();
    const apiUrl = "http://localhost:3001/streams";
    const [id] = useState(match.params.id);
    const history = useHistory();
    const cancel = () => {
        return history.push("/");
    }


    const removeStream = async () => {
        await axios.delete(`${apiUrl}/${id}`).then(console.log("uspjesno")).catch(reason => {
            console.log(reason)
        });
        history.push("/");
    }

    useEffect(() => {
        axios.get(`${apiUrl}/${id}`).then(response => dispatch(currentStream(response.data)));
    }, [id, dispatch])
    const title = useSelector(state => state.currentStream.title);
    return (
        <div>
            <Modal
                open={true}
            >
                <Header content='Delete Stream' />
                <Modal.Content>
                    <h3>Are you sure you want to delete stream with title: {title}</h3>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={removeStream}>
                        Delete
                    </Button>
                    <Button onClick={cancel}>
                        Cancel
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    );
};

export default StreamDelete;