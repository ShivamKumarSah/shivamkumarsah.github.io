"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `I'm Shivam Kumar Sah, a Full-Stack Software Developer with proven experience at NIC and DRDO. I specialize in building enterprise-grade systems that balance technical performance with real-world usability. Whether it’s streamlining government portals or prototyping AI-backed applications, I focus on results that scale and last.
`;

export function ParagraphSection() {
    return <TextGenerateEffect words={words} />;
}
