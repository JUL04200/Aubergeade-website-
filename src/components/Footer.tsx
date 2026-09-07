import { restaurant, legal } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/10 bg-cream-dark/50 py-14 text-sm text-charcoal/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-charcoal">
              L&rsquo;Aubergeade
            </p>
            <p className="mt-2 leading-relaxed">
              {restaurant.address.line1}
              <br />
              {restaurant.address.postalCode} {restaurant.address.city}
            </p>
            <a href={restaurant.phoneHref} className="mt-2 block hover:text-bordeaux">
              {restaurant.phone}
            </a>
            <a href={`mailto:${restaurant.email}`} className="block hover:text-bordeaux">
              {restaurant.email}
            </a>
          </div>

          <nav className="flex flex-col gap-2">
            <a href="#carte" className="hover:text-bordeaux">
              La carte
            </a>
            <a href="#a-propos" className="hover:text-bordeaux">
              À propos
            </a>
            <a href="#privatisation" className="hover:text-bordeaux">
              Privatisation
            </a>
            <a href="#infos-pratiques" className="hover:text-bordeaux">
              Infos pratiques
            </a>
            <a href="#contact" className="hover:text-bordeaux">
              Contact
            </a>
          </nav>

          <details className="text-xs leading-relaxed text-charcoal/60">
            <summary className="cursor-pointer text-sm font-semibold text-charcoal">
              Mentions légales
            </summary>
            <dl className="mt-3 space-y-1.5">
              <p>
                <strong className="text-charcoal/80">Établissement :</strong> {legal.companyName}
              </p>
              <p>
                <strong className="text-charcoal/80">Responsable :</strong>{" "}
                {legal.representativeFirstName} {legal.representativeLastName}
              </p>
              <p>
                <strong className="text-charcoal/80">Adresse :</strong> {legal.address}
              </p>
              <p>
                <strong className="text-charcoal/80">Inscription :</strong>{" "}
                {legal.registrationAuthority} — {legal.registrationNumber}
              </p>
              <p>
                <strong className="text-charcoal/80">N° TVA :</strong> {legal.vatNumber}
              </p>
              <p>
                <strong className="text-charcoal/80">Capital social :</strong> {legal.shareCapital}
              </p>
            </dl>
          </details>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-charcoal/10 pt-6 text-xs text-charcoal/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} L&rsquo;Aubergeade. Tous droits réservés.</p>
          <p>Ce site n&rsquo;utilise pas de cookies de suivi ni d&rsquo;analyse.</p>
        </div>
      </div>
    </footer>
  );
}
