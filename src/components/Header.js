import React from "react";
import { string } from "prop-types";

const Header = ({ message }) => {
    return (
        <h2 className="Header text-center">
            { message }
        </h2>
    );
};

Header.propTypes = {
    message: string
};

export default Header;