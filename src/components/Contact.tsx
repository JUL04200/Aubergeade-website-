"use client";

import { useState, type FormEvent } from "react";
import { restaurant } from "@/data/site";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleReservation(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const date = data.get("date");
    const time = data.get("time");
    const guests = data.get("guests");
    const phone = data.get("phone");
    const message = data.get("message");

    const subject = `Demande de réservation — ${name}`;
    const body = [
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      `Date souhaitée : ${date}`,
      `Heure souhaitée : ${time}`,
      `Nombre de couverts : ${guests}`,
      message ? `Message : ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${restaurant.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bordeaux">
            Réservation
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-charcoal sm:text-4xl">
            Réserver une table
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-charcoal/70">
            Le plus simple reste souvent un appel au{" "}
            <a href={restaurant.phoneHref} className="font-semibold text-bordeaux">
              {restaurant.phone}
            </a>
            . Vous pouvez aussi nous laisser vos disponibilités ci-dessous, votre
            messagerie s&rsquo;ouvrira pour nous envoyer la demande.
          </p>

          <form onSubmit={handleReservation} className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nom" name="name" required />
              <Field label="Téléphone" name="phone" type="tel" required />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <Field label="Date" name="date" type="date" required />
              <Field label="Heure" name="time" type="time" required />
              <Field label="Couverts" name="guests" type="number" min={1} defaultValue={2} required />
            </div>
            <FieldTextarea label="Message (optionnel)" name="message" rows={3} />
            <button
              type="submit"
              className="rounded-full bg-bordeaux px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-bordeaux-dark"
            >
              Envoyer la demande
            </button>
            {sent && (
              <p className="text-sm text-bordeaux">
                Votre messagerie va s&rsquo;ouvrir avec la demande pré-remplie.
              </p>
            )}
          </form>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bordeaux">
            Contact
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-charcoal sm:text-4xl">
            Nous écrire
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-charcoal/70">
            Une question, une demande de privatisation ou un retour à nous
            faire ? Écrivez-nous, nous vous répondrons prochainement.
          </p>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const subject = data.get("subject");
    const message = data.get("message");

    const body = [`Nom : ${name}`, `E-mail : ${email}`, `Téléphone : ${phone}`, "", `${message}`].join(
      "\n",
    );

    window.location.href = `mailto:${restaurant.email}?subject=${encodeURIComponent(
      String(subject || "Message depuis le site"),
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Votre nom" name="name" required />
        <Field label="Votre adresse e-mail" name="email" type="email" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Votre n° de téléphone" name="phone" type="tel" />
        <Field label="Objet" name="subject" />
      </div>
      <FieldTextarea label="Votre message" name="message" rows={4} required />
      <button
        type="submit"
        className="rounded-full border border-bordeaux px-7 py-3.5 text-sm font-semibold text-bordeaux transition-colors hover:bg-bordeaux hover:text-cream"
      >
        Envoyer
      </button>
      {sent && (
        <p className="text-sm text-bordeaux">
          Votre message a été préparé. Nous vous répondrons prochainement.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  min,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: number;
  defaultValue?: string | number;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-charcoal/80">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        min={min}
        defaultValue={defaultValue}
        className="w-full rounded-lg border border-charcoal/15 bg-white px-3.5 py-2.5 text-charcoal outline-none focus:border-bordeaux"
      />
    </label>
  );
}

function FieldTextarea({
  label,
  name,
  rows = 3,
  required,
}: {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-charcoal/80">{label}</span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        className="w-full rounded-lg border border-charcoal/15 bg-white px-3.5 py-2.5 text-charcoal outline-none focus:border-bordeaux"
      />
    </label>
  );
}
