import React, {useState,useEffect, createContext } from 'react'

export const CustomerListContext = createContext()

export function CustomerContext(props) {
    const [customerList, setCustomerList] = useState([])
    
    const filterArr = (array) =>{
        let newArr = []
        for (let i = 0; i < array.length; i++){
            if (array[i].firstname) newArr.push(array[i])
        }
        
        let newCustomerList = newArr.map((customer) => {
             let largeAmount = 0;
			let smallAmount = 0;
					let amountArray = customer.bids.map((bid, i) => {
						let newAmount = [];
						newAmount = bid['amount'];
						return newAmount;
					});
            amountArray = amountArray.sort();
            if (typeof amountArray !== 'undefined') {
                if (typeof amountArray[amountArray.length - 1] !== 'undefined')
                    largeAmount = amountArray[amountArray.length - 1];
                if(typeof amountArray[0] !== 'undefined')
                smallAmount = amountArray[0];
            }
                return { ...customer, largeAmount, smallAmount};
        });
        setCustomerList(newCustomerList);
        return true; 
    }
    
    useEffect(() => {
        fetch('https://intense-tor-76305.herokuapp.com/merchants')
            .then(response => response.json())
        .then(data => filterArr(data))
        
    }, [])


    const sortCustomerList = (toggle, order) => {
        if (order === 'Ascending') {
            if (toggle) {
                setCustomerList(customerList.sort((a, b) => a.largeAmount - b.largeAmount));
                return;
            }
            setCustomerList(customerList.sort((a, b) => a.smallAmount - b.smallAmount));
            return;
        } else {
            if (toggle) {
                setCustomerList(customerList.sort((a, b) => b.largeAmount - a.largeAmount));
                return;
            }
            setCustomerList(customerList.sort((a, b) => b.smallAmount - a.smallAmount));
            return;
        }
           };
    
    let value = {
			customerList,
			sortCustomerList,
		};

    return (
        <CustomerListContext.Provider value ={value}>
            {props.children}
        </CustomerListContext.Provider>
    )
}


