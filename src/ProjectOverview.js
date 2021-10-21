import { forwardRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import kanbanImg from './assets/ss-kanban.png'
import ecomImg from './assets/ss-ecom.png'
import portfolioImg from './assets/ss-portfolio.png'
import authImg from './assets/george-prentzas-SRFG7iwktDk-unsplash.jpg'
import firebaseImg from './assets/christian-garcia-N7ugU5iFosI-unsplash-cropped.png'
import { ClipboardIcon, LightningBoltIcon } from '@heroicons/react/solid'
import update from 'immutability-helper'

const data = [
	{
		id: 0,
		type: 'project',
		title: 'Ecommerce - frontend',
		description:
			'Webstore MVP for a single product category. Leverages Tailwind UI components for quick prototyping',
		tags: ['React', 'Tailwind UI', 'Hooks', 'Cookies'],
		image: {
			src: ecomImg,
			label: 'screenshot of live application'
		},
		repoUrl: 'https://github.com/fvd2/ecommerce-frontend',
		liveUrl: 'https://freekvandam.nl/ecom'
	},
	{
		id: 1,
		type: 'project',
		title: 'Ecommerce - backend',
		description:
			'RESTful API with product, cart, order and payment functionality (via Mollie.com integration)',
		tags: ['Node.js', 'Express', 'MongoDB', 'jwt', 'webhook'],
		image: {
			src: ecomImg,
			label: 'screenshot of live application'
		},
		repoUrl: 'https://github.com/fvd2/ecommerce-backend',
		liveUrl: 'https://freekvandam.nl/ecom'
	},
	{
		id: 2,
		type: 'project',
		title: 'Kanban board',
		description:
			'Task list and item tracker with a twist: drag and drop. With firebase auth and firestore to persist state',
		tags: ['react', 'firebase', 'chakra-ui'],
		image: {
			src: kanbanImg,
			label: 'screenshot of live application'
		},
		repoUrl: 'https://github.com/fvd2/kanban',
		liveUrl: 'https://freekvandam.nl/kanban'
	},
	{
		id: 3,
		type: 'template',
		title: 'Authentication API',
		description: 'Easily extendable RESTful API with jwt authentication',
		tags: ['node.js', 'express', 'mongodb', 'jwt'],
		image: {
			src: authImg,
			label: 'image of fingerprint on lit glass surface'
		},
		repoUrl: 'https://github.com/fvd2/rest-api-template',
		liveUrl: undefined
	},
	{
		id: 4,
		type: 'template',
		title: 'React + Firebase',
		description:
			'Template for a React app with Firebase Authentication and Firestore setup',
		tags: ['react', 'firebase'],
		image: {
			src: firebaseImg,
			label: 'desert mountain view'
		},
		repoUrl: 'https://github.com/fvd2/',
		liveUrl: undefined
	},
	{
		id: 5,
		type: 'project',
		title: 'Portfolio',
		description:
			'This website. The goal: show visitors (1) that I am a developer looking for work, (2) what I can do and (3) how to reach me',
		tags: ['react', 'tailwind css', 'emailjs'],
		image: {
			src: portfolioImg,
			label: 'screenshot of portfolio website'
		},
		repoUrl: 'https://github.com/fvd2/portfolio',
		liveUrl: undefined
	},
]

const gradients = [
	'bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900',
	'bg-gradient-to-bl from-green-900 via green-800 to-green-400',
	'bg-gradient-to-r from-yellow-700 to-red-900',
	'bg-gradient-to-tr from-pink-800 to-purple-900',
	'bg-gradient-to-b from-blue-900 to-indigo-700'
]

const projects = data.map((project, index) => {
	if (project.type === 'project')
		return (
			<ProjectCard
				key={project.id}
				project={project}
				gradient={gradients[index]}
			/>
		)
	else return ''
})

const templates = data.map((project, index) => {
	if (project.type === 'template')
		return (
			<ProjectCard
				key={project.id}
				project={project}
				gradient={gradients[index]}
			/>
		)
	else return ''
})

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const ProjectOverview = forwardRef((props, ref) => {
	const [tabs, setTabs] = useState([
		{ name: 'Projects', icon: LightningBoltIcon, current: true },
		{ name: 'Templates', icon: ClipboardIcon, current: false }
	])

	const handleTabChange = selectedIndex => {
		setTabs(
			update(tabs, {
				0: { current: { $set: false } },
				1: { current: { $set: false } },
				[selectedIndex]: { current: { $set: true } }
			})
		)
	}

	return (
		<section ref={ref}>
			<div className="pt-96 pb-16 md:pt-56 lg:pt-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pb-12 xl:pb-24 bg-gray-100 border-l-2 border-r-2 border-gray-200">
				<div>
					<div className="block pb-10">
						<nav
							className="-mb-px flex justify-center space-x-8"
							aria-label="Tabs">
							{tabs.map((tab, index) => (
								<button
									key={tab.name}
									onClick={() => handleTabChange(index)}
									className={classNames(
										tab.current
											? 'border-indigo-800 text-indigo-900'
											: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
										'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-xl'
									)}
									aria-current={
										tab.current ? 'page' : undefined
									}>
									<tab.icon
										className={classNames(
											tab.current
												? 'text-indigo-800'
												: 'text-gray-400 group-hover:text-gray-500',
											'-ml-0.5 mr-2 h-5 w-5'
										)}
										aria-hidden="true"
									/>
									<span>{tab.name}</span>
								</button>
							))}
						</nav>
					</div>
					<div className="w-full flex justify-center gap-8 flex-wrap">
						{tabs[0].current ? projects : templates}
					</div>
				</div>
			</div>
		</section>
	)
})

export default ProjectOverview
