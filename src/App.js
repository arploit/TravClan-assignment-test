
import { CustomerContext} from './components/Context/Context'
import Home from './components/Home/Home'

function App() {

  
  return (
		<CustomerContext>
			<Home/>
		</CustomerContext>
	);
}

export default App;
