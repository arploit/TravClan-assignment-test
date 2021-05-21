import React from 'react'
import { useContext ,useState} from 'react'
import { CustomerListContext } from '../Context/Context'
import Customer from '../CustomerCard/CustomerCard'
import './Home.css'

const Home = React.memo(() => {
	let value = useContext(CustomerListContext)
	const sortCustomerList = value.sortCustomerList;
	const [toggle, setToggle] = useState(true);
	const [sortOrder, setSortOrder] = useState('Ascending');
	let customerList = value.customerList
  
	const updateToggle = () => {
		setToggle(!toggle)
       
	}

	const setSortOrderFn = () => {
		if (sortOrder === 'Ascending') setSortOrder('Decending');
		else setSortOrder('Ascending');
		sortCustomerList(toggle, sortOrder);
	}
	
	
	return (
		<div className="cardPage">
			<button onClick={() => updateToggle()}>
				{toggle ? 'Minimum' : 'Maximum'}
			</button>
			<button onClick={() => setSortOrderFn()}>
				{sortOrder === 'Ascending' ? 'Ascending' : 'Decending'}
			</button>
			<div className="cardDetail">
				{customerList.map((customer) => {
					return (
						<Customer props={customer} key={customer.id} toggle={toggle} />
					);
				})}
			</div>
		</div>
	);
});

export default Home;
