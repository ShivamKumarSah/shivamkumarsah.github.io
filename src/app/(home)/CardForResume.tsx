import { GlareCard } from "@/components/ui/glare-card";
import Image from "next/image";

export function CardForResume() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10" id="about">
            <GlareCard className="flex flex-col items-center justify-center ">
                <Image
                    className="absolute inset-0 object-cover "
                    src="/shivaminoffice.webp"
                    alt="Shivam in Office"
                    fill style={{ objectFit: 'cover' }}
                />
            </GlareCard>
        </div>
    );
}
