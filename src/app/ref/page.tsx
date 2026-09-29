"use client"
import { useEffect, useRef } from "react";

export default function RefComponent() {
    const section1Ref = useRef<HTMLElement>(null);
    const section2Ref = useRef<HTMLElement>(null);
    const section3Ref = useRef<HTMLElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div>
            <header className=" fixed top-0 w-full bg-white z-10">
                <nav className=" flex gap-4 p-4 justify-center">
                    <button className=" cursor-pointer" onClick={() => scrollToSection(section1Ref)}>Section 1</button>
                    <button className=" cursor-pointer" onClick={() => scrollToSection(section2Ref)}>Section 2</button>
                    <button className=" cursor-pointer" onClick={() => scrollToSection(section3Ref)}>Section 3</button>
                </nav>
            </header>

            <main className=" pt-20">
                <section ref={section1Ref} className=" h-screen bg-green-500">
                    <h2>Section 1</h2>
                </section>
                <section ref={section2Ref} className=" h-screen bg-blue-500">
                    <h2>Section 2</h2>
                </section>
                <section ref={section3Ref} className=" h-screen bg-red-700">
                    <h2>Section 3</h2>
                </section>
            </main>
        </div>
    )
}