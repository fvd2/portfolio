import { useState } from 'react'
import ProjectCard from './ProjectCard'
import DUMMY_IMG from './assets/gustavo-zambelli-lQKNDz_5kVs-unsplash.jpg'
import { ClipboardIcon, LightningBoltIcon } from '@heroicons/react/solid'
import update from 'immutability-helper'

const data = [
	{
		id: 0,
		type: 'project',
		title: 'Ecommerce - frontend',
		description:
			'Basic but fully functioning webstore. Leverages Tailwind UI components for quick prototyping',
		tags: ['React', 'Tailwind UI', 'Hooks', 'Cookies'],
		image: {
			src: DUMMY_IMG,
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
			src: DUMMY_IMG,
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
			src: DUMMY_IMG,
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
			src: DUMMY_IMG,
			label: 'tbd'
		},
		repoUrl: 'url',
		liveUrl: 'screenshot of project code'
	},
	{
		id: 4,
		type: 'template',
		title: 'React + Firebase',
		description:
			'Template for a React app with Firebase Authentication and Firestore setup',
		tags: ['react', 'firebase'],
		image: {
			src: DUMMY_IMG,
			label: 'screenshot of project code'
		},
		repoUrl: 'url',
		liveUrl: 'url'
	}
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

const ProjectOverview = () => {
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
		<section>
			<div className="max-w-7xl sm:py-6 p-4 sm:p-6 lg:p-8 ">
				<h2 className="text-3xl md:text-4xl lg:text-5xl text-gradient bg-gradient-to-br from-gray-800 to-purple-900 font-bold pt-20 pb-10">
					Recent work
				</h2>
				<div className="flex justify-items-start items-center gap-8 flex-wrap ">
					<ProjectOverview />
					<div>
						<div className="block pb-10">
							<nav
								className="-mb-px flex justify-center lg:justify-start space-x-8"
								aria-label="Tabs">
								{tabs.map((tab, index) => (
									<button
										key={tab.name}
										onClick={() => handleTabChange(index)}
										className={classNames(
											tab.current
												? 'border-indigo-800 text-indigo-900'
												: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
											'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm'
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
						<div className="flex justify-center lg:justify-start items-center gap-8 flex-wrap">
							{tabs[0].current ? projects : templates}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProjectOverview
