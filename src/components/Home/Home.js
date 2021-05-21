import React ,{ useContext ,useState}from 'react'
import { CustomerListContext } from '../Context/Context'
import Customer from '../CustomerCard/CustomerCard'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import upArrow from '../../icons/up-arrow.svg'
import downArrow from '../../icons/down-arrow.svg';
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
		<div className="cardPage" key={new Date()}>
			<div className="buttons">
				<Button
					
					onClick={() => updateToggle()}
					className="toggle"
					color="primary"
					variant="contained"
					component="span">
					Show {toggle ? 'Minimum' : 'Maximum'} Price
				</Button>
				<button onClick={() => setSortOrderFn()} className="order">
					{sortOrder === 'Ascending' ? (
						<img src={upArrow} alt="Ascending" />
					) : (
						<img src={downArrow} alt="Descending" />
					)}
				</button>
			</div>
			<div className="cardDetail">
				{customerList.map((customer) => {
					return (
						<Link to={`/customer/${customer.id}`} className="link">
							<Customer props={customer} key={customer.id} toggle={toggle} />
						</Link>
					);
				})}
			</div>
		</div>
	);
});

export default Home;
