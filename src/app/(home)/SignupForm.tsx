"use client";
import React, { useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/lib/utils";

export function SignupForm() {
    // State for modal visibility and message
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            firstname: (e.currentTarget.elements.namedItem("firstname") as HTMLInputElement).value,
            lastname: (e.currentTarget.elements.namedItem("lastname") as HTMLInputElement).value,
            email: (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value,
            subject: (e.currentTarget.elements.namedItem("subject") as HTMLInputElement).value,
            message: (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement).value,
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success) {
                setModalMessage("Message sent successfully!");
            } else {
                setModalMessage("Oops! Message failed to send. Please try again.");
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            setModalMessage(`Network error: ${errorMessage}. Please check your connection and try again.`);
        } finally {
            setShowModal(true);
        }
    };

    return (
        <>
            {/* Blur background when modal is open */}
            <div className={cn("transition-filter duration-300", showModal && "filter blur-sm")}>
                <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black" id="contact">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                        Have a Project, Idea or <br className="hidden sm:block" /> Just Want to Say Hi?
                    </h2>
                    <p className="mt-2 max-w-sm text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                        I&apos;m always open to discussing product design work, development partnerships, or side projects.<br className="hidden sm:block" />Drop a message and I&apos;ll get back to you as soon as I can.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-4 sm:mt-6">
                        <div className="mb-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                            <LabelInputContainer className="w-full sm:w-1/2">
                                <Label htmlFor="firstname">First name</Label>
                                <Input id="firstname" name="firstname" placeholder="e.g., Sarah" type="text" required />
                            </LabelInputContainer>
                            <LabelInputContainer className="w-full sm:w-1/2">
                                <Label htmlFor="lastname">Last name</Label>
                                <Input id="lastname" name="lastname" placeholder="e.g., Johnson" type="text" required />
                            </LabelInputContainer>
                        </div>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" name="email" placeholder="e.g., sarah.johnson@company.com" type="email" required />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" name="subject" placeholder="e.g., Job opportunity for Frontend Developer" type="text" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-6 sm:mb-8">
                            <Label htmlFor="message">Message</Label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="e.g., Please provide details about the role or project..."
                                className="w-full rounded-md border p-2 text-sm sm:text-base dark:bg-gray-800 dark:text-white"
                                rows={5}
                                required
                            />
                        </LabelInputContainer>

                        <button
                            className="cursor-pointer group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                            type="submit"
                        >
                            Let&apos;s Talk &rarr;
                            <BottomGradient />
                        </button>
                    </form>
                </div>
            </div>

            {/* Modal Popup */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-gray-900 text-white rounded-lg p-4 sm:p-6 max-w-sm mx-auto shadow-lg">
                        <p className="mb-4 text-center text-sm sm:text-base">{modalMessage}</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="cursor-pointer mx-auto block rounded-md bg-indigo-600 px-4 py-2 text-sm sm:text-base font-semibold hover:bg-indigo-700"
                        >
                            Okay
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

interface LabelInputContainerProps {
    children: React.ReactNode;
    className?: string;
}

const LabelInputContainer: React.FC<LabelInputContainerProps> = ({
    children,
    className,
}) => <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};
