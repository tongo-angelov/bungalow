import type { Metadata } from "next";

import Section from "@/components/Section/Section";
import IconSection from "@/components/Icon/IconSection";
import Icon from "@/components/Icon/Icon";
import BungalowSection from "@/components/Bungalow/Bungalow";

import { icons } from "@/data";

export const metadata: Metadata = {
  title: "Бунгала и стаи под наем",
};

export default function Bungalows() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    image: "https://svetinikola-montana.com/images/bungalow_2.jpg",
    name: "Двойна стая",
    description:
      "Двойна стая с климатик, интернет, телевизор и самостоятелен санитарен възел.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "60.00",
      priceCurrency: "BGN",
    },
    telephone: "+359 98 870 9990",
    url: "https://svetinikola-montana.com/bungalows",
    logo: "https://svetinikola-montana.com/images/logo.png",
  };

  return (
    <main className="flex flex-col items-center justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section>
        <div className="my-8 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-bungalow drop-shadow-md">
            Бунгала и стаи под наем
          </h1>
        </div>
      </Section>

      <BungalowSection className="" />

      <IconSection className="my-8">
        {icons.map(({ image, title }) => (
          <Icon key={title} image={image} title={title} />
        ))}
      </IconSection>
    </main>
  );
}
