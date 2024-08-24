import CreateForm from './admin/Components/CreateForm';
import Dashboard from './admin/Components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './admin/Components/Header';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" Component={Dashboard} />
					<Route path="/createForm" Component={CreateForm} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
