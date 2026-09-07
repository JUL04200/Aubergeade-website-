import { restaurant, hours, paymentMethods } from "@/data/site";

export default function InfosPratiques() {
  return (
    <section id="infos-pratiques" className="bg-charcoal py-24 text-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
          Infos pratiques
        </p>
        <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
          Adresse, horaires &amp; accès
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-2xl bg-white/5 p-7">
              <h3 className="font-display text-lg font-semibold text-gold-light">
                Horaires d&rsquo;ouverture
              </h3>
              <table className="mt-4 w-full text-sm">
                <tbody className="divide-y divide-cream/10">
                  {hours.map((h) => (
                    <tr key={h.day}>
                      <td className="py-2.5 pr-4 font-medium text-cream/90">{h.day}</td>
                      <td className="py-2.5 pr-4 text-cream/70">
                        {h.lunch ?? "Fermé"}
                      </td>
                      <td className="py-2.5 text-cream/70">{h.dinner ?? "Fermé"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl bg-white/5 p-7">
              <h3 className="font-display text-lg font-semibold text-gold-light">
                Adresse &amp; contact
              </h3>
              <p className="mt-4 leading-relaxed text-cream/85">
                {restaurant.address.line1}
                <br />
                {restaurant.address.postalCode} {restaurant.address.city}
                <br />
                Métro {restaurant.address.metro}
              </p>
              <a
                href={restaurant.phoneHref}
                className="mt-4 block font-display text-xl text-gold-light"
              >
                {restaurant.phone}
              </a>
              <a
                href={`mailto:${restaurant.email}`}
                className="mt-1 block text-sm text-cream/70 hover:text-gold-light"
              >
                {restaurant.email}
              </a>
            </div>

            <div className="rounded-2xl bg-white/5 p-7">
              <h3 className="font-display text-lg font-semibold text-gold-light">
                Moyens de paiement
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <li
                    key={method}
                    className="rounded-full border border-cream/20 px-3.5 py-1.5 text-xs text-cream/80"
                  >
                    {method}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-cream/10">
            <iframe
              title="Localisation de L'Aubergeade, 17 rue Chaligny, Paris"
              src={restaurant.mapEmbedUrl}
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
