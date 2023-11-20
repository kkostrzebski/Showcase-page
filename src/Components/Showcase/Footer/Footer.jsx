import { useEffect } from 'react'
import '../App.css'
const Footer = () => {
	useEffect(() => {
		const handleCurrentYear = () => {
			const year = new Date().getFullYear()
			document.querySelector('.footer__year').innerText = year
		}

		handleCurrentYear()
	}, [])
	return (
		<footer className='footer-showcase'>
			<div className='footer__line'></div>
			<p className='footer__bottom-text'>
				{' '}
				© <span className='footer__year' /> created by Konrad Kostrzębski
				<a className='github-icon' href='https://github.com/kkostrzebski' target='_blank' rel='noreferrer'>
					<i className='fab fa-github' />
				</a>
			</p>
		</footer>
	)
}
export default Footer
