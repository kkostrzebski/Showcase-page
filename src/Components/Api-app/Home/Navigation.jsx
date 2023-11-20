import { Link, useLocation } from 'react-router-dom'
import './App.css'
const Navigation = () => {
	const location = useLocation()
	const isHomePage = location.pathname === '/'

	if (isHomePage) {
		return null
	}

	return (
		<nav className='nav-container'>
			<ul className='nav-list'>
				<li>
					<Link to='/' className='nav-home'>
						<div className='nav-icon'>🏠</div>
					</Link>
				</li>
				<li>
					<Link to='/game'>One actor, three movies</Link>
				</li>
				<li>
					<Link to='/star-wars-management'>Star Wars Management Tool</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
