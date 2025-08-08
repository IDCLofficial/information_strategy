import ServiceCard from "./ServiceCard";

const services = [
  {
    imgSrc: "",
    title: "Civil Service Appointment Processing:",
    description: "Facilitation of new appointments into the civil service, including issuance of appointment letters and onboarding guidance."
  },
  {
    imgSrc: "",
    title: "Promotion and Confirmation Status Updates:",
    description: "Information and updates regarding the status of staff promotions, confirmations, and career progression."
  },
  {
    imgSrc: "",
    title: "Pension Verification & Documentation:",
    description: "Verification of retiree records and support with pension documentation for timely benefits processing."
  },
  {
    imgSrc: "",
    title: "Training Program Applications:",
    description: "Access to upcoming staff training opportunities and application procedures."
  },
  {
    imgSrc: "",
    title: "Official Records and Letter Issuance:",
    description: "Provision of employment confirmation letters, transfer approvals, and other official civil service documents."
  }
];

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