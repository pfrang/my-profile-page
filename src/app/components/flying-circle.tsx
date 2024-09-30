"use client"
import React, { useEffect, useState } from "react";
import { styles, stylex } from "../styles";



const getRandomDuration = (min, max) => `${Math.random() * (max - min) + min}s`;
const getRandomDelay = (maxDelay) => `${Math.random() * maxDelay}s`;

const getRandomPosition = (size) => {
    if(typeof window === "undefined") return { top: "50vh", left: "50vw" };
    const maxTop = 100 - (size / window.innerHeight) * 100;
    const maxLeft = 100 - (size / window.innerWidth) * 100;
    return {
        top: `${Math.random() * maxTop}vh`,
        left: `${Math.random() * maxLeft}vw`,
    };
}

export const CircleAnimation = ({ count }) => {

    return (
        <div className=" w-full h-full relative " >
            {Array.from({ length: count }).map((_, index) => {
                const size = 30 + index * 10; // Dynamic size
                const position = getRandomPosition(size); // Constrain position within viewport

                return (
                    <div
                        key={index}
                        {...stylex.props(styles.circle)} // Use stylex for static styling and animations
                        style={{
                            ...position, // Apply constrained random position
                            width: `${size}px`,
                            // zIndex: index,
                            height: `${size}px`,
                            animationDuration: getRandomDuration(5, 10), // Random duration for bounce and rotate
                            animationDelay: getRandomDelay(2), // Random delay for both animations
                        }}
                    />
                );
            })}
        </div>
    );
};
