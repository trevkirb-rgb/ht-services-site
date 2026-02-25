import SectionReveal from './SectionReveal';

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="absolute inset-0 bg-radialGlow opacity-70" />
      <SectionReveal className="section-shell relative z-10 text-center">
        <h2 className="font-display text-3xl font-bold md:text-5xl">
          Ready to Turn Your Home Into the Ultimate Experience?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Let us design a space your family and guests will remember for years.
        </p>
        <a
          href="mailto:hello@htservices.com"
          className="glow-ring mt-8 inline-flex rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-glowBlue transition hover:scale-[1.03] hover:bg-sky-400"
        >
          Schedule a Consultation
        </a>
      </SectionReveal>
    </section>
  );
}