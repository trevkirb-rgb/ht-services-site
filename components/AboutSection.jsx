import SectionReveal from './SectionReveal';

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <SectionReveal className="section-shell grid gap-8 md:grid-cols-[1fr_1.3fr] md:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            About H&amp;T Services
          </p>
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            Entertainment Spaces Built Around Family Moments
          </h2>
        </div>
        <p className="text-base leading-relaxed text-slate-700 md:text-lg">
          H&amp;T Services specializes in home theater installations, ultimate game
          night setups, family event hosting support, and smart home entertainment
          integration. We design each setup for easy use, clean aesthetics, and
          memorable experiences that bring families and friends together.
        </p>
      </SectionReveal>
    </section>
  );
}