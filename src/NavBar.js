import PlayIcon from './PlayIcon'

const NavBar = ({ setOpenForm }) => {
	return (
		<div className="h-40 w-screen bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900">
			<nav
				aria-label="Top"
				className="relative max-w-7xl mx-auto h-16 border-transparent text-white py-4 px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between">
					<div className="inline-flex items-center">
						<PlayIcon size={8} isWhite={true} />

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
						<button
							type="button"
							onClick={() => setOpenForm(true)}
							className="mr-2 py-1 px-3 rounded-3xl transition duration-150 shadow-2xl  drop-shadow-2xl bg-purple-700 hover:bg-purple-600 active:bg-purple-900 text-white font-semibold">
							Contact me
						</button>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default NavBar
