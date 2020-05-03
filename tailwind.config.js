module.exports = {
	purge: ['./pages/**/*.js', './components/**/*.js'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			width: {
				'48%': '48%',
			},
			colors: {
				primary: '#15202b',
				secondary: '#2d3748',
			},
		},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '960px',
		},
	},
	variants: {},
	plugins: [],
};
