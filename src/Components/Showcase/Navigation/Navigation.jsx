import { useEffect, useRef } from 'react'
import '../App.css'
const Navigation = () => {
	const navRef = useRef(null)
	const navBtnRef = useRef(null)
	const allNavItemsRef = useRef(null)
	const logoRef = useRef(null)
	//   const footerYearRef = useRef(null);

	useEffect(() => {
		const nav = navRef.current
		const navBtn = navBtnRef.current
		const logo = logoRef.current
		// const footerYear = footerYearRef.current;
		const allNavItems = allNavItemsRef.current.children

		const scrollToTop = () => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}

		const addClickEvent = (element, callback) => {
			if (element) {
				element.addEventListener('click', callback)
			}
		}

		addClickEvent(logo, scrollToTop)

		const handleNav = () => {
			nav.classList.toggle('nav--active')
			Array.from(allNavItems).forEach(item => {
				item.addEventListener('click', () => {
					nav.classList.remove('nav--active')
				})
			})
			handleNavItemsAnimation()
		}

		const handleNavItemsAnimation = () => {
			let delayTime = 0

			Array.from(allNavItems).forEach(item => {
				item.classList.toggle('nav-items-animation')
				item.style.animationDelay = '.' + delayTime + 's'
				delayTime++
			})
		}

		navBtn.addEventListener('click', handleNav)

		return () => {
			logo.removeEventListener('click', scrollToTop)
			navBtn.removeEventListener('click', handleNav)
			Array.from(allNavItems).forEach(item => {
				item.removeEventListener('click', () => {
					nav.classList.remove('nav--active')
				})
			})
		}
	}, [])

	return (
		<>
			<div className='logo' ref={logoRef}>
				<i className='fa-solid fa-arrow-up'></i>
			</div>
			<button className='burger-btn' ref={navBtnRef}>
				<div className='burger-box'>
					<div className='burger-line' />
				</div>
			</button>
			<nav className='nav' ref={navRef}>
				<div className='nav-items' ref={allNavItemsRef}>
					<a href='#offer' className='nav-item'>
						Offer
					</a>
					<a href='#skills' className='nav-item'>
						Skills
					</a>
					<a href='#projects' className='nav-item'>
						Projects
					</a>
					<a href='#career' className='nav-item'>
						Career
					</a>
					<a href='#contact' className='nav-item'>
						Contact
					</a>
				</div>
			</nav>
		</>
	)
}

export default Navigation
