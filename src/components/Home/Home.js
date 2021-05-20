import React from 'react'
import { useContext } from 'react'
import { CustomerListContext } from '../Context/Context'
import Customer from '../Customer/Customer'

function Home() {
    let value = useContext(CustomerListContext)
        let customerList = value.customerList
        
  return (
		
      <>
          {customerList.map((customer) =>{
              return(
                  <Customer props={customer} key={customer.id}/>
              )
          })}
		</>
	);
}

export default Home;
