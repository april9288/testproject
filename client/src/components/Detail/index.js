import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { APIgetTicketbyID } from '../../api/api';

const Detail = ({match}) => {
    let {id} = match.params

    const [ value , setValue ] = useState('');  
    
    //componentDidMount
    useEffect(() => {
        APIgetTicketbyID(axios, setValue, id)
    }, [])

    console.log("val : ", value)

    return(
        <div>
            {
                (value) &&
                (   
                    <>
                    <p>{value.name}</p>
                    <img alt="image" src={value.images[0].url} height="400" width="480"/>
                    <p>{value.info}</p>
                    </>
                )
            }

        </div>
    )
}

export default Detail;