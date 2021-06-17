import React from 'react';
import { Route, Switch } from "react-router-dom";
import StreamCreate from './Components/StreamCreate';
import StreamDelete from './Components/StreamDelete';
import StreamEdit from './Components/StreamEdit';
import StreamList from './Components/StreamList';
import StreamShow from './Components/StreamShow';
const MainRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={StreamList} />
                <Route exact path="/streams/new" component={StreamCreate} />
                <Route exect path="/streams/delete/:id" component={StreamDelete} />
                <Route exect path="/streams/edit/:id" component={StreamEdit} />
                <Route exact path="/streams/:id" component={StreamShow} />
            </Switch>
        </div>
    );
};

export default MainRouter;