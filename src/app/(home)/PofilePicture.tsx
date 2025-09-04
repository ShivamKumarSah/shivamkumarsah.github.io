"use client";
import React from "react";
import { PixelatedCanvas } from "@/components/ui/profile-canvas";

export function ProfilePicture() {
  const [canvasSize, setCanvasSize] = React.useState({ width: 250, height: 400 });

  React.useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 768) {
        setCanvasSize({ width: 400, height: 500 });
      } else {
        setCanvasSize({ width: 250, height: 400 });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="mx-auto mt-8">
      <PixelatedCanvas
        className="profile-canvas"
        src="/shivam.webp"
        width={canvasSize.width}
        height={canvasSize.height}
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
