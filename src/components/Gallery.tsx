const items = [
  { label: "La salle", note: "Ambiance brasserie-cantine" },
  { label: "La terrasse", note: "Animée aux beaux jours" },
  { label: "Magret de canard", note: "Sauce caramel au beurre salé" },
  { label: "Foie gras maison", note: "Travaillé à l'armagnac" },
  { label: "La cave", note: "Vins choisis pour la carte" },
  { label: "La façade", note: "17 rue Chaligny" },
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
          Emplacements réservés aux photographies de la salle, de la terrasse,
          des assiettes et de l&rsquo;équipe &mdash; à intégrer dès que les
          visuels du restaurant seront disponibles.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={item.label}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            style={{
              background:
                i % 3 === 0
                  ? "linear-gradient(150deg, #6f1d2b 0%, #4a1119 100%)"
                  : i % 3 === 1
                    ? "linear-gradient(150deg, #362a22 0%, #241b16 100%)"
                    : "linear-gradient(150deg, #b8894f 0%, #8a2c3c 100%)",
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <p className="font-display text-lg font-semibold text-cream">{item.label}</p>
              <p className="mt-1 text-xs text-cream/70">{item.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
