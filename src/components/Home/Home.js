import React from 'react'
import { useContext } from 'react'
import {
  CustomerListContext
 
} from '../Context/Context'


function Home() {
    let value = useContext(CustomerListContext)
        let customerList = value.customerList
    
  return (
		
      <>
          {customerList.map((customer) =>{
              return(
          <h1 key={customer.id}>{customer.id}</h1>
              )
          })}
		</>
	);
}

export default Home;
