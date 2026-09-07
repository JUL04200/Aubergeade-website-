import Image from "next/image";

const photos = [
  { src: "/images/facade.webp", label: "La façade", note: "17 rue Chaligny, à la nuit tombée" },
  { src: "/images/poisson-table.jpg", label: "À table", note: "Poisson du jour, verre de blanc" },
  { src: "/images/tourteau.jpg", label: "Fruits de mer", note: "Tourteau, citron, sauce maison" },
  { src: "/images/oeuf-poche-girolles.jpg", label: "Girolles & œuf poché", note: "Persillade, jus vert" },
  { src: "/images/os-a-moelle.jpg", label: "Os à moelle", note: "Façon bistrot, pain grillé" },
  { src: "/images/assiettes-collage.jpg", label: "Nos assiettes", note: "Une cuisine soignée, assiette par assiette" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bordeaux">
          Galerie
        </p>
        <h2 className="font-display mt-3 text-3xl font-semibold text-charcoal sm:text-4xl">
          L&rsquo;ambiance de la maison
        </h2>
        <p className="mt-4 leading-relaxed text-charcoal/70">
          La façade, la cuisine du chef et quelques assiettes du moment.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src={photo.src}
              alt={photo.label}
              fill
              sizes="(min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/0 to-charcoal/0" />
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-4">
              <p className="font-display text-lg font-semibold text-cream">{photo.label}</p>
              <p className="mt-1 text-xs text-cream/80">{photo.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
