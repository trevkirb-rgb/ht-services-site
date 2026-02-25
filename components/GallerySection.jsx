import SectionReveal from './SectionReveal';

const photos = [
  {
    title: 'Home Theater Experience',
    image:
      'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Backyard Movie Night',
    image:
      'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Multi-Console Gaming Setup',
    image:
      'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Outdoor Family Event',
    image:
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-slate-100 py-24">
      <SectionReveal className="section-shell">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Gallery
        </p>
        <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
          Recent Experience Transformations
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {photos.map((photo) => (
            <div
              key={photo.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 opacity-100 transition group-hover:from-black/80">
                <p className="font-display text-lg text-white">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}