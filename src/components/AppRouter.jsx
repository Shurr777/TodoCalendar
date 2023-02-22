import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../routers/routers";
import {useSelector} from "react-redux";

const AppRouter = () => {

const isAuth = useSelector(state => state.authReducer.isAuth)
    return (
        isAuth ?
            <Switch>
                {privateRoutes.map(route =>
                <Route path={route.path}
                       exact={route.exact}
                       component={route.component}
                       key={route.path}
                />
                )}
                <Redirect to={RouteNames.Evnt}/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route path={route.path}
                           exact={route.exact}
                           component={route.component}
                           key={route.path}
                    />
                )}
                <Redirect to={RouteNames.Logn}/>
            </Switch>
    );
};

export default AppRouter;