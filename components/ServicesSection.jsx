import {
  Clapperboard,
  Gamepad2,
  PartyPopper,
  House,
  CheckCircle2
} from 'lucide-react';
import SectionReveal from './SectionReveal';

const services = [
  {
    title: 'Home Movie Theater Design & Installation',
    icon: Clapperboard,
    bullets: [
      'Projector and large screen installs',
      'Surround sound systems',
      'Acoustic paneling',
      'LED ambient lighting',
      'Theater seating',
      'Smart control integration'
    ]
  },
  {
    title: 'Ultimate Game Night Setups',
    icon: Gamepad2,
    bullets: [
      'Backyard projector movie nights',
      'Multi-console gaming tournaments',
      'Arcade-style installs',
      'Board game hosting layouts',
      'Themed LED lighting'
    ]
  },
  {
    title: 'Large Family Event Hosting Support',
    icon: PartyPopper,
    bullets: [
      'Backyard layouts',
      'Outdoor screens and sound',
      'String lighting',
      'Seating coordination',
      'Setup and teardown',
      'Themed experience planning'
    ]
  },
  {
    title: 'Smart Home Entertainment Integration',
    icon: House,
    bullets: [
      'Smart remotes',
      'Voice control',
      'App-based media control',
      'Lighting and security sync',
      'Clean cable management'
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-slate-950 py-24 text-white">
      <SectionReveal className="section-shell">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Services
        </p>
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Premium Experience Installations
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <SectionReveal
                key={service.title}
                className="glass-panel rounded-2xl p-6 shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-accent/35"
              >
                <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent shadow-glowBlue">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 text-amberGlow" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </SectionReveal>
            );
          })}
        </div>
      </SectionReveal>
    </section>
  );
}