import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {} from 'react'

import Navigation from './Components/Showcase/Navigation/Navigation'
import Header from './Components/Showcase/Header/Header'
import Offer from './Components/Showcase/Offer/Offer'
import Skills from './Components/Showcase/Skills/Skills'
import Footer from './Components/Showcase/Footer/Footer'
import Projects from './Components/Showcase/Projects/Projects'
import Career from './Components/Showcase/Career/Career'
import Contact from './Components/Showcase/Contact/Contact'
import Home from './Components/Api-app/Home/Home'
import ActorDetails from './Components/Api-app/ActorGame/ActorDetails'
import StarWarsManagementTool from './Components/Api-app/StarWars/StarWarsManagementTool'
import Navigations from './Components/Api-app/Home/Navigation'
import BreedList from './Components/List-of -Dog/List/BreedList'
import BreedSearch from './Components/List-of -Dog/Search/BreedSearch'
import BreedNavigation from './Components/List-of -Dog/BreedNavigation/BreedNavigation'
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
				<Route
					path='/list'
					element={
						<div>
							<BreedNavigation />
							<BreedList />
						</div>
					}
				/>
				<Route
					path='/search'
					element={
						<div>
							<BreedNavigation />
							<BreedSearch />
						</div>
					}
				/>
				
			</Routes>
		</Router>
	)
}

export default App
