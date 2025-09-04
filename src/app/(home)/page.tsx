"use client";
import { CareerSection } from "./CareerSection";
import ProjectSection from "./ProjectSection";
import TwoColumnGrid from "./TwoColumnGrid";
import { NavBarSection } from "./NavBarSection";
import { SignupForm } from "./SignupForm";
import { Globe } from "./Globe";
import { SkillSection } from "./SkillSection";
import BottomSIT from "./BottomSIT";
import { CardForResume } from "./CardForResume";
import { ParagraphSection } from "./ParagraphSection";
import { LightText } from "./LighText";

import React from "react";

export default function Home() {
  return (
    <>
      <NavBarSection />
      <TwoColumnGrid cellClassName="bg-black py-30 rounded-lg">
        <CardForResume />
        <ParagraphSection />
      </TwoColumnGrid>

      <SkillSection />
      <CareerSection />
      <LightText />
      <ProjectSection />
      {/* <TestimonialsSection /> */}
      <BottomSIT />
      <TwoColumnGrid cellClassName="bg-black p-4 rounded-lg">
        <SignupForm />
        <Globe />
      </TwoColumnGrid>
    </>
  );
}