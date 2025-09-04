"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type CardType = {
    title: string;
    src: string;
};

interface CardProps {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}

const Card: React.FC<CardProps> = React.memo(({ card, index, hovered, setHovered }) => (
    <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
            "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden w-full aspect-square transition-all duration-300 ease-out skill-img",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
    >
        <Image
            src={card.src}
            alt={card.title}
            fill
            className="skill-icon object-cover absolute inset-0 w-full h-full"
        />
        <div
            className={cn(
                "absolute inset-0 bg-black/50 flex items-end py-4 sm:py-6 md:py-8 px-3 sm:px-4 transition-opacity duration-300",
                hovered === index ? "opacity-100" : "opacity-0"
            )}
        >
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                {card.title}
            </div>
        </div>
    </div>
));

Card.displayName = "Card";

interface FocusCardsProps {
    cards: CardType[];
}

export const FocusCards: React.FC<FocusCardsProps> = ({ cards }) => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="w-full bg-black py-8 md:py-12 lg:py-16">
            <div className="grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {cards.map((card, index) => (
                    <Card
                        key={card.title}
                        card={card}
                        index={index}
                        hovered={hovered}
                        setHovered={setHovered}
                    />
                ))}
            </div>
        </div>
    );
};
