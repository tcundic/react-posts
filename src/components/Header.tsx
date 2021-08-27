import React, {useEffect, useState} from 'react';

const Header = (
    {greeting, navItems, logo, title}:
        {
            greeting: string,
            navItems: [{ title: string, url: string }],
            logo: string,
            title: string
        }) => {

    useEffect(() => console.log(`${greeting} ${Header.name}`));

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    <div className="navbar-brand mr-6">
                        <a className="navbar-item" href="/">
                            <img src={logo} className="app-logo" alt="react-logo"/>
                            {title}
                        </a>
                        <div className="navbar-burger" data-target="navbar-menu" onClick={() => setIsMenuOpened(prevState => !prevState)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div id="navbar-menu" className={`navbar-menu ${isMenuOpened ? 'is-active' : ''}`}>
                        <div className="navbar-end">
                            {navItems.map(item =>
                                <a className="navbar-item" href={item.url} key={item.url}>
                                    {item.title}
                                </a>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
