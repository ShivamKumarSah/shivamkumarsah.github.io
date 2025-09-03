import { FocusCards } from "@/components/ui/skillGridComp";
import { SkillText } from "./SkillText";

export function SkillSection() {
    const cards = [
        {
            title: "Java",
            src: "./logo/java.webp",
        },
        {
            title: "Python",
            src: "./logo/python.webp",
        },
        {
            title: "JavaScript",
            src: "./logo/javascript.webp",
        },
        {
            title: "ReactJS",
            src: "./logo/react.webp",
        },
        {
            title: "Next JS",
            src: "./logo/nextjs.webp",
        },
        {
            title: "Laravel",
            src: "./logo/laravel.webp",
        },
        {
            title: "PostgreSQL",
            src: "./logo/postgresql.webp",
        },
        {
            title: "MySQL",
            src: "./logo/mysql.webp",
        },
        {
            title: "MongoDB",
            src: "./logo/mongodb.webp",
        },
        {
            title: "REST APIs",
            src: "./logo/restapi.webp",
        },
        {
            title: "AWS",
            src: "./logo/aws.webp",
        },
        {
            title: "Docker",
            src: "./logo/docker.webp",
        },
    ];

    return (
        <>
            <SkillText />
            <FocusCards cards={cards} />
        </>
    );
}
