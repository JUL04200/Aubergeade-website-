"use client";

import { useState } from "react";
import { restaurant } from "@/data/site";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#carte", label: "La carte" },
  { href: "#a-propos", label: "À propos" },
  { href: "#galerie", label: "Galerie" },
  { href: "#privatisation", label: "Privatisation" },
  { href: "#infos-pratiques", label: "Infos pratiques" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-charcoal/95 backdrop-blur supports-[backdrop-filter]:bg-charcoal/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#accueil"
          className="font-display text-xl font-semibold tracking-wide text-cream sm:text-2xl"
        >
          L&rsquo;Aubergeade
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-cream/80 transition-colors hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={restaurant.phoneHref}
            className="text-sm font-medium text-cream/80 transition-colors hover:text-gold-light"
          >
            {restaurant.phone}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-light"
          >
            Réserver
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Ouvrir le menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-cream lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-cream transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-6 bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-6 bg-cream transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-gold/20 bg-charcoal px-4 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-cream/90 hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={restaurant.phoneHref}
            className="mt-4 block rounded-lg px-3 py-2 text-sm text-gold-light"
          >
            {restaurant.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
