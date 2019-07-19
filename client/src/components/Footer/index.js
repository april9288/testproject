import React from 'react';
import { Typography } from "@ticketmaster/aurora";

const NavStyle = {
    "backgroundColor": "rgba(38, 38, 38, 1)",
    "height": "10vh",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "padding": "3rem"
}

const Footer = () => {
    return(
        <div style={NavStyle}>
            <Typography weight="extraBold" color="white">Footer</Typography>
        </div>
    )
}

export default Footer;