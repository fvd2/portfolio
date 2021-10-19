import { useState } from 'react'
import pronounceFreek from './assets/freek.mp3'

const PlayIcon = ({ id, styling, isWhite }) => {
	const [audio] = useState(new Audio(pronounceFreek))
	const toggleAudio = () => {
		audio.play()
	}

	return (
		<button onClick={toggleAudio}>
			<span className="sr-only">Pronounce name</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				{...styling}
				viewBox="0 0 20 20"
				fill={`url(#${id})`}>
				<defs>
					<linearGradient
						id={id}
						x1="0%"
						y1="0%"
						x2="0%"
						y2="100%">
						<stop
							offset="0%"
							style={{
								...{
									stopColor: isWhite
										? '#FFFFFF'
										: '#2B6CB0'
								},
								stopOpacity: '1'
							}}
						/>
						<stop
							offset="50%"
							style={{
								...{
									stopColor: isWhite
										? '#FFFFFF'
										: '#4C51BF'
								},
								stopOpacity: '1'
							}}
						/>
						<stop
							offset="100%"
							style={{
								...{
									stopColor: isWhite
										? '#FFFFFF'
										: '#6B46C1'
								},
								stopOpacity: '1'
							}}
						/>
					</linearGradient>
				</defs>
				<path
					fillRule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
					clipRule="evenodd"
				/>
			</svg>
		</button>
	)
}

export default PlayIcon
