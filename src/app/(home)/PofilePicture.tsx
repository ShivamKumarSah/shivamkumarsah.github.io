"use client";
import { PixelatedCanvas } from "@/components/ui/profile-canvas";

export function ProfilePicture() {
  return (
    <div className="mx-auto mt-8">
      <PixelatedCanvas
        src="/shivam.webp"
        width={400}
        height={500}
        cellSize={3}
        dotScale={0.9}
        shape="square"
        backgroundColor=""
        dropoutStrength={0.2}
        interactive
        distortionStrength={3}
        distortionRadius={80}
        distortionMode="swirl"
        followSpeed={0.2}
        jitterStrength={4}
        jitterSpeed={4}
        sampleAverage
        tintColor="#FFFFFF"
        tintStrength={0}

      />
    </div>
  );
}
