import React,{useContext} from 'react'
import { CustomerListContext } from '../Context/Context';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import  './Customer.css'

function Customer() {
    const value = useContext(CustomerListContext);
    const { key } = useParams();

    const customer = value.customerList.filter((cust) => {
        return cust.id === key;
    })
    console.log(customer)

    return (
			<div className="custWindow">
				{customer.map((cust) => {
					
					return (

						<div className="custCard">
							<CardMedia
								component="img"
								alt={cust.firstname}
								height="200"
								image={cust.avatarUrl}
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									{cust.firstname} {cust.lastname}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									<strong>Email</strong>: {cust.email}
									<br />
									
									<strong>Maximum Bid</strong> : &#8377; {cust.largeAmount}
									<br />
									<strong>Lowest Bid</strong> : &#8377; {cust.smallAmount}
								</Typography>
							</CardContent>
						</div>
					);
				})}
			</div>
		);
}

export default Customer
