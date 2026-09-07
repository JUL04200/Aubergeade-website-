import { cuisineText } from "@/data/site";

export default function Cuisine() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bordeaux">
            Notre cuisine
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-charcoal sm:text-4xl">
            Une table de tradition
          </h2>
          <p className="mt-4 leading-relaxed text-charcoal/75">
            {cuisineText.intro}
          </p>
        </div>
        <div className="rounded-2xl border border-charcoal/10 bg-white/60 p-7">
          <h3 className="font-display text-xl font-semibold text-bordeaux">
            Déjeuner &amp; dîner
          </h3>
          <p className="mt-3 leading-relaxed text-charcoal/75">
            {cuisineText.lunchDinner}
          </p>
        </div>
        <div className="rounded-2xl border border-charcoal/10 bg-white/60 p-7">
          <h3 className="font-display text-xl font-semibold text-bordeaux">
            Allergies &amp; régimes particuliers
          </h3>
          <p className="mt-3 leading-relaxed text-charcoal/75">
            {cuisineText.vegetarian}
          </p>
        </div>
      </div>
    </section>
  );
}
