import React from 'react';
import './CustomerCard.css';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';

const Customer = React.memo(({ props, toggle }) => {
    return (
			<Box
				className="card"
				component="span"
				p={1}
				m={1}
				bgcolor="background.paper">
				<Avatar
					src={props.avatarUrl}
					alt={props.firstname}
					className="avatar-image"
				/>
				<h3 className="avatar-name">
					{props.firstname} {props.lastname}
				</h3>
				<h3 className="avatar-email">{props.email}</h3>
				{toggle ? (
					<h3 className="avatar-amount">&#8377; {props.largeAmount}</h3>
				) : (
					<h3 className="avatar-amount">&#8377; {props.smallAmount}</h3>
				)}
			</Box>
		);
});

export default Customer;

