import stylex from "@stylexjs/stylex";

const styles = stylex.create({
	gradientBackground: {
		background: 'linear-gradient(0deg, purple 0%, darkgoldenrod 40%)',
		height: '100vh',
		margin: 0,
	},
	white: {
        color: 'white',
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
    circle: {
        position: "absolute",
        backgroundImage: "url('/millennium-falcon.svg')", // Reference the icon in the /public folder
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "50%",
        width: "50px", // Set a fixed width for the icon
        height: "50px", // Set a fixed height for the icon
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        animationName: stylex.keyframes({
            "0%": { transform: "translate(0, 0) rotate(0deg)" },
            "25%": { transform: "translate(50vw, 20vh) rotate(90deg)" },
            "50%": { transform: "translate(-30vw, -30vh) rotate(180deg)" },
            "75%": { transform: "translate(40vw, 50vh) rotate(270deg)" },
            "100%": { transform: "translate(0, 0) rotate(360deg)" },
        }),
    },
});

export { stylex, styles }
