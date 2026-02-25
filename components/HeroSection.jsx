'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink pt-24 text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/80" />
      <div className="absolute inset-0 bg-radialGlow" />

      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm tracking-wide text-accent">
            Premium Home Experience Design
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            H&amp;T Services
          </h1>
          <p className="mt-4 text-xl text-amberGlow">
            Where Home Becomes the Experience.
          </p>
          <p className="mt-6 max-w-2xl text-base text-white/85 md:text-lg">
            We transform ordinary homes into unforgettable experience spaces for
            families and friends.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="glow-ring rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glowBlue transition hover:scale-[1.03] hover:bg-sky-400"
            >
              View Services
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/35 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Get a Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}