const creatingStreamErr = (state = { title: false, description: false, streamId: 0 }, action) => {
    switch (action.type) {
        case "BAD_TITLE":
            return state = { ...state, title: true };
        case "BAD_DESCRIPTION":
            return state = { ...state, description: true };
        case "GOOD_TITLE":
            return state = { ...state, title: false };
        case "GOOD_DESCRIPTION":
            return state = { ...state, description: false };
        case "INCRASE":
            return state = { ...state, streamId: state.streamId + 1 };
        default:
            return state;
    }
}



export default creatingStreamErr;