import stylex from "@stylexjs/stylex";


const flyKeyframesTop = stylex.keyframes({
    '0%': { transform: 'translate(0, 0) rotate(130deg)' },
    '100%': { transform: 'translate(100vw, 100vh) rotate(130deg)' },
});

const flyKeyframesRight = stylex.keyframes({
    '0%': { transform: 'translate(0, 0) rotate(220deg)' },
    '100%': { transform: 'translate(-100vw, 100vh) rotate(220deg)' },
});

const flyKeyframesBottom = stylex.keyframes({
    '0%': { transform: 'translate(0, 0) rotate(300deg)' },
    '100%': { transform: 'translate(-100vw, -100vh) rotate(300deg)' },
});

const flyKeyframesLeft = stylex.keyframes({
    '0%': { transform: 'translate(0, 0) rotate(60deg)' },
    '100%': { transform: 'translate(100vw, -100vh) rotate(60deg)' },
});

const styles = stylex.create({
	gradientBackground: {
		background: 'linear-gradient(0deg, purple 0%, darkgoldenrod 40%)',
		height: '100vh',
		margin: 0,
	},
	white: {
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
            '0%': { transform: 'translate(0, 0)' },
            '100%': { transform: 'translate(100vw, 100vh)' },
        }),
    },
});

export { stylex, styles, flyKeyframesTop, flyKeyframesRight, flyKeyframesBottom, flyKeyframesLeft }
