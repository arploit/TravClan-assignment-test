import React, {useState,useEffect, createContext } from 'react'

export const CustomerListContext = createContext()

export function CustomerContext(props) {
    const [customerList, setCustomerList] = useState([])
    useEffect(() => {
        fetch('https://intense-tor-76305.herokuapp.com/merchants')
            .then(response => response.json())
        .then(data => setCustomerList(data))
        
    }, [])
    
    let value = {
        customerList 
    }

    return (
        <CustomerListContext.Provider value ={value}>
            {props.children}
        </CustomerListContext.Provider>
    )
}


