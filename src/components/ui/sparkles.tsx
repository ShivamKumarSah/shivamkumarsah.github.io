"use client"
import { cn } from "@/lib/utils"

type ParticlesProps = {
    id?: string
    className?: string
    background?: string
    particleSize?: number
    minSize?: number
    maxSize?: number
    speed?: number
    particleColor?: string
    particleDensity?: number
}

/**
 * SparklesCore (no-op)
 * We keep the same export/signature so existing imports don't break,
 * but render an empty container (no particles) to match the requested design.
 */
export const SparklesCore = (props: ParticlesProps) => {
    const { className } = props
    return <div className={cn(className)} aria-hidden="true" />
}
