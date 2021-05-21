import React, {useState,useEffect, createContext } from 'react'

export const CustomerListContext = createContext()

export function CustomerContext(props) {
    const [customerList, setCustomerList] = useState([])
    
    const filterArr = (array) =>{
        let newArr = []
        for (let i = 0; i < array.length; i++){
            if (array[i].firstname) newArr.push(array[i])
        }
        
        setCustomerList(newArr)
        
    }
    
    useEffect(() => {
        fetch('https://intense-tor-76305.herokuapp.com/merchants')
            .then(response => response.json())
        .then(data => filterArr(data))
        
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


