import React, {useEffect} from 'react';
import logo from '../assets/logo.svg';
import {routes, greeting} from '../config';

import Header from '../components/Header';
import {greet} from "../utils/helperFunctions";
import Routes from "../components/Routes";

const App = () => {

    useEffect(() => greet(greeting, App.name));

    const title: string = "REACT";

    return (
        <React.StrictMode>
            <div>
                <Header greeting={greeting} logo={logo} title={title} navItems={routes}/>
                <div className="container">
                    <Routes routes={routes} greeting={greeting} />
                </div>
            </div>
        </React.StrictMode>
    );
}

export default App;
