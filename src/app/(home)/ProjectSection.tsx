"use client";
import React from "react";
import Image from "next/image";
import { ProjectComp } from "@/components/ui/projectComp";


const content = [
    {
        title: "Sheila – AI-Enabled Home Assistant",
        subtitle: "Bringing intelligence into everyday living.",
        description:
            "I developed Flask-based APIs to control IoT devices, powered by a Logic Gate–driven Artificial Neural Network (ANN) instead of resource-heavy LLMs or cloud models. This unique architecture eliminates dependency on external servers, making the system lightweight, secure, and fully operable on any edge device. The ANN logic enables intelligent decision- making with minimal resources, while integrated voice command support ensures real - time, seamless interaction and instant device feedback.To complement this, I built a JWT - secured React Native dashboard that provides detailed analytics, allowing users to monitor performance and optimize device usage — all without relying on cloud infrastructure.",
        content: (
            <div className="flex  items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
                <Image src="/projectsrc/sheila.webp" alt="Sheila – AI-Enabled Home Assistant" fill style={{ objectFit: 'cover' }} />
            </div>
        ),
    },
    {
        title: "ParCar – Smart Parking IoT Platform",
        subtitle: "Solving urban parking challenges through real-time tech.",
        description:
            "I built an Android application that integrates Google Maps for live slot booking, allowing users to view and reserve available slots in real time. The app leverages Firebase for authentication, push notifications, and seamless data synchronization across devices. To ensure fast and reliable reservations, REST APIs were implemented with a Retrofit client, providing an efficient and responsive user experience.",
        content: (
            <div className="flex items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
                <Image src="/projectsrc/parcar.webp" alt="ParCar – Smart Parking IoT Platform" fill style={{ objectFit: 'cover' }} />
            </div>
        ),
    },
    {
        title: "AI-Netra – Real-Time Object Detection for Accessibility",
        subtitle: "Empowering visually impaired users with instant environmental awareness.",
        description:
            "As the Android developer, I engineered an application using Java that leverages real-time object detection through the device camera. The app swiftly identifies objects with minimal latency, ensuring seamless user experience even during rapid movement. A unique accessibility feature allows users to tap detected objects, prompting the app to speak aloud the object's name—making navigation and understanding of surroundings easier for visually impaired individuals. This intuitive, on-device solution combines speed, accuracy, and voice feedback, fostering greater independence without reliance on external hardware or cloud services.",
        content: (
            <div className="flex items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
                <Image src="/projectsrc/ai-netra.webp" alt="AI-Netra – Real-Time Object Detection for Accessibility" fill style={{ objectFit: 'cover' }} />
            </div>
        ),
    },
    {
        title: "Urban Agro – Intelligent IoT-Based Agricultural Advisor",
        subtitle: "Transforming traditional farming with AI-driven decision support.",
        description:
            "I developed a research-focused Android application, available in both Java (native Android) and React Native versions, that integrates IoT sensor data to monitor plant conditions in real time. The app leverages a custom-trained machine learning model and a fine-tuned large language model (LLM) to deliver smart, context-aware recommendations for crop care, irrigation, and disease management. Sensor inputs are analyzed on-device, enabling fast and secure insights without constant cloud connectivity. This hybrid approach empowers farmers and researchers to optimize agricultural outcomes, combining robust IoT integration with advanced AI analytics for actionable, field-ready intelligence.",
        content: (
            <div className="flex items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
                <Image src="/projectsrc/urban-agro.webp" alt="Urban Agro – Intelligent IoT-Based Agricultural Advisor" fill style={{ objectFit: 'cover' }} />
            </div>
        ),
    },
    {
        title: "Embedded-CNN-and-Model-Visualizer-Software",
        subtitle: "Empowering edge devices with interpretable deep learning.",
        description:
            "I engineered a software suite that enables deployment of Convolutional Neural Networks (CNNs) directly onto embedded devices, bypassing the need for heavyweight cloud-based inference. The system translates trained CNN models into optimized C code for real-time, resource-efficient operation on microcontrollers. To enhance model transparency, I built an interactive visualizer that graphically illustrates layer-wise activations and weight distributions, helping users understand and debug model behavior at every stage. The tool supports model conversion, performance analysis, and intuitive visualization, streamlining the process of bringing advanced AI to resource-constrained environments.",
        content: (
            <div className="flex items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
                <Image src="/projectsrc/CNN-Model-Visualizer.webp" alt="Embedded CNN and Model Visualizer Software" fill style={{ objectFit: 'cover' }} />
            </div>
        ),
    },
];
export default function ProjectSection() {
    return (
        <div className="w-full project-text">
            <ProjectComp content={content} />
        </div>
    );
}
