import { GlareCard } from "@/components/ui/glare-card";

export function CardForResume() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10" id="about">
            <GlareCard className="flex flex-col items-center justify-center">
                <img
                    className="h-full w-full absolute inset-0 object-cover"
                    src="/shivaminoffice.webp"
                />
            </GlareCard>
        </div>
    );
}
