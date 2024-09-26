import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
	gradientBackground: {
		background: 'linear-gradient(0deg, purple 0%, darkgoldenrod 40%)',
		height: '100vh',
		margin: 0,
	},
	h1: {
		fontFamily: '"Dyna Puff", sans-serif',
		fontSize: '3rem',
		fontWeight: 400,
		color: 'white',
	},
	p: {
		fontFamily: '"Zilla Slab", serif',
		fontSize: '1.25rem',
		fontWeight: 400,
		color: 'lightgray',
	},
});

export { stylex, styles }
