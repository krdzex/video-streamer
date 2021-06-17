import { ReactFlvPlayer } from 'react-flv-player'
import React from 'react';
const StreamShow = () => {
    return (
        <div>
            <ReactFlvPlayer
                url="http://localhost:8000/live/STREAM_NAME.flv"
                heigh="800px"
                width="800px"
                isMuted={true}
            />
        </div>

    );
};

export default StreamShow;