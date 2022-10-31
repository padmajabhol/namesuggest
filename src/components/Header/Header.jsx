import React from 'react';
import './Header.css';



const Header = ({ headTitle, headerExpanded }) => {
    return (
       wsdqwdqw
            <img
                src={require("../../assets/image.svg").default}
                className={`head-image ${headerExpanded
                    ? 'head-image-expanded'
                    : 'head-image-contacted'
                    }`}
                alt="headerImage"
            />
            <h1
                className={`head-text ${headerExpanded
                    ? 'head-text-expanded'
                    : 'head-text-contracted'
                    }`}
            >
                {headTitle}
            </h1>
        </div>
    );
};

export default Header;
