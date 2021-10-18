import { BsGithub } from 'react-icons/bs'

const ProjectCard = ({ project, gradient }) => {
	const { type, title, description, tags, image, repoUrl, liveUrl } = project

	return (
		<div className="group grid grid-cols-3 grid-rows-3 max-w-sm">
			<div className="grid col-start-1 col-span-full row-start-1 row-span-full z-0 bg-gray-200 h-full w-full transform transition-transform rotate-0 group-hover:-rotate-6 rounded-2xl"></div>
			<div
				className={`grid col-start-1 col-span-full row-start-1 row-span-full z-10 ${gradient} h-full w-full transform transition-transform rotate-0 group-hover:-rotate-3 rounded-2xl`}></div>
			<div className="col-start-1 col-span-full row-start-1 row-span-full z-40 flex-col self-stretch border-2 bg-gray-50 shadow-2xl rounded-xl">
				<img
					src={image.src}
					alt={image.alt}
					className="w-full object-cover rounded-t-xl"
				/>
				<div className="px-3 py-3">
					<div className="flex-row">
						<p className="text-sm text-indigo-800 uppercase font-bold">
							{type}
						</p>
						<p className="text-xl font-bold">{title}</p>
						<p className="text-lg pt-1">{description}</p>
					</div>
					<div className="pt-4 pb-2">
						{tags.map((tag, index) => (
							<span key={index} className="inline-block bg-gray-200 rounded-full py-1 px-2 text-sm font-semibold text-gray-800 mr-1 mb-2">
								{tag}
							</span>
						))}
					</div>
					<div className="h-10 inline-flex items-center">
						<a
							href={liveUrl}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center w-auto bg-blue-900 border-2 border-bg-blue-900 hover:bg-indigo-900 rounded-md py-2 px-3 font-semibold text-white mr-2 mb-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
								<path
									fillRule="evenodd"
									d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="ml-2">View live app</span>
						</a>
						<a
							href={repoUrl}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center w-auto bg-white hover:bg-gray-100 border-2 border-gray-100 rounded-md py-2 px-3 font-semibold text-blue-900 mr-2 mb-2">
							<BsGithub size={22} />
							<span className="ml-2">View on Github</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
