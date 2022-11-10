import { Routes, Route } from 'react-router-dom'
import './assets/fontawesome/css/fontawesome.css'
import './assets/fontawesome/css/solid.css'
import './assets/fontawesome/css/brands.css'
import './App.css'
import Main from './pages/Main'
import Footer from './components/footer'

function App() {
	return (
		<Routes>
			<Route
				path="/react-demo-travel-site"
				element={
					<>
						<Main />
						<Footer />
					</>
				}
			></Route>
		</Routes>
	)
}

export default App
