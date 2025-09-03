"use client";

import { cn } from "@/utils/cn";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);

    useEffect(() => {
        if (isInView) {
            animate(
                "span",
                {
                    display: "inline-block",
                    opacity: 1,
                },
                {
                    duration: 0.3,
                    delay: stagger(0.1),
                    ease: "easeInOut",
                }
            );
        }
    }, [isInView, animate]);

    const renderWords = () => {
        return (
            <motion.div ref={scope} className="inline">
                {words.map((word, idx) => {
                    return (
                        <motion.span
                            key={`word-${idx}`}
                            className={cn(
                                "opacity-0 inline-block",
                                word.className
                            )}
                        >
                            {word.text.split("").map((char, charIdx) => (
                                <motion.span
                                    key={`char-${charIdx}`}
                                    className="inline-block"
                                >
                                    {char}
                                </motion.span>
                            ))}
                            &nbsp;
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("text-base sm:text-xl md:text-3xl font-bold", className)}>
            {renderWords()}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
}; 