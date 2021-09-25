import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <header className="head">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Battle Ground Game Development Project <br />
                                Project Budget: $50,00,000
                            </h3>
                        </div>
                        <div className="col-md-12">
                            <nav className="navigation">
                                <a href="/home">Home</a>
                                <a href="/about">About</a>
                                <a href="/blog">Blog</a>
                                <a href="/contact">Contact</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;