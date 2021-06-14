import React from 'react';
import { Route, Switch } from "react-router-dom";
import StreamCreate from './Components/StreamCreate';
import StreamList from './Components/StreamList';
const MainRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={StreamList} />
                <Route exact path="/streams/new" component={StreamCreate} />
            </Switch>
        </div>
    );
};

export default MainRouter;