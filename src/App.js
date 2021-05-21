
import { CustomerContext} from './components/Context/Context'
import Home from './components/Home/Home'
import './App.css'

function App() {

  
  return (
		<CustomerContext>
			<div className="main">
				<Home />
			</div>
		</CustomerContext>
	);
}

export default App;
