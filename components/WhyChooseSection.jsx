import { Sparkles, Cpu, HeartHandshake } from 'lucide-react';
import SectionReveal from './SectionReveal';

const points = [
  {
    title: 'Experience-Focused Design',
    text: 'Every layout is designed around emotion, comfort, and impact so your home feels immersive from the moment guests arrive.',
    icon: Sparkles
  },
  {
    title: 'Clean & Seamless Tech Integration',
    text: 'We hide complexity behind intuitive controls and polished installations that blend naturally with your space.',
    icon: Cpu
  },
  {
    title: 'Family-First Mindset',
    text: 'Our systems are built to be simple to use, safe for all ages, and centered on meaningful time together.',
    icon: HeartHandshake
  }
];

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="py-24">
      <SectionReveal className="section-shell">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Why Choose Us
        </p>
        <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
          Built for Elevated Living
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex rounded-xl bg-ink p-3 text-accent">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{point.text}</p>
              </div>
            );
          })}
        </div>
      </SectionReveal>
    </section>
  );
}