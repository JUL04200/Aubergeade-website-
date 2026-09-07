import { aboutText } from "@/data/site";

export default function About() {
  return (
    <section id="a-propos" className="bg-cream-dark/60 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bordeaux">
            À propos
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-charcoal sm:text-4xl">
            L&rsquo;esprit L&rsquo;Aubergeade
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-charcoal/80">
          <p className="font-display text-2xl italic text-bordeaux">
            {aboutText.lead}
          </p>
          <p>{aboutText.body}</p>
          <p>{aboutText.patron}</p>
        </div>
      </div>
    </section>
  );
}
