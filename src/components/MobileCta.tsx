import { restaurant } from "@/data/site";

export default function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-gold/30 bg-charcoal/95 backdrop-blur md:hidden">
      <a
        href={restaurant.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 border-r border-gold/20 py-3 text-sm font-semibold text-cream"
      >
        Appeler
      </a>
      <a
        href="#contact"
        className="flex flex-1 items-center justify-center gap-2 bg-gold py-3 text-sm font-semibold text-charcoal"
      >
        Réserver une table
      </a>
    </div>
  );
}
