import Image from "next/image";
import { restaurant } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-charcoal text-cream"
    >
      <Image
        src="/images/poisson-table.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 15% 0%, rgba(184,137,79,0.15) 0%, transparent 55%), linear-gradient(100deg, rgba(36,27,22,0.97) 0%, rgba(36,27,22,0.92) 42%, rgba(74,17,25,0.55) 75%, rgba(74,17,25,0.35) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #f8f1e4 0, #f8f1e4 1px, transparent 1px, transparent 14px)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-28 sm:px-6 lg:px-8">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-gold-light">
          Paris 12ᵉ · Depuis toujours au cœur du quartier
        </p>
        <h1 className="font-display max-w-3xl text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
          L&rsquo;Aubergeade
        </h1>
        <p className="font-display mt-4 max-w-xl text-2xl italic text-gold-light sm:text-3xl">
          Bistrot parisien sans prétention
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
          Une cuisine française variée et traditionnelle, à savourer en salle
          climatisée ou, aux beaux jours, sur notre terrasse animée.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-charcoal transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
          >
            Réserver une table
          </a>
          <a
            href="#carte"
            className="rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:border-gold-light hover:text-gold-light"
          >
            Voir la carte
          </a>
          <a
            href={restaurant.phoneHref}
            className="text-sm font-semibold tracking-wide text-cream/80 underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold-light"
          >
            {restaurant.phone}
          </a>
        </div>

        <dl className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-cream/15 pt-8 text-cream/80">
          <div>
            <dt className="text-xs uppercase tracking-widest text-gold-light">Quartier</dt>
            <dd className="font-display mt-1 text-lg">12ᵉ arrondissement</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-gold-light">Cuisine</dt>
            <dd className="font-display mt-1 text-lg">Française traditionnelle</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-gold-light">Ambiance</dt>
            <dd className="font-display mt-1 text-lg">Terrasse &amp; salle climatisée</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
