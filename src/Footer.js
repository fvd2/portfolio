const socials = [
	{
		name: 'GitHub',
		href: 'https://github.com/fvd2/',
		icon: props => (
			<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
				<path
					fillRule="evenodd"
					d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
					clipRule="evenodd"
				/>
			</svg>
		)
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/freek-van-dam-32660a1/',
		icon: props => (
			<svg width="auto" height="30px" viewBox="0 0 48 48">
				<g
					id="Icon/Social/linkedin-color"
					stroke="none"
					stroke-width="1"
					fill="none"
					fill-rule="evenodd">
					<path
						d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z"
						id="Shape"
						fill="currentColor"></path>
				</g>
			</svg>
		)
	},
	{
		name: 'StackOverflow',
		href: 'https://stackoverflow.com/users/13977645/fvd2',
		icon: props => (
			<svg
				aria-hidden="true"
				className="svg-icon iconLogoGlyph native js-svg"
				width="17"
				height="auto"
				viewBox="0 0 25 30">
				<path
					d="M21 27v-8h3v11H0V19h3v8h18z"
					fill="currentColor"></path>
				<path
					d="M17.1.2 15 1.8l7.9 10.6 2.1-1.6L17.1.2zm3.7 14.7L10.6 6.4l1.7-2 10.2 8.5-1.7 2zM7.2 12.3l12 5.6 1.1-2.4-12-5.6-1.1 2.4zm-1.8 6.8 13.56 1.96.17-2.38-13.26-2.55-.47 2.97zM19 25H5v-3h14v3z"
					fill="currentColor"></path>
			</svg>
		)
	}
]

const Footer = () => {
	return (
		<footer className="bg-white">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center items-center space-x-6 md:order-2">
					{socials.map(item => (
						<a
							key={item.name}
							href={item.href}
							target="_blank"
							rel="noreferrer"
							className="text-gray-400 hover:text-gray-500">
							<span className="sr-only">{item.name}</span>
							<item.icon className="h-6 w-6" aria-hidden="true" />
						</a>
					))}
				</div>
				<div className="mt-8 md:mt-0 md:order-1">
					<p className="text-center text-base text-gray-400">
						&copy; 2021 Freek van Dam
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
