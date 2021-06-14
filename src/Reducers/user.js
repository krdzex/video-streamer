const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_USER":
            return state = action.payload;
        case "DELETE_USER":
            return state = {};
        default:
            return state;
    }
}

export default userReducer;