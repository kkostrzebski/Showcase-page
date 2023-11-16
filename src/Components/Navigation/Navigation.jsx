import { useEffect, useRef } from 'react'

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

		// const handleCurrentYear = () => {
		//   const year = new Date().getFullYear();
		//   footerYear.innerText = year;
		// };
		// handleCurrentYear();

		navBtn.addEventListener('click', handleNav);

		// W przypadku zdarzenia, które wywołuje nasz efekt, warto usunąć nasłuchiwacze
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
				Twoje.<span>Logo</span>
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
					<a href='#about' className='nav-item'>
						About
					</a>
					<a href='#projects' className='nav-item'>
						Projects
					</a>
					<a href='#contact' className='nav-item'>
						Contact
					</a>
				</div>
			</nav>
			<div className='social'>
				<div className='social-icons'>
					<a href='https://github.com/kkostrzebski' target='_blank' rel='noreferrer'>
						<i className='fab fa-github' />
					</a>
					<a href='https://www.linkedin.com/in/konrad-kostrzębski-067346278/' target='_blank' rel='noreferrer'>
						<i className='fab fa-linkedin' />
					</a>
					<a href='link-do-Facebooka'>
						<i className='fab fa-facebook' />
					</a>
				</div>
			</div>
		</>
	)
}

export default Navigation
