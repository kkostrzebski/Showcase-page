import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {} from 'react'

import Navigation from './Components/Navigation/Navigation'
import Header from './Components/Header/Header'
import Offer from './Components/Offer/Offer'
import Skills from './Components/Skills/Skills'
import Footer from './Components/Footer/Footer'
import Projects from './Components/Projects/Projects'
import Career from './Components/Career/Career'
import Contact from './Components/Contact/Contact'
import Home from './Components/Api-app/Home/Home'
import ActorDetails from './Components/Api-app/ActorGame/ActorDetails'
import StarWarsManagementTool from './Components/Api-app/StarWars/StarWarsManagementTool'
import Navigations from './Components/Api-app/Home/Navigation'
const App = () => {
	return (
		<Router basename='/Showcase-page'>
			<Routes>
				<Route
					path='/'
					element={
						<div>
							<Navigation />
							<Header />
							<Offer />
							<Skills />
							<Projects />
							<Career />
							<Contact />
							<Footer />
						</div>
					}
				/>
				<Route
					path='/home'
					element={
						<div>
							<Navigations />
							<Home />
						</div>
					}
				/>
				<Route
					path='/game'
					element={
						<div>
							<Navigations />
							<ActorDetails />
						</div>
					}
				/>
				<Route
					path='/star-wars-management'
					element={
						<div>
							<Navigations />
							<StarWarsManagementTool />
						</div>
					}
				/>
			</Routes>
		</Router>
	)
}

export default App
