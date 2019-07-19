import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { APIgetTicketData } from '../api/api';

export const TicketContext = createContext();

export const TicketeProvider = ({children}) => {
    const [tickets, setTicket] = useState([])

    //componentDidMount
    useEffect(() => {
        APIgetTicketData(axios, setTicket)
    }, [])
    
    return <TicketContext.Provider value={[tickets, setTicket]}>{children}</TicketContext.Provider>
}
