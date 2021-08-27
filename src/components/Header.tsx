import React, {useEffect} from 'react';

const Header = (
    {greeting, navItems, logo, title}:
        {
            greeting: string,
            navItems: [{ title: string, url: string }],
            logo: string,
            title: string
        }) => {

    useEffect(() => console.log(`${greeting} ${Header.name}`));

    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    <div className="navbar-brand mr-6">
                        <a className="navbar-item" href="/">
                            <img src={logo} className="app-logo" alt="react-logo"/>
                            {title}
                        </a>
                    </div>
                    <div id="navbar-menu" className="navbar-menu">
                        <div className="navbar-start">
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
