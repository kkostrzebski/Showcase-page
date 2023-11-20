import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../Breed.css'
import { FaDog, FaSearch } from 'react-icons/fa'

const BreedNavigation = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const navigate = useNavigate() // Dodaj useNavigate hook

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

	
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('scroll', handleScroll)
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const shouldDisplayIcons = windowWidth < 568


	return (
		<div className='content'>
			<nav className={`nav-container-breed ${isScrolled ? 'scrolled' : ''}`}>
				<ul className='nav-links-breed '>
					<NavLink to='/' activeClassName='active'>
						<div className='nav-icon'>🏠</div>
					</NavLink>
					<li>
						<NavLink  to='/list' activeClassName='active'>
							{shouldDisplayIcons ? <FaDog /> : 'Lista ras'}
						</NavLink>
					</li>
					<li>
						<NavLink to='/search' activeClassName='active' onClick={() => navigate('/search')}>
							{shouldDisplayIcons ? <FaSearch /> : 'Wyszukiwanie rasy'}
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default BreedNavigation
