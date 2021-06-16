export const getUser = (user) => {
    return {
        type: "GET_USER",
        payload: user
    }
}

export const deleteUser = () => {
    return {
        type: "DELETE_USER"
    }
}

export const isLogged = () => {
    return {
        type: "LOGGED_IN"
    }
}


export const logOut = () => {
    return {
        type: "LOGGED_OUT"
    }
}

export const allStreams = (streams) => {
    return {
        type: "GET_STREAMS",
        payload: streams
    }
}

export const titleError = () => {
    return {
        type: "BAD_TITLE"
    }
}

export const descriptionError = () => {
    return {
        type: "BAD_DESCRIPTION"
    }
}

export const goodTitle = () => {
    return {
        type: "GOOD_TITLE"
    }
}

export const goodDescription = () => {
    return {
        type: "GOOD_DESCRIPTION"
    }
}


export const streamId = () => {
    return {
        type: "INCRASE"
    }
}

export const currentStream = (currStream) => {
    return {
        type: "ADD_CURRENT_STREAM",
        payload: currStream
    }
}