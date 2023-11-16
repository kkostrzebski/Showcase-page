import { useEffect } from 'react'

const Footer = () => {
	useEffect(() => {
		const handleCurrentYear = () => {
			const year = new Date().getFullYear()
			document.querySelector('.footer__year').innerText = year
		}

		handleCurrentYear()
	}, [])
	return (
		<footer>
			<p className='footer__bottom-text'>
				{' '}
				© <span className='footer__year' /> created by Konrad Kostrzębski
			</p>
		</footer>
	)
}
export default Footer
