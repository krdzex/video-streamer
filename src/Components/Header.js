import React from 'react';
import GoogleAuth from './GoogleAuth';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

    const userName = useSelector(state => state.currentUser.name);
    const isLoggedUser = useSelector(state => state.isLogged);

    return <div className="headerWrapper">
        <Menu secondary >
            <Menu.Item>
                <h3>Streamer {isLoggedUser ? ": " + userName : ""}</h3>
            </Menu.Item>
            <Menu.Item position="right" >
                <Link to={"/"}><h3>All streams</h3></Link>
            </Menu.Item>
            <Menu.Item>
                <GoogleAuth />
            </Menu.Item>
        </Menu>
    </div>
};

export default Header;