import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { getUser, deleteUser, isLogged, logOut } from '../Actions';
import { useDispatch, useSelector } from 'react-redux';

const GoogleAuth = () => {

    const dispatch = useDispatch();
    const clientId = "666197469288-psaeqi7eu049aol5psct91lo0v53o3gu.apps.googleusercontent.com"
    const success = (response) => {
        console.log("Success", response.profileObj)
        dispatch(getUser(response.profileObj))
        dispatch(isLogged())
    }
    const isLoggedUser = useSelector(state => state.isLogged)
    const failure = (response) => {
        console.log(response)
    }
    const successLogout = () => {
        dispatch(deleteUser())
        dispatch(logOut())
        alert("LOGOUT URADIO");
    }

    return (
        <div className="GoogleAuth">
            {isLoggedUser === false ? <GoogleLogin
                clientId={clientId}
                buttonText="Login on site useing google"
                onSuccess={success}
                onFailure={failure}
                isSignedIn={true}
                theme={'dark'}
            />
                :
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout from site"
                    onLogoutSuccess={successLogout}
                    theme={'dark'}
                />}
        </div>
    );
};

export default GoogleAuth;