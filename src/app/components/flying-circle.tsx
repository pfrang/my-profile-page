import React, { useEffect, useState } from "react";
import { styles, stylex, flyKeyframesTop, flyKeyframesRight, flyKeyframesBottom, flyKeyframesLeft } from "../styles";


const getRandomDuration = (min, max) => `${Math.random() * (max - min) + min}s`;
const getRandomDelay = (maxDelay) => `${Math.random() * maxDelay}s`;

const getRandomEdgePosition = () => {
    const edges = ['top', 'right', 'bottom', 'left'];
    const edge = edges[Math.floor(Math.random() * edges.length)];
    switch (edge) {
        case 'top':
            return { top: '0%', left: `${Math.random() * 100}%`, keyframes: flyKeyframesTop };
        case 'right':
            return { top: `${Math.random() * 100}%`, left: '100%', keyframes: flyKeyframesRight };
        case 'bottom':
            return { top: '100%', left: `${Math.random() * 100}%`, keyframes: flyKeyframesBottom };
        case 'left':
            return { top: `${Math.random() * 100}%`, left: '0%', keyframes: flyKeyframesLeft };
        default:
            return { top: '0%', left: '0%', keyframes: flyKeyframesTop };
    }
};
const getRandomDirection = () => {
    const directions = ['normal', 'reverse', 'alternate', 'alternate-reverse'];
    return directions[Math.floor(Math.random() * directions.length)];
};

export const CircleAnimation = ({ count }) => {

    return (
        <div className=" w-full h-full relative " >
            {Array.from({ length: count }).map((_, index) => {
                const size = 30 + index * 10; // Dynamic size
                const position = getRandomEdgePosition(); // Constrain position within viewport

                return (
                    <div
                        key={index}
                        {...stylex.props(styles.circle)} // Use stylex for static styling and animations
                       style={{
                            top: position.top,
                            left: position.left,
                            width: `${size}px`,
                            height: `${size}px`,
                           animationName: position.keyframes,
                            animationDuration: getRandomDuration(2, 5), // Random duration for fast movement
                        }}
                    />
                );
            })}
        </div>
    );
};
