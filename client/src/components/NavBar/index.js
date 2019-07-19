import React from 'react';
import { Typography, Button } from "@ticketmaster/aurora";

const NavStyle = {
    "backgroundColor": "rgb(197, 107, 255)",
    "height": "10vh",
    "display": "flex",
    "justifyContent": "space-between",
    "alignItems": "center",
    "marginBottom": "3rem",
    "padding": "3rem"
}

const NavBar = () => {
    return(
        <div style={NavStyle}>
            <Typography weight="extraBold">Ticketing</Typography>
            <Button variant="outline" size="small" style={{width:'auto'}}>Login</Button>
        </div>
    )
}

export default NavBar;