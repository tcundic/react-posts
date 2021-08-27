import React, {useEffect} from 'react';
import logo from '../assets/logo.svg';
import logo2 from '../assets/logo2.svg';
import { navItems, greeting } from '../config';

import Header from '../components/Header';

const App = () => {

    useEffect(() => console.log(`${greeting} ${App.name}`));

    const title: string = "REACT";

    return (
        <div>
            <Header greeting={greeting} logo={logo} title={title} navItems={navItems}/>
            <div className="container">
                <img src={logo2} alt={logo} className="home-page-logo" />
            </div>
        </div>
    );
}

export default App;
