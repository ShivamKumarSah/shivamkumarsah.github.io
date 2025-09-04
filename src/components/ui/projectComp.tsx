"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { cn } from "@/lib/utils";

export type ProjectContent = {
    title: string;
    subtitle: string;
    description: string;
    content?: React.ReactNode;
};

interface ProjectCompProps {
    content: ProjectContent[];
    contentClassName?: string;
}

export const ProjectComp: React.FC<ProjectCompProps> = ({ content, contentClassName }) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
            const distance = Math.abs(latest - breakpoint);
            return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
        }, 0);
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "#020618",
        "#171717",
        "#20002c",
        "#093637",
        "#000000",
    ];

    const linearGradients = useMemo(
        () => [
            "linear-gradient(to bottom right, #06b6d4, #10b981)",
            "linear-gradient(to bottom right, #f97316, #eab308)",
            "linear-gradient(to bottom right, #ef32d9, #89fffd)",
            "linear-gradient(to bottom right, #43C6AC, #F8FFAE)",
            "linear-gradient(to bottom right, #ec4899, #6366f1)",
        ],
        []
    );

    const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard, linearGradients]);

    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className={cn("relative flex min-h-screen justify-center space-x-10 rounded-md p-10")}
            ref={ref}
        >
            <div className="relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h2
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-2xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.h2
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-lg font-bold text-slate-100"
                            >
                                {item.subtitle}
                            </motion.h2>
                            <motion.p
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-lg mt-10 max-w-sm text-slate-300"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <div
                style={{ background: backgroundGradient }}
                className={cn(
                    "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md lg:block",
                    contentClassName
                )}
            >
                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    );
};
