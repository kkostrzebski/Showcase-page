import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../App.css'
const ProjectsCard = ({ title, description, framework, styling, page }) => {
	const navigate = useNavigate()

	const handleChooseClick = () => {
		navigate(`/${page}`)
	}
	return (
		<div className='projects-card' onClick={() => void 0}>
			<div className='projects-card-img projects-card-img--first'>
				<h3 className='projects-card-img-title'>{title}</h3>
				<p className='projects-card-img-info'>
					{' '}
					<i className='fas fa-angle-double-right' /> More information
				</p>
			</div>
			<div className='projects-card-info'>
				<h3 className='projects-card-info-title'>{title}</h3>
				<p>{description}</p>
				<div className='projects-card-details'>
					<br />
					<p>Framework: {framework}</p>
					<p>Styling: {styling}</p>
				</div>

				<Link to={`/${page}`}>
					<button className='projects-card-info-btn btn-special-animation' onClick={handleChooseClick}>
					Go to the project
					</button>
				</Link>
			</div>
		</div>
	)
}

ProjectsCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	framework: PropTypes.string.isRequired,
	styling: PropTypes.string.isRequired,
	page: PropTypes.string.isRequired,
}

const Projects = () => {
	const projectsData = [
		{
			title: 'Api app',
			description:
				'In the Actor Matcher project, users can randomly select an actor and must then find and match a movie in which the selected actor played a role. The goal is to test your knowledge of various actors and their filmography.',
			framework: 'React',
			styling: 'CSS',
			page: 'home',
		},
		{
			title: 'Search engine for dog breeds',
			description:
				'This web page uses a dog breed API to dynamically showcase information and images of different dog breeds. Users can explore and learn about each breed, providing an interactive and visually engaging experience tailored for dog enthusiasts and potential pet owners.',
			framework: 'REACT',
			styling: 'CSS',
			page: 'list',
		},
	]

	return (
		<section className='projects section-padding' id='projects'>
			<div className='wrapper'>
				<h2 className='section-heading'>Projects</h2>
				<div className='projects-cards'>
					{projectsData.map((project, index) => (
						<ProjectsCard
							key={index}
							title={project.title}
							description={project.description}
							framework={project.framework}
							styling={project.styling}
							page={project.page}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects
