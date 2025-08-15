"use client";
import { use } from "react";
import Image from "next/image";
import ReadySection from "../../news/ReadySection";
import Footer from "../../components/Footer";
import getEvents from "../eventsList";
import { useEffect, useState } from "react";
import type { Events } from "../../../../lib/types";

interface Speaker {
  img: string;
  name: string;
  role: string;
}

function Countdown({ eventDateTime }: { eventDateTime: string }) {
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number, seconds: number} | null>(null);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    function calculateTimeLeft() {
      const target = new Date(eventDateTime).getTime();
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) {
        setEnded(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [eventDateTime]);

  if (ended) {
    return (
      <div className="bg-gray-400 text-white rounded-lg px-8 py-4 flex items-center text-center w-max mt-4 mb-6 md:mb-0 md:absolute md:bottom-6 md:right-10 shadow-lg">
        <span className="text-lg font-semibold">Event has ended.</span>
      </div>
    );
  }
  if (!timeLeft) return null;
  return (
    <div className="bg-green-700 text-white rounded-lg px-8 py-4 flex gap-6 items-center text-center w-max mt-4 mb-6 md:mb-0 md:absolute md:bottom-6 md:right-10 shadow-lg">
      <div>
        <div className="text-2xl font-bold">{timeLeft.days}</div>
        <div className="text-xs uppercase">Days</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div>
        <div className="text-2xl font-bold">{timeLeft.hours}</div>
        <div className="text-xs uppercase">Hours</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div>
        <div className="text-2xl font-bold">{timeLeft.minutes}</div>
        <div className="text-xs uppercase">Minutes</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div>
        <div className="text-2xl font-bold">{timeLeft.seconds}</div>
        <div className="text-xs uppercase">Seconds</div>
      </div>
    </div>
  );
}

export default function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const eventsList = (use(getEvents()) ?? []) as Events[];
  const event = eventsList.find((e) => e.fields.eventName === slug);
  if (!event) {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
        <p className="text-gray-600">Sorry, the event you are looking for does not exist.</p>
      </div>
    );
  }

  // Build a date-time string from available fields
  const eventDateTime = `${event.fields.eventDate}`;

  // Normalize basic fields used in the UI
  const normalized = {
    title: event.fields.eventName,
    img: `https:${event.fields.bannerImage?.fields.file.url ?? ""}`,
    description: event.fields.briefDescription,
    date: event.fields.eventDate,
    organizer: event.fields.ministry?.fields.ministryName ?? "",
    address: event.fields.location ?? "",
    time: "",
    phone: event.fields.contactPhoneNumber ?? "",
    speakers: [
      ...(event.fields.firstSpeaker
        ? [{ name: event.fields.firstSpeaker, role: "Speaker", img: `https:${event.fields.firstSpeakerPicture?.fields.file.url ?? ""}` }]
        : []),
      ...(event.fields.secondSpeaker
        ? [{ name: event.fields.secondSpeaker, role: "Speaker", img: `https:${event.fields.secondSpeakerPicture?.fields.file.url ?? ""}` }]
        : []),
    ] as Speaker[],
  };

  return (
    <div className="bg-white">
      {/* Hero Title */}
      <section
        className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: 'url(/images/gradient.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center z-10 drop-shadow-lg px-2">
          {normalized.title}
        </h1>
      </section>
      {/* Event Image & Countdown */}
      <section className="relative w-full flex flex-col items-center pt-6 md:pt-12 pb-4 md:pb-6 px-4 md:px-20">
        <div className="w-full relative">
          <Image
            src={normalized.img}
            alt={normalized.title}
            width={1920}
            height={600}
            className="object-cover w-full h-[180px] md:h-[480px] rounded-none"
            priority
          />
          <div className="static md:absolute md:bottom-6 md:right-10 z-10 mt-4 md:mt-0 flex justify-center w-full">
            <Countdown eventDateTime={eventDateTime} />
          </div>
        </div>
        <p className="text-gray-700 mt-6 mb-6 md:left text-sm md:text-base">
          {normalized.description}
        </p>
      </section>
      {/* Event Details */}
      <section className="w-full max-w-6xl mx-auto px-4 mb-8 md:mb-12">
        <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">Event details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-sm md:text-base">
          <div className="flex-row justify-between w-full items-center"><span className="font-semibold">DATE:</span> <span className="ml-2">{normalized.date}</span></div>
          <div className="flex-row justify-between w-full items-center"><span className="font-semibold">ORGANIZER:</span> <span className="ml-2">{normalized.organizer}</span></div>
          <div className="flex-row justify-between w-full items-center"><span className="font-semibold">ADDRESS:</span> <span className="ml-2">{normalized.address}</span></div>
          <div className="flex-row justify-between w-full items-center"><span className="font-semibold">TIME:</span> <span className="ml-2">{normalized.time}</span></div>
          <div className="flex-row justify-between w-full items-center"><span className="font-semibold">PHONE:</span> <span className="ml-2">{normalized.phone}</span></div>
        </div>
      </section>
      {/* Speakers */}
      <section className="w-full max-w-6xl mx-auto px-4 mb-12 md:mb-16">
        <h2 className="text-lg md:text-2xl font-bold mb-4 md:mb-6">Speakers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {(normalized.speakers && normalized.speakers.length > 0) ? normalized.speakers.map((sp, idx) => (
            <div key={idx} className="flex flex-col items-start bg-white rounded-xl shadow border border-gray-200 p-3 md:p-4">
              <div className="w-full h-40 md:w-full md:h-48 relative mb-2 md:mb-3 rounded-lg overflow-hidden">
                <Image src={sp.img} alt={sp.name} fill className="object-cover" />
              </div>
              <span className="text-green-700 font-semibold text-xs md:text-sm mb-1">{sp.role}</span>
              <span className="font-bold text-base md:text-lg text-left">{sp.name}</span>
            </div>
          )) : <div className="text-gray-500 col-span-full">No speakers announced yet.</div>}
        </div>
      </section>
      <ReadySection />
      <Footer />
    </div>
  );
} 