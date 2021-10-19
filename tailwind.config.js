const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
	purge: [
		'./src/**/*.js',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'warm-gray': colors.warmGray,
				teal: colors.teal,
			  },
		}
	},
	variants: {
		extend: {
			rotate: ['group-hover'],
			scale: ['group-hover'],
			backgroundColor: ['active'],
			borderColor: ['hover']
		}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/forms')]
}