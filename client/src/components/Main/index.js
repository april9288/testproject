import React, {useContext} from 'react';
import Ticket from './Ticket';
import {TicketContext} from '../Context';
import Search from './Search';

const MainStyle = {
    display : 'flex',
    flexWrap : 'wrap',
    justifyContent: 'center'
}

const Main = () => {
    const [tickets, setTicket] = useContext(TicketContext);
    return(
        <React.Fragment>
            <Search />
            <section style={MainStyle}>
            {
                tickets.map((ticket,index)=> <Ticket key={index} index={index} ticket={ticket} />)
            }
            </section>
        </React.Fragment>
    )
}
export default Main;