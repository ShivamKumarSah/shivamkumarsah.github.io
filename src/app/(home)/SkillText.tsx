"use client";
import React from "react";
import { ColourfulText } from "@/components/ui/colourfulTextComp";

export function SkillText() {
    return (
        <div className="w-full flex items-center justify-center relative overflow-hidden bg-black py-8 md:py-12 lg:py-16" id="skills">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-center text-white relative z-2 font-sans px-4 sm:px-6 md:px-8 max-w-4xl mx-auto color-text">
                What I Bring to the Table <br /><ColourfulText text="I Code, I Build," /> <br className="hidden sm:block" /> I Solve with These Tools
            </h3>
        </div>
    );
}
