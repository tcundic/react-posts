import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {greet} from "../utils/helperFunctions";
import Route from "../interfaces/Route";

const Header = (
    {greeting, navItems, logo, title}:
        {
            greeting: string,
            navItems: [Route],
            logo: string,
            title: string
        }) => {

    useEffect(() => greet(greeting, Header.name), [greeting]);

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    <div className="navbar-brand mr-6">
                        <NavLink className="navbar-item" to="/">
                            <img src={logo} className="app-logo" alt="react-logo"/>
                            {title}
                        </NavLink>
                        <div className="navbar-burger" data-target="navbar-menu"
                             onClick={() => setIsMenuOpened(prevState => !prevState)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div id="navbar-menu" className={`navbar-menu ${isMenuOpened ? 'is-active' : ''}`}>
                        <div className="navbar-end">
                            {navItems.map(item =>
                                item.isInHeader && <NavLink key={item.url} to={item.url} className="navbar-item"
                                         activeClassName="active-item">
                                    {item.title}
                                </NavLink>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
