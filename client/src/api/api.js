import { sampleResponse } from './response.js'; 

export const APIgetTicketData = async (axios, setTicket) => {
	try{
		
		if (process.env.NODE_ENV === 'development') {
			//update the state with the sample data
			setTicket(sampleResponse._embedded.events)
		} else {
			//make a get request to Ticketmaster API under productio mode
			let response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.REACT_APP_API}`)
			setTicket(response.data._embedded.events)
		}
		
	} catch(e) {
		console.log(e)
	}
}

export const APIgetSearchData = async (axios, setTicket, keyword) => {
	try{
		//make a get request to Ticketmaster API under productio mode
		let response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.REACT_APP_API}&keyword=${keyword}`)
		setTicket(response.data._embedded.events)
	} catch(e) {
		console.log(e)
	}
}

export const APIgetTicketbyID = async (axios, setValue, id) => {
	try{
		//make a get request to Ticketmaster API under productio mode
		let response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.REACT_APP_API}&id=${id}`)
		setValue(response.data._embedded.events[0])
	} catch(e) {
		console.log(e)
	}
}