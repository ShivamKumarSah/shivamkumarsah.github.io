"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = ({
    text,
    duration,
}: {
    text: string;
    duration?: number;
    automatic?: boolean;
}) => {
    const [gradientOffset, setGradientOffset] = useState(0);
    useEffect(() => {
        let frame: number;
        const animate = () => {
            setGradientOffset((prev) => ((prev + 0.01) % 1)); // wrap smoothly
            frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <svg
            width="100%"
            height="100%"
            viewBox="-10 0 320 100"
            xmlns="http://www.w3.org/2000/svg"
            className="select-none"
        >
            <defs>
                <linearGradient id="animatedGradient" gradientTransform="rotate(45)">
                    <stop offset={gradientOffset} stopColor="#0a9600" />
                    <stop offset={((gradientOffset + 0.25) % 1)} stopColor="#ef4444" />
                    <stop offset={((gradientOffset + 0.5) % 1)} stopColor="#3b82f6" />
                    <stop offset={((gradientOffset + 0.75) % 1)} stopColor="#06b6d4" />
                    <stop offset={((gradientOffset + 1) % 1)} stopColor="#8b5cf6" />
                </linearGradient>
            </defs>
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                stroke="url(#animatedGradient)"
                strokeWidth="0.3"
                className="fill-transparent font-[helvetica] text-7xl font-bold"
            >
                {text}
            </text>
        </svg>
    );
};
