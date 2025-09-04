import * as React from "react"
import { cn } from "@/lib/utils"

type Align = "start" | "center" | "end" | "stretch"

interface TwoColumnGridProps {
    children: React.ReactNode // pass exactly two children: left then right
    className?: string
    align?: Align // vertical alignment of the two columns
    gap?: 2 | 4 | 6 | 8 | 10 // tailwind gap scale
    reverseOnMobile?: boolean // swap order on mobile (stacks)
    ariaLabel?: string // optional accessibility label for the section
    cellClassName?: string // allow styling the per-column wrappers
    leftClassName?: string // allow styling the left column wrapper
    rightClassName?: string // allow styling the right column wrapper
}

export function TwoColumnGrid({
    children,
    className,
    align = "start",
    gap = 6,
    reverseOnMobile = false,
    ariaLabel,
    cellClassName,
    leftClassName,
    rightClassName,
}: TwoColumnGridProps) {
    // Coerce children to array and use only the first two
    const items = React.Children.toArray(children).slice(0, 2)
    const leftChild = items[0] ?? null
    const rightChild = items[1] ?? null

    const alignClass =
        align === "center"
            ? "items-center"
            : align === "end"
                ? "items-end"
                : align === "stretch"
                    ? "items-stretch"
                    : "items-start"

    const gapClass = gap === 2 ? "gap-2" : gap === 4 ? "gap-4" : gap === 6 ? "gap-6" : gap === 8 ? "gap-8" : "gap-10"
    // const gapClass = gap === 2 ? "gap-2" : gap === 4 ? "gap-4" : gap === 6 ? "gap-6" : gap === 8 ? "gap-8" : "gap-10"

    const leftOrder = reverseOnMobile ? "order-2 md:order-none" : "order-1 md:order-none"
    const rightOrder = reverseOnMobile ? "order-1 md:order-none" : "order-2 md:order-none"

    return (
        <section
            aria-label={ariaLabel}
            className={cn(
                "mx-auto max-w-6xl px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center twoColumn",
                gapClass,
                alignClass,
                className,
            )}
        >
            <div className={cn(leftOrder, "flex justify-center", cellClassName, leftClassName)}>{leftChild}</div>
            <div className={cn(rightOrder, "flex justify-center", cellClassName, rightClassName)}>{rightChild}</div>
        </section>
    )
}

export default TwoColumnGrid
