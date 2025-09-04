import { PointerHighlight } from "@/components/ui/pointer-highlight";

export function TimelineHead() {
    return (
        <div className="mx-auto max-w-lg py-20 text-4xl font-bold tracking-tight md:text-5xl pointer-text">
            From Intern to Impact:
            <PointerHighlight
                rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
                pointerClassName="text-yellow-500"
            >
                <span className="relative z-10">My Career Timeline</span>
            </PointerHighlight>
        </div>
    );
}
