import EventsHeroSection from "./EventsHeroSection";
import EventsListSection from "./EventsListSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import PastEvents from "./PastEvents";

export default function EventsPage() {
  return (
    <div className="bg-white">
      <EventsHeroSection />
      <EventsListSection />
      <PastEvents />
      <CTASection 
        heading="Together we can build the oil sector in Imo state"
        subtext="Want to get involved or partner with us? Reach out today"
        buttonLabel="Contact Us" 
        buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
}
