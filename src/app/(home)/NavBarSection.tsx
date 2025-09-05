"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/navbarComp";
import { useState } from "react";
import HeroSection from "./HeroSection";


export function NavBarSection() {
    const navItems = [
        {
            name: "About Me",
            link: "#about",
        },
        {
            name: "Skills",
            link: "#skills",
        },
        {
            name: "Work Experience",
            link: "#experience",
        },
        {
            name: "Contact Me",
            link: "#contact",
        }
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full">
            <Navbar className="m-0 p-0 top-0">
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">
                        <NavbarButton variant="primary" href="mailto:shivamsah26.11@gmail.com">E-Mail</NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            {/* <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Login
                            </NavbarButton> */}
                            <NavbarButton
                                href="mailto:shivamsah.tech@gmail.com"
                                variant="primary"
                                className="w-full"
                            >
                                E-mail
                            </NavbarButton>

                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
            <HeroSection />
        </div>
    );
}
