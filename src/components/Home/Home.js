import React from 'react'
import { useContext ,useState} from 'react'
import { CustomerListContext } from '../Context/Context'
import Customer from '../Customer/CustomerCard'

function Home() {
    let value = useContext(CustomerListContext)
    const [toggle, setToggle] = useState(true);
    let customerList = value.customerList
  
    const updateToggle = () => {
        setToggle(!toggle)
       
    }
  return (
		<>
			<button onClick={() => updateToggle()}>
				{toggle ? 'Minimum' : 'Maximum'}
			</button>
			{customerList.map((customer) => {
				return <Customer props={customer} key={customer.id} toggle={toggle} />;
			})}
		</>
	);
}

export default Home;
