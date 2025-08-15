import EventsHeroSection from "./EventsHeroSection";
import EventsListSection from "./EventsListSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import PastEvents from "./PastEvents";
import getEvents from "./eventsList";
import { Events } from "../../../lib/types";

export default async function EventsPage() {
  const events = await getEvents();
  console.log(events)
  return (
    <div className="bg-white">
      <EventsHeroSection />
      <EventsListSection events={events as unknown as Events[]} />
      <PastEvents events={events as unknown as Events[]}/>
      <CTASection 
        heading="Together for an Informed Imo State"
        subtext="Stay connected with the stories, policies, and strategies shaping our shared future."
        buttonLabel="Contact Us" 
        buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
}
