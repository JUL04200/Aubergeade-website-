import { services, restaurant } from "@/data/site";

export default function Privatisation() {
  return (
    <section id="privatisation" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl bg-bordeaux px-8 py-14 text-cream sm:px-14">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
            Services
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
            {services.title}
          </h2>
          <p className="mt-5 leading-relaxed text-cream/85">{services.text}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-light"
            >
              Demander un devis
            </a>
            <a
              href={restaurant.phoneHref}
              className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-gold-light hover:text-gold-light"
            >
              {restaurant.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
