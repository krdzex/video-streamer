const currentStream = (state = {}, action) => {
    switch (action.type) {
        case "ADD_CURRENT_STREAM":
            return state = action.payload;
        default:
            return state;
    }
}

export default currentStream;