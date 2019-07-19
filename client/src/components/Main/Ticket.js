import React, {useContext} from 'react';
import {TicketContext} from '../Context';
import { Link } from 'react-router-dom'

const ticketStyle = {
    "border": "2px solid #c56bff",
    "margin": "0.5rem",
    "padding": "0.5rem",
    "width": "17rem"
}

const Ticket = ({index, ticket}) => {
    console.log(ticket)
    return(
        <section style={ticketStyle}>
            <Link to={`/ticket/${ticket.id}`}>
            <p>{ticket.name}</p>
            <img alt="image" src={ticket.images[1].url} height="200" width="240"/>
            <p>{ticket.classifications[0].genre.name}</p>
            </Link>
        </section>
    )
}
export default Ticket;