import { useState } from 'react'

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})

	const handleChange = e => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		// Tutaj możesz dodać logikę obsługi wysłania formularza, np. wywołanie API, zapisanie do bazy danych, itp.
		console.log('Formularz został wysłany:', formData)
		// Możesz również zresetować stan formularza po wysłaniu
		setFormData({
			name: '',
			email: '',
			subject: '',
			message: '',
		})
	}

	return (
		<section id='contact' className='section-padding'>
			<h2 className='section-heading'>Contact</h2>
			<form className='contact-form' onSubmit={handleSubmit}>
				<label className='contact-label' htmlFor='name'>
					Name:
				</label>
				<input
					className='contact-input'
					type='text'
					id='name'
					name='name'
					value={formData.name}
					onChange={handleChange}
					required
				/>

				<label className='contact-label' htmlFor='email'>
					Email:
				</label>
				<input
					className='contact-input'
					type='email'
					id='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					required
				/>

				<label className='contact-label' htmlFor='subject'>
					Subject:
				</label>
				<input
					className='contact-input'
					type='text'
					id='subject'
					name='subject'
					value={formData.subject}
					onChange={handleChange}
					required
				/>

				<label className='contact-label' htmlFor='message'>
					Message:
				</label>
				<textarea
					className='contact-textarea'
					id='message'
					name='message'
					value={formData.message}
					onChange={handleChange}
					required
				/>

				<button className='contact-button' type='submit'>
					Send
				</button>
			</form>
		</section>
	)
}
export default Contact
