"use client"

import React, { useRef } from "react";
import events from "./eventsList";
import Image from "next/image";
import Link from "next/link";

function isPastEvent(eventDateStr: string) {
    // Try to parse date (optionally with time)
    const parsed = Date.parse(eventDateStr);
    if (!isNaN(parsed)) {
        return parsed < Date.now();
    }
    // fallback: try to parse with time if available
    return false;
}

export default function PastEvents() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            scrollRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: "smooth"
            });
        }
    };

    // Filter only past events
    const pastEvents = events.filter(event => {
        // If event has a time, combine it
        let dateStr = event.date;
        if (event.time) dateStr = `${event.date} ${event.time}`;
        return isPastEvent(dateStr);
    });

    return (
        <section className="w-full py-10 px-4 md:px-8 flex flex-col">
            <h1 className="text-2xl font-medium mb-4">Past Events</h1>
            <div className="relative w-full flex items-center">
                <button
                    onClick={() => scroll("left")}
                    className="absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-white/10 border rounded-full shadow p-2 text-xl font-bold hover:bg-gray-100 max-md:hidden"
                    aria-label="Scroll left"
                >
                    &#8592;
                </button>
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-8 py-4 scrollbar-hide w-full"
                >
                    {pastEvents.length === 0 ? (
                        <div className="text-center text-gray-500 py-12 text-lg">No past events at this time.</div>
                    ) : pastEvents.map((event) => (
                        <div key={event.slug} className="flex-shrink-0 w-80 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col p-4">
                            <div className="relative w-full h-40 mb-4 rounded overflow-hidden">
                                <Image src={event.img} alt={event.title} fill className="object-cover rounded" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 mb-1">{event.date} | {event.location}</span>
                                <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                                <p className="text-sm text-gray-700 mb-2">{event.description}</p>
                                <Link href={`/events/${event.slug}`} className="w-max border border-primary-green text-primary-green text-[14px] px-4 py-2 rounded font-semibold hover:bg-green-50 transition mt-2">More Information</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={() => scroll("right")}
                    className="absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-white border rounded-full shadow p-2 text-xl font-bold hover:bg-gray-100 max-md:hidden"
                    aria-label="Scroll right"
                >
                    &#8594;
                </button>
            </div>
        </section>
    );
}