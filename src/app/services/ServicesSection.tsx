import ServiceCard from "./ServiceCard";
import { services } from "./services";

export default function ServicesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
} 