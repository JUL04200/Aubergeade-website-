"use client";

import { useState } from "react";
import {
  restaurant,
  pettisEncas,
  menu3780,
  menu4180,
  carteEntrees,
  cartePlats,
  winesBottles,
  carafesEtVerres,
  bieres,
  aperitifs,
  digestifs,
  eauxEtSodas,
  cafesEtThes,
} from "@/data/site";
import { DishList, DishGroupTitle } from "./DishList";

const tabs = ["Formules", "La carte", "Cave & boissons"] as const;
type Tab = (typeof tabs)[number];

export default function Menu() {
  const [tab, setTab] = useState<Tab>("Formules");

  return (
    <section id="carte" className="bg-charcoal py-24 text-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
              La carte
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
              Des plats généreux, sans chichis
            </h2>
          </div>
          <a
            href={restaurant.menuPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold/50 px-6 py-3 text-sm font-semibold text-gold-light transition-colors hover:bg-gold hover:text-charcoal"
          >
            Télécharger la carte en PDF
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 border-b border-cream/10 pb-1">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`rounded-t-lg px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors ${
                tab === t
                  ? "bg-cream text-charcoal"
                  : "text-cream/60 hover:text-cream"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {tab === "Formules" && (
            <div className="grid items-start gap-8 lg:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-7">
                <h3 className="font-display text-lg font-semibold text-gold-light">
                  Les Petits Encas
                </h3>
                <div className="mt-4 text-cream/90">
                  <DishList items={pettisEncas} />
                </div>
                <p className="mt-4 text-sm text-cream/60">
                  Suggestions d&rsquo;entrées, plats et desserts du jour proposées en
                  complément des menus.
                </p>
              </div>

              <MenuFormula formula={menu3780} />
              <MenuFormula formula={menu4180} />
            </div>
          )}

          {tab === "La carte" && (
            <div className="grid items-start gap-10 lg:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-7">
                <h3 className="font-display text-lg font-semibold text-gold-light">Entrées</h3>
                <div className="mt-4 text-cream/90">
                  <DishList items={carteEntrees} />
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 p-7">
                <h3 className="font-display text-lg font-semibold text-gold-light">Plats</h3>
                <div className="mt-4 text-cream/90">
                  <DishList items={cartePlats} />
                </div>
                <p className="mt-4 text-sm text-cream/60">Desserts : à choisir dans les menus.</p>
              </div>
            </div>
          )}

          {tab === "Cave & boissons" && (
            <div className="space-y-10">
              <div className="grid items-start gap-8 lg:grid-cols-3">
                <div className="rounded-2xl bg-white/5 p-7">
                  <h3 className="font-display text-lg font-semibold text-gold-light">
                    Vins &mdash; bouteilles 75 cl
                  </h3>
                  <div className="mt-4 text-cream/90">
                    <DishGroupTitle>Rouges</DishGroupTitle>
                    <DishList items={winesBottles.rouges} />
                    <DishGroupTitle>Blancs</DishGroupTitle>
                    <DishList items={winesBottles.blancs} />
                    <DishGroupTitle>Rosés &amp; bulles</DishGroupTitle>
                    <DishList items={winesBottles.rosesEtBulles} />
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 p-7">
                  <h3 className="font-display text-lg font-semibold text-gold-light">
                    Carafes &amp; verres
                  </h3>
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-left text-sm text-cream/90">
                      <thead>
                        <tr className="text-xs uppercase tracking-wider text-cream/50">
                          {carafesEtVerres.headers.map((h) => (
                            <th key={h} className="pb-2 pr-2 font-medium">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-cream/10">
                        {carafesEtVerres.rows.map((row) => (
                          <tr key={row[0]}>
                            {row.map((cell, i) => (
                              <td key={i} className={`py-2 pr-2 ${i === 0 ? "" : "font-display text-gold-light"}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="mt-4 text-sm text-cream/60">{carafesEtVerres.cidre}</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 p-7">
                  <h3 className="font-display text-lg font-semibold text-gold-light">
                    Bières 33 cl
                  </h3>
                  <div className="mt-4 text-cream/90">
                    <DishList items={bieres} />
                  </div>
                </div>
              </div>

              <div className="grid items-start gap-8 lg:grid-cols-3">
                <div className="rounded-2xl bg-white/5 p-7">
                  <h3 className="font-display text-lg font-semibold text-gold-light">Apéritifs</h3>
                  <div className="mt-4 text-cream/90">
                    <DishList items={aperitifs} />
                  </div>
                </div>
                <div className="rounded-2xl bg-white/5 p-7">
                  <h3 className="font-display text-lg font-semibold text-gold-light">
                    Digestifs &mdash; 4 cl
                  </h3>
                  <p className="mt-4 leading-relaxed text-cream/90">
                    {digestifs.items.join(", ")}.
                  </p>
                  <p className="mt-3 font-display text-gold-light">{digestifs.price}</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-7">
                  <h3 className="font-display text-lg font-semibold text-gold-light">
                    Eaux, sodas &amp; jus
                  </h3>
                  <div className="mt-4 text-cream/90">
                    <DishList items={eauxEtSodas} />
                  </div>
                </div>
              </div>

              <div className="max-w-md rounded-2xl bg-white/5 p-7">
                <h3 className="font-display text-lg font-semibold text-gold-light">Cafés &amp; thés</h3>
                <div className="mt-4 text-cream/90">
                  <DishList items={cafesEtThes} />
                </div>
              </div>

              <p className="text-sm text-cream/50">Tous les prix sont nets, TTC.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function MenuFormula({ formula }: { formula: typeof menu3780 }) {
  return (
    <div className="rounded-2xl bg-white/5 p-7">
      <h3 className="font-display text-lg font-semibold text-gold-light">{formula.title}</h3>
      <p className="mt-1 text-sm text-cream/60">{formula.subtitle}</p>
      <div className="mt-4 text-cream/90">
        <DishGroupTitle>Entrées</DishGroupTitle>
        <DishList items={formula.entrees} />
        <DishGroupTitle>Plats</DishGroupTitle>
        <DishList items={formula.plats} />
        <DishGroupTitle>Desserts</DishGroupTitle>
        <DishList items={formula.desserts} />
      </div>
      <p className="mt-4 text-sm text-cream/60">{formula.note}</p>
    </div>
  );
}
