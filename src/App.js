
import { CustomerContext} from './components/Context/Context'
import Home from './components/Home/Home'
import {  BrowserRouter as Router ,Route } from 'react-router-dom';
import Customer from './components/Customer/Customer'
import './App.css'

function App() {

  
  return (
		<CustomerContext>
			<Router>
				<div className="main">
					<Route
						exact
						path="/arploit/TravClan-assignment-test/"
						component={Home}
					/>
					<Route
						exact
						path="/arploit/TravClan-assignment-test/customer/:key"
						component={Customer}
					/>
				</div>
			</Router>
		</CustomerContext>
	);
}

export default App;
