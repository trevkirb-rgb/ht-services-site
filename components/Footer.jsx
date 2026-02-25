import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 text-slate-300">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl font-bold text-white">H&amp;T Services</p>
          <p className="mt-2 text-sm text-slate-400">Where Home Becomes the Experience.</p>
        </div>

        <div className="space-y-1 text-sm">
          <p>Email: trevkirb@gmail.com</p>
          <p>Phone: (801)592-5420 </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" aria-label="Facebook" className="rounded-full border border-slate-700 p-2 transition hover:border-accent hover:text-accent">
            <Facebook size={18} />
          </a>
          <a href="#" aria-label="Instagram" className="rounded-full border border-slate-700 p-2 transition hover:border-accent hover:text-accent">
            <Instagram size={18} />
          </a>
          <a href="#" aria-label="LinkedIn" className="rounded-full border border-slate-700 p-2 transition hover:border-accent hover:text-accent">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}