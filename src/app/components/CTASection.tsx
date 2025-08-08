import CTABlock from "./CTABlock";

interface CTASectionProps {
  heading: string;
  subtext?: string;
  buttonLabel: string;
  buttonHref: string;
}

export default function CTASection({heading, subtext, buttonLabel, buttonHref}: CTASectionProps) {
  return (
    <section className="w-full bg-[#232c39] relative py-10 md:py-20 flex justify-center items-center">
      <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-[#22d060] z-0" />
      <div className="relative z-10 w-full px-4">
        <CTABlock
          heading={heading}
          subtext={subtext}
          buttonLabel={buttonLabel}
          buttonHref={buttonHref}
        />
      </div>
    </section>
  );
} 