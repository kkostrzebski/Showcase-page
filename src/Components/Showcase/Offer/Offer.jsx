import Design from '../../../assets/images/Offer/Design.jpg'
import RWDs from '../../../assets/images/Offer/RWD.jpg'
import SEOs from '../../../assets/images/Offer/SEO.jpg'
import Web from '../../../assets/images/Offer/Web.jpg'
import '../App.css'
const Offer = () => {
	return (
		<>
			<section id='offer' className='section-padding'>
				<h2 className='section-heading'>Offer</h2>
				<div className='tiles wrapper'>
					<div className='tile'>
						<p className='tile-title'>Web design</p>
						<img src={Design} alt='Zdjęcie 1' />
					</div>
					<div className='tile'>
						<p className='tile-title'>Web sites and web applications</p>
						<img src={Web} alt='Zdjęcie 2' />
					</div>
					<div className='tile'>
						<p className='tile-title'>RWD</p>
						<img src={RWDs} alt='Zdjęcie 3' />
					</div>
					<div className='tile'>
						<p className='tile-title'>SEO</p>
						<img src={SEOs} alt='Zdjęcie 4' />
					</div>
				</div>
			</section>
		</>
	)
}
export default Offer
