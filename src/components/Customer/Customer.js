import React from 'react'

const Customer =({props}) =>{

    const bidAmountArr = (arr, high = true) => {
        var newArr = [];
        var amount = 0;

        if (arr) {
            arr.map((arrobj) => {
                return newArr.push(arrobj['amount']);
            });
			
            newArr = newArr.sort((a, b) => b - a);
        
            if (high) {
                if (typeof  newArr[0] === 'undefined') 	return amount;
                else return newArr[0];
            } else {
                if (typeof  newArr[newArr.length - 1] === 'undefined') return amount;
			     else return newArr[newArr.length - 1];
			    }

			
        };
        return amount
    }
    
    let Amount = bidAmountArr(props.bids, false)

   return (
			<div className="card">
				<img
					src={props.avatarUrl}
					alt={props.firstname}
					className="avatar-image"
				/>
				<h3 className="avatar-name">
					{props.firstname} {props.lastname}
				</h3>
				<h3 className="avatar-email">{props.email}</h3>
				<h3 className="avatar-amount">{Amount}</h3>
			</div>
		);
}

export default Customer


// avatarUrl: "https://prod_membership_avatars.s3.amazonaws.com/avatar-file-d84b533b09f34ab6908345833dc21773.jpg"
// bids: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
// email: "test@tes.com"
// firstname: "Smauel"
// hasPremium: true
// id: "1"
// isError: false
// isValid: false
// lastname: "Matthew"
// phone: "9876543210"
// redirect: false
// showNotification: false
// validation: true