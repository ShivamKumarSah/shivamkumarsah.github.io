"use client";
import React, { useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/lib/utils";
import { LoadingScreen } from "./LoadingScreen";

export function SignupForm() {
    // State for modal visibility and message
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalType, setModalType] = useState<"success" | "error">("success");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const postJson = async (url: string, body: unknown) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            mode: "cors",
            body: JSON.stringify(body),
        });
        const contentType = res.headers.get("content-type") || "";
        let data: unknown = null;
        if (contentType.includes("application/json")) {
            data = await res.json();
        } else {
            const text = await res.text();
            throw new Error(
                `Non-JSON response (status ${res.status}). First 120 chars: ${text.slice(0, 120)}`
            );
        }
        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
        }
        return data as { success?: boolean; message?: string };
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = {
            firstname: (e.currentTarget.elements.namedItem("firstname") as HTMLInputElement).value,
            lastname: (e.currentTarget.elements.namedItem("lastname") as HTMLInputElement).value,
            email: (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value,
            subject: (e.currentTarget.elements.namedItem("subject") as HTMLInputElement).value,
            message: (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement).value,
        };

        let primary = (process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "").trim();
        const fallback = (process.env.NEXT_PUBLIC_FORM_ENDPOINT || "").trim();

        try {
            // Prefer same-origin Next.js API during local/dev or non-GitHub Pages hosting
            if (!primary && typeof window !== "undefined" && !window.location.hostname.endsWith("github.io")) {
                primary = "/api/contact";
            }

            // Guard: relative API endpoint on static hosting will fail
            if (!primary && typeof window !== "undefined" && window.location.hostname.endsWith("github.io")) {
                throw new Error(
                    "Missing NEXT_PUBLIC_CONTACT_ENDPOINT on static hosting. Set it to a full https URL of your contact API."
                );
            }
            if (primary && primary.startsWith("/") && typeof window !== "undefined" && window.location.hostname.endsWith("github.io")) {
                throw new Error(
                    `Configured endpoint '${primary}' is relative. On GitHub Pages you must use a full https URL.`
                );
            }

            // Try primary JSON API first if provided, else skip to fallback
            if (primary) {
                try {
                    const data = await postJson(primary, formData);
                    if (data?.success) {
                        setModalMessage("Message sent successfully!");
                        setModalType("success");
                        setIsSubmitting(false);
                        setShowModal(true);
                        return;
                    }
                    // If API returns JSON but not success, fall through to fallback
                } catch (_primaryErr) {
                    // Continue to fallback if configured
                }
            }

            // Optional fallback: services like Formspree/Getform endpoint
            if (fallback) {
                try {
                    // Many services accept JSON with Accept: application/json
                    const data = await postJson(fallback, formData);
                    if (data?.success !== false) {
                        setModalMessage(data?.message || "Message sent successfully!");
                        setModalType("success");
                        setIsSubmitting(false);
                        setShowModal(true);
                        return;
                    }
                } catch {
                    // Some services require form-encoded; try that as a secondary attempt
                    const form = new URLSearchParams();
                    Object.entries(formData).forEach(([k, v]) => form.append(k, String(v)));
                    const res = await fetch(fallback, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            "Accept": "application/json, text/plain, */*",
                        },
                        mode: "cors",
                        body: form.toString(),
                    });
                    if (res.ok) {
                        setModalMessage("Message sent successfully!");
                        setModalType("success");
                        setIsSubmitting(false);
                        setShowModal(true);
                        return;
                    }
                    const t = await res.text();
                    throw new Error(`Fallback failed with status ${res.status}. ${t.slice(0, 120)}`);
                }
            }

            // If neither path reported success
            setModalMessage("Oops! Message failed to send. Please try again.");
            setModalType("error");
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            setModalMessage(
                `Network/API error: ${errorMessage}. Ensure a valid HTTPS NEXT_PUBLIC_CONTACT_ENDPOINT (JSON + CORS) or configure NEXT_PUBLIC_FORM_ENDPOINT.`
            );
            setModalType("error");
            setIsSubmitting(false);
            setShowModal(true);
        }
    };

    return (
        <>
            {/* Blur background when modal is open */}
            <div className={cn("transition-filter duration-300", (showModal || isSubmitting) && "filter blur-sm")}>
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
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Let\'s Talk →"}
                            <BottomGradient />
                        </button>
                    </form>
                </div>
            </div>

            {/* Loading Overlay */}
            {isSubmitting && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="max-w-sm mx-auto">
                        <LoadingScreen />
                    </div>
                </div>
            )}

            {/* Modern Animated Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
                    <div
                        role="dialog"
                        aria-modal="true"
                        className="relative mx-4 w-full max-w-md transform overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900 to-black p-[1px] shadow-2xl transition-all"
                    >
                        <div className="relative rounded-2xl bg-zinc-950">
                            <div className="absolute -inset-[1px] rounded-2xl opacity-70 blur-md" style={{
                                background: modalType === "success"
                                    ? "radial-gradient(600px circle at 0% 0%, rgba(34,197,94,0.25), transparent 40%), radial-gradient(600px circle at 100% 0%, rgba(16,185,129,0.2), transparent 40%)"
                                    : "radial-gradient(600px circle at 0% 0%, rgba(239,68,68,0.25), transparent 40%), radial-gradient(600px circle at 100% 0%, rgba(244,63,94,0.2), transparent 40%)"
                            }} />
                            <div className="relative z-10 p-5 sm:p-6">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"
                                    style={{
                                        background: modalType === "success" ? "linear-gradient(135deg, #22c55e, #10b981)" : "linear-gradient(135deg, #ef4444, #f43f5e)"
                                    }}
                                >
                                    {/* Icons */}
                                    {modalType === "success" ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="h-7 w-7">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="h-7 w-7">
                                            <path d="M18 6L6 18M6 6l12 12" />
                                        </svg>
                                    )}
                                </div>
                                <h3 className="text-center text-lg font-semibold text-white">
                                    {modalType === "success" ? "Message Sent" : "Something Went Wrong"}
                                </h3>
                                <p className="mt-2 text-center text-sm text-zinc-300">
                                    {modalMessage}
                                </p>
                                <div className="mt-5 flex items-center justify-center gap-3">
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="cursor-pointer rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-white shadow hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                                    >
                                        Close
                                    </button>
                                    {modalType === "success" && (
                                        <a
                                            href="#contact"
                                            onClick={() => setShowModal(false)}
                                            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                                        >
                                            Send Another
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
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
