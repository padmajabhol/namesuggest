import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="head-container">
            <img
                src={require("../../assets/image.svg").default}
                className="head-image"
                alt="headerImage"
            />
            <h1 className="head-text">Name Suggest!</h1>

        </div>
    );
};

export default Header;