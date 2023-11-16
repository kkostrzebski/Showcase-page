import kot1 from '../../assets/images/Offer/kot1.jpg'
import kot2 from '../../assets/images/Offer/kot2.jpg'
import kot3 from '../../assets/images/Offer/kot3.jpg'
import kot4 from '../../assets/images/Offer/kot4.jpg'
const Offer = () => {
	return (
		<>
			<section id='offer' className='section-padding'>
				<h2 className='section-heading'>Offer</h2>
				<div className='tiles wrapper'>
					<div className='tile'>
						<p className='tile-title'>Web design</p>
						<img src={kot1} alt='Zdjęcie 1' />
					</div>
					<div className='tile'>
						<p className='tile-title'>Strony i aplikacje internetowe</p>
						<img src={kot2} alt='Zdjęcie 2' />
					</div>
					<div className='tile'>
						<p className='tile-title'>RWD</p>
						<img src={kot3} alt='Zdjęcie 3' />
					</div>
					<div className='tile'>
						<p className='tile-title' />
						<img src={kot4} alt='Zdjęcie 4' />
					</div>
				</div>
			</section>
		</>
	)
}
export default Offer
