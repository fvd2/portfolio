import PlayIcon from './PlayIcon'

const About = ({ setOpenForm, workPosY }) => {
	const handleShiftToWorkSection = () => {
		window.scrollTo({top: workPosY+150, behavior: 'smooth'})
	}

	return (
		<section className="group grid grid-cols-3 grid-rows-3 -mt-16 md:-mt-12 xl:-mt-6 pb-10">
			<div className="grid col-start-1 col-span-full row-start-1 row-span-full relative max-w-7xl mx-5 sm:mx-20 md:mx-40 lg:mx-52 transform -rotate-6 rounded-lg bg-gray-200 shadow-2xl py-4 px-4 sm:px-6 lg:px-8" />
			<div className="grid col-start-1 col-span-full row-start-1 row-span-full relative max-w-7xl mx-5 sm:mx-20 md:mx-40 lg:mx-52 transform -rotate-3 rounded-lg bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 shadow-2xl py-4 px-4 sm:px-6 lg:px-8" />
			<div className="grid col-start-1 col-span-full row-start-1 row-span-full z-10 max-w-7xl mx-5 sm:mx-20 md:mx-40 lg:mx-52  rounded-lg bg-white shadow-2xl px-4 md:p-6 lg:px-8">
				<div className="inline-flex-row mt-4 text-center items-center justify-items-center">
					<span className="text-xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
						Hi, I'm Freek{' '}
					</span>
					<span className="lg:mt-4 text-lg md:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
						[/freɪk/
					</span>
					<PlayIcon
						id="about"
						styling={{ className: `h-4 md:h-6 lg:h-8 pt-1 md:pt-2 lg:pt-3` }}
						isWhite={false}
					/>
					<span className="mt-2 lg:mt-4 text-lg md:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
						]
					</span>
					<p className="py-2 mx-auto lg:mt-4 max-w-2xl text-sm md:text-md md:text-lg lg:text-2xl text-gray-700">
						Consultant turned developer; looking for a team to
						learn, build high quality software, and have fun
					</p>
					<div className="py-2 lg:py-4 flex justify-center gap-3 text-xs md:text-md lg:text-lg">
						<button onClick={handleShiftToWorkSection} className="mr-2 mb-2 py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-3xl font-semibold text-gray-700">
							Review my work
						</button>
						<button
							onClick={() => setOpenForm(true)}
							className="mr-2 mb-2 py-2 px-4 rounded-3xl shadow-2xl  drop-shadow-2xl text-white font-semibold bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">
							Contact me
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
