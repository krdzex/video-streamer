import userReducer from "./user";
import isLoggedReducer from "./isLogged";
import getStreamsReducer from "./streams";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"
import creatingStreamErr from "./createStreamError";
import currentStream from "./currentStream";

const allReducers = combineReducers({
    currentUser: userReducer,
    isLogged: isLoggedReducer,
    allStreams: getStreamsReducer,
    form: formReducer,
    creatingStreamErr,
    currentStream

})

export default allReducers;