"use client";

import { useMemo, useRef } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useSwipeStack } from "@/hook/useSwipeStack";

const cards = [
    { id: 1, href: "/projects/notes4all", bg: "/notes4all.png", heading: "Notes4All", desc: "A complete full stack project to help students for notes, assignments and lab manuals.", aria_label: "Notes4All - Full Stack Student Resource Portal by Jay Joshi" },
    { id: 2, href: "/projects/payment", bg: "/payment.png", heading: "Payment Tracker", desc: "A complete full stack project to help students for notes, assignments and lab manuals.", aria_label: "Payment Tracker - Full Stack Student Resource Portal by Jay Joshi" },
    { id: 3, href: "/projects/attendance", bg: "/attendance.png", heading: "Attendance System", desc: "A complete full stack project to help students for notes, assignments and lab manuals.", aria_label: "Attendance System - Full Stack Student Resource Portal by Jay Joshi" },
    { id: 4, href: "/projects/privacyagent", bg: "/privacyagent.png", heading: "Privacy Agent", desc: "A complete full stack project to help students for notes, assignments and lab manuals.", aria_label: "Privacy Agent - Full Stack Student Resource Portal by Jay Joshi" },
];

export default function SwipeCardStack() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    useSwipeStack(containerRef, 4);

    return (
        <div ref={containerRef} className="block md:hidden anim-contain">
            {cards.map(({ id, bg, heading, desc, aria_label, href }, index) => (
                <Link
                    aria-label={aria_label}
                    href={href}
                    key={id}
                    style={{
                        transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (2 - index * 0.3)}deg) scale(${1 + index * 0.05}) translateY(${index * 12}px)`
                    }}
                    className={`card-${id} bg-white rounded-2xl overflow-clip shadow-2xl`}
                    onClick={(e) => {
                        const el = e.currentTarget.closest("[data-swiped]");
                        if (el) e.preventDefault();
                    }}
                >
                    <Image
                        src={bg}
                        alt={heading}
                        width={450}
                        height={250}
                        className="w-full object-cover"
                    />

                    <div className="flex flex-col gap-5 p-5">
                        <h2 className="font-medium text-3xl">{heading}</h2>
                        <p>{desc}</p>
                        <div className="flex text-blue-600 items-center gap-3">
                            View More <FaArrowRight />
                        </div>
                    </div>
                </Link>
            )
            )}
        </div>
    );
}