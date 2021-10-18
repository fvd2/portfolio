const About = () => {
	return (
		<section className="group grid grid-cols-3 grid-rows-3 -mt-20 pb-10">
			<div className="grid col-start-1 col-span-full row-start-1 row-span-full relative max-w-7xl mx-5 sm:mx-20 md:mx-40 lg:mx-52 transform rotate-3 rounded-lg bg-green-500 py-4 px-4 sm:px-6 lg:px-8"/>
			<div className="grid col-start-1 col-span-full row-start-1 row-span-full relative max-w-7xl mx-5 sm:mx-20 md:mx-40 lg:mx-52 transform -rotate-3 rounded-lg bg-green-100 py-4 px-4 sm:px-6 lg:px-8"/>
			<div className="grid col-start-1 col-span-full row-start-1 row-span-full z-10 max-w-7xl mx-5 sm:mx-20 md:mx-40 lg:mx-52  rounded-lg bg-white py-4 px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<p className="mt-2 text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
						Hi, I'm Freek
					</p>
					<p className="py-2 mx-auto lg:mt-4 max-w-2xl text-lg lg:text-2xl text-gray-700">
						Consultant turned developer. Looking for a team to
						learn, build high quality software, and have fun
					</p>
					<div className="py-4 flex justify-center gap-3">
						<button className="mr-2 mb-2 py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-3xl font-semibold text-gray-700">Review my work</button>
						<button className="mr-2 mb-2 py-2 px-4 rounded-3xl transition duration-150 shadow-2xl  drop-shadow-2xl text-white font-semibold bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">Contact me</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
