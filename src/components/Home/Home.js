import React from 'react'
import { useContext ,useState} from 'react'
import { CustomerListContext } from '../Context/Context'
import Customer from '../CustomerCard/CustomerCard'
import './Home.css'

function Home() {
    let value = useContext(CustomerListContext)
	const [toggle, setToggle] = useState(true);
	const [sort] = useState('asc');
    let customerList = value.customerList
  
    const updateToggle = () => {
        setToggle(!toggle)
       
	}
	
	const SortArr = () => {
		
	}
	return (
		<div className="cardPage">
			<button onClick={() => updateToggle()}>
				{toggle ? 'Minimum' : 'Maximum'}
			</button>
			<button onClick={() => SortArr()}>{sort ? 'asc' : 'Desc'}</button>
			<div className="cardDetail">
				{customerList.map((customer) => {
					return (
						<Customer props={customer} key={customer.id} toggle={toggle} />
					);
				})}
			</div>
		</div>
	);
}

export default Home;
