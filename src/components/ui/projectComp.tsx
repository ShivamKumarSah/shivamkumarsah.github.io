"use client"
import React, { useEffect, useRef, useState } from "react"
import { useMotionValueEvent, useScroll } from "motion/react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export const ProjectComp = ({
    content,
    contentClassName,
}: {
    content: {
        title: string
        subtitle: string
        description: string
        content?: React.ReactNode | any
    }[]
    contentClassName?: string
}) => {
    const [activeCard, setActiveCard] = React.useState(0)
    const ref = useRef<any>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })
    const cardLength = content.length

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength)
        const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
            const distance = Math.abs(latest - breakpoint)
            if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                return index
            }
            return acc
        }, 0)
        setActiveCard(closestBreakpointIndex)
    })

    const backgroundColors = [
        // "#0f172a", // slate-900
        "#020618", // slate-900
        "#171717", // neutral-900
        "#20002c", // neutral-900
        "#093637", // neutral-900
        "#000000", // black
    ]
    const linearGradients = [
        "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
        "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
        "linear-gradient(to bottom right, #ef32d9, #89fffd)", // orange-500 to yellow-500
        "linear-gradient(to bottom right, #43C6AC, #F8FFAE)", // orange-500 to yellow-500
        "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    ]

    const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0])

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length])
    }, [activeCard])

    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className={cn("relative flex min-h-screen justify-center space-x-10 rounded-md p-10")}
            ref={ref}
        >
            <div className="div relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-2xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-l font-bold text-slate-100"
                            >
                                {item.subtitle}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-kg mt-10 max-w-sm text-slate-300"
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
                className={cn("sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block", contentClassName)}
            >
                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    )
}
