/* eslint-disable react/no-unescaped-entities */
import '../App.css'
const Skills = () => {
	return (
		<section id='skills' className='section-padding'>
			<h2 className='section-heading'>Skills</h2>
			<h3 className='skill-heading'>Soft</h3>
			<div className='soft-skills wrapper'>
				<div className='soft-skill first'>
					<div className='soft-skill-title'>Accuracy</div>
					<div className='soft-skill-description'>I prioritize high-quality work</div>
				</div>
				<div className='soft-skill second'>
					<div className='soft-skill-title'>Analytical thinking</div>
					<div className='soft-skill-description'>
						Completing technical studies has helped me develop the ability to think logically and solve problems
					</div>
				</div>
				<div className='soft-skill third'>
					<div className='soft-skill-title'>Communication skills</div>
					<div className='soft-skill-description'>
						I am good at building relationships and working as part of a team.
					</div>
				</div>
				<div className='soft-skill fourth'>
					<div className='soft-skill-title'>Ability to organise my own and the team's work effectively</div>
					<div className='soft-skill-description'>
						I am very good at organising the work of others and delegating tasks
					</div>
				</div>
			</div>
			<h3 className='skill-heading'>Hard</h3>
			<div className='hard-skills'>
				<div className='skill-tile'>
					<i className='fab fa-html5' />
					<span>HTML5</span>
				</div>
				<div className='skill-tile'>
					<i className='fab fa-css3' />
					<span>CSS3</span>
				</div>
				<div className='skill-tile'>
					<i className='fa-brands fa-sass' />
					<span>Sass</span>
				</div>
				<div className='skill-tile'>
					<i className='fab fa-js' />
					<span>JavaScript</span>
				</div>
				<div className='skill-tile'>
					<iconify-icon icon='simple-icons:typescript' />
					<span>TypeScript</span>
				</div>
				<div className='skill-tile'>
					<i className='fa-brands fa-git-alt' />
					<span>Git</span>
				</div>
				<div className='skill-tile'>
					<i className='fab fa-react' />
					<span>React</span>
				</div>
				<div className='skill-tile'>
					<i className='fa-brands fa-angular' />
					<span>Angular</span>
				</div>
				<div className='skill-tile'>
					<i className='fa-brands fa-npm' />
					<span>NPM</span>
				</div>
				<div className='skill-tile'>
					<i className='fa-brands fa-bootstrap' />
					<span>Bootstrap</span>
				</div>
				<div className='skill-tile'>
					<iconify-icon icon='file-icons:vite'></iconify-icon>
					<span>Vite</span>
				</div>
			</div>
		</section>
	)
}
export default Skills
