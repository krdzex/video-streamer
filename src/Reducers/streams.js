const getStreamsReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_STREAMS":
            return state = action.payload;
        default:
            return state;
    }
}

export default getStreamsReducer;