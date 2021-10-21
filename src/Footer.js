const Footer = ({ socials }) => {
	return (
		<footer>
			<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8 bg-gray-50 border-l-2 border-b-2 border-r-2 border-gray-200">
				<div className="flex justify-center items-center space-x-6 md:order-2">
					{socials.map(item => (
						<a
							key={item.name}
							href={item.href}
							target="_blank"
							rel="noreferrer"
							className="text-gray-500 hover:text-gray-700">
							<span className="sr-only">{item.name}</span>
							<item.icon className="h-6 w-6" aria-hidden="true" />
						</a>
					))}
				</div>
				<p className="text-center text-base text-gray-500">
					&copy; 2021 Freek van Dam
				</p>
			</div>
		</footer>
	)
}

export default Footer
