import React, { useState, useContext } from 'react';
import { TicketContext } from '../Context';
import { APIgetSearchData } from '../../api/api';
import axios from 'axios';

import { Button } from "@ticketmaster/aurora";

const inputStyle = {
    padding: "1rem",
    margin: "1rem",
    width: "40rem",
    border: "5px solid rgb(197, 107, 255)",   
}


const Search = () => {
    const [ value , setValue ] = useState('');
    const [tickets, setTicket] = useContext(TicketContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        //if value is empty, then return nothing
        if (!value) return;
        
        //make a GET request and grab the response from Ticketmaster API and then update the state
        APIgetSearchData(axios, setTicket, value)

        //set the input value to empty
        setValue('')
    }

    return(
        <section style={{display:'flex', justifyContent:'center'}}>
            <form onSubmit={handleSubmit}>
                <input autofucus="true" style={inputStyle} type='text' value={value} onChange={e => setValue(e.target.value)} />
                <Button variant="outline" size="small" style={{width:'auto'}}>Search</Button>
            </form>
        </section>

    )
}

export default Search;