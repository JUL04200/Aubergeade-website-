import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";
import { restaurant, hours } from "@/data/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.laubergeade-paris.fr"),
  title: {
    default: "L'Aubergeade – Restaurant français à Paris 12e",
    template: "%s | L'Aubergeade",
  },
  description:
    "L'Aubergeade, bistrot français traditionnel au 17 rue Chaligny, Paris 12e. Foie gras à l'armagnac, magret de canard, omelette norvégienne. Réservation au +33 1 43 44 33 36.",
  keywords: [
    "restaurant français Paris",
    "bistrot Paris 12",
    "L'Aubergeade",
    "restaurant rue Chaligny",
    "cuisine traditionnelle française",
  ],
  openGraph: {
    title: "L'Aubergeade – Restaurant français à Paris 12e",
    description:
      "Bistrot parisien sans prétention : cuisine française traditionnelle, foie gras à l'armagnac, magret de canard, terrasse et salle climatisée.",
    locale: "fr_FR",
    type: "website",
  },
};

const openingHoursSpecification = hours
  .filter((h) => h.lunch && h.dinner)
  .flatMap((h) => {
    const dayMap: Record<string, string> = {
      Lundi: "Monday",
      Mardi: "Tuesday",
      Mercredi: "Wednesday",
      Jeudi: "Thursday",
      Vendredi: "Friday",
      Samedi: "Saturday",
      Dimanche: "Sunday",
    };
    const day = dayMap[h.day];
    return [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day,
        opens: "12:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day,
        opens: "19:00",
        closes: h.dinner === "19h00 – 23h00" ? "23:00" : "22:30",
      },
    ];
  });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.name,
  servesCuisine: "Française",
  priceRange: "€€",
  telephone: restaurant.phone,
  email: restaurant.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.address.line1,
    postalCode: restaurant.address.postalCode,
    addressLocality: restaurant.address.city,
    addressCountry: "FR",
  },
  hasMenu: restaurant.menuPdfUrl,
  openingHoursSpecification,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 pb-24 md:pb-0">{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
