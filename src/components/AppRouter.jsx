import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {routes} from "../router";

const AppRouter = () => {
  return (
    <Switch>
      {routes.map( route =>
        <Route exact={route.exact}
               path={route.path}
               component = {route.component}>

        </Route>
      )}

      <Redirect to="posts"/>
    </Switch>
  );
};

export default AppRouter;