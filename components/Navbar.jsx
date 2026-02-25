'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between text-white">
        <a href="#home" className="font-display text-xl font-bold tracking-wide">
          H&amp;T Services
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/80 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="glow-ring hidden rounded-full border border-accent/40 bg-accent/20 px-5 py-2 text-sm font-semibold transition hover:bg-accent/30 md:inline-flex"
        >
          Free Consultation
        </a>

        <button
          type="button"
          className="inline-flex rounded-md p-2 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 md:hidden">
          <div className="section-shell flex flex-col gap-4 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-white/90"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}