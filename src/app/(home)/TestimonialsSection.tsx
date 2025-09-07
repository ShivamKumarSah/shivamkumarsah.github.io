"use client";

import React from "react";
import { InfiniteMovingCards } from "../../components/ui/tesimonialComp";

export function TestimonialsSection() {
    return (
        <div className="h-[30rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote:
            "Working with Shivam was a game-changer. His grasp of full-stack development and seamless UI design brought our project to life faster than we expected. His communication and dedication stood out. I would recommend him to anyone serious about quality tech solutions.",
        name: "Dr. Amlan Chakrabarti",
        title: "Director, University of Calcutta",
    },
    {
        quote:
            "Shivam showed outstanding skills during our mobile app project. His innovative ideas and quick prototyping helped us achieve a real-time solution efficiently. He consistently delivered beyond expectations. A highly dependable developer and collaborator..",
        name: "Mr. Rajeev Sharma",
        title: "Project Mentor, NIC (National Informatics Centre)",
    },
    {
        quote: "We needed a website revamp, and Shivam made the whole experience smooth and enjoyable. He not only delivered on time but added fresh design perspectives. His technical expertise and creative mindset were impressive. Will definitely work again!",
        name: "Mrs. Priya Sinha",
        title: "Local Business Owner, Laziz Cafe",
    },
    {
        quote:
            "It’s rare to find someone as resourceful as Shivam. His contributions during the DRDO project were impactful and smartly executed. Always proactive, always pushing limits. Highly recommend him for complex, fast-paced tech projects.",
        name: "Mr. Arindam Ghosh",
        title: "Project Manager, DRDO Initiative",
    },
    {
        quote:
            "Shivam was instrumental in building our online platform for local artisans. His passion for blending technology with real-world impact was visible in every feature he created. A true professional with a heart for innovation.",
        name: "Ms. Sneha Dutta",
        title: "NGO Founder, ArtConnect Foundation",
    },
];
