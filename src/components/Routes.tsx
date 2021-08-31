import {Redirect, Route, Switch} from "react-router-dom";
import logo2 from "../assets/logo2.svg";
import logo from "../assets/logo.svg";
import React, {useEffect} from "react";
import IRoute from "../interfaces/Route"
import {greet} from "../utils/helperFunctions";

const Routes = ({routes, greeting}: { routes: [IRoute], greeting: string}) => {

    useEffect(() => greet(greeting, Routes.name), [greeting]);

    return (
        <Switch>
            <Route exact path="/" render={() => <img src={logo2} alt={logo} className="home-page-logo"/>}/>
            {routes.map((route: IRoute) => {
                const Component = route.component;
                return <Route path={route.url} component={() => <Component greeting={greeting} />} key={route.url}/>
            }
            )}
            <Route render={() => <Redirect to="/"/>}/>
        </Switch>
    )
};

export default Routes;
