import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Header, Modal } from 'semantic-ui-react'
import { useSelector } from 'react-redux';

const StreamDelete = ({ match }) => {

    const apiUrl = "http://localhost:3001/streams";
    const streams = useSelector(state => state.allStreams);
    const [id] = useState(match.params.id);
    const history = useHistory();
    const cancel = () => {
        return history.push("/");
    }
    const [title, setTitle] = useState("");

    const removeStream = async () => {
        await axios.delete(`${apiUrl}/${id}`).then(console.log("uspjesno")).catch(reason => {
            console.log(reason)
        });
        history.push("/");
    }

    useEffect(() => {
        for (let i = 0; i < streams.length; i++) {
            if (parseInt(id) === streams[i].id) {
                setTitle(streams[i].title);
            }
        }
    }, [id, streams])
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