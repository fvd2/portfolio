import PlayIcon from './PlayIcon'
import bgImage from './assets/luca-calderone-1T97FaKvno8-unsplash-cut.png'

const NavBar = ({ socials }) => {
	return (
		<>
			<img
				className="absolute max-w-7xl h-96 w-screen object-cover md:w-full md:h-auto left-1/2 transform -translate-x-1/2 "
				src={bgImage}
				alt="snow-covered mountain peak"></img>
			<div className="h-40 w-screen">
				<nav
					aria-label="Top"
					className="relative max-w-7xl mx-auto h-16 border-transparent text-white py-4 px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between">
						<div className="inline-flex items-center">
							<PlayIcon
								id="navbar"
								styling={{ className: `h-8` }}
								isWhite={true}
							/>

							{/* logo */}
							<div className="flex ml-2 text-xl">
								<span className={'font-bold text-white'}>
									freek
								</span>
								<span>vandam.nl</span>
							</div>
						</div>

						{/* nav buttons */}
						<div className="flex md:gap-4 md:items-center">
							<div className="flex justify-center items-center space-x-6 md:order-2">
								{socials.map(item => (
									<a
										key={item.name}
										href={item.href}
										target="_blank"
										rel="noreferrer"
										className="text-white hover:text-gray-400">
										<span className="sr-only">
											{item.name}
										</span>
										<item.icon
											className="h-6 w-6"
											aria-hidden="true"
										/>
									</a>
								))}
							</div>
						</div>
					</div>
				</nav>
			</div>
		</>
	)
}

export default NavBar
