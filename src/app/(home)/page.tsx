import Link from "next/link";

import Card from "@/components/Card/Card";
import CardSection from "@/components/Card/CardSection";
import DescriptionSection from "@/components/Description/DescriptionSection";
import DetailsImage from "@/components/Details/DetailsImage";
import DetailsSection from "@/components/Details/DetailsSection";
import DetailsText from "@/components/Details/DetailsText";
import Icon from "@/components/Icon/Icon";
import IconSection from "@/components/Icon/IconSection";
import QuoteSection from "@/components/Quote/QuoteSection";
import { cards, description, details, icons, quote as q } from "@/data";

const { quote, author } = q;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Монтана",
      addressRegion: "BG",
      postalCode: "3400",
      streetAddress: "бул. Монтана",
    },
    image: ["https://svetinikola-montana.com/images/details_1.png"],
    name: "Вилно селище „Свети Никола“",
    description:
      "Вилно селище „Свети Никола“ гр.Монтана, бунгала и стаи под наем",
    priceRange: "$$",
    telephone: "+359 98 870 9990",
    url: "https://svetinikola-montana.com/",
    logo: "https://svetinikola-montana.com/images/logo.png",
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <DescriptionSection
        className="my-8"
        title={description.title}
        text={description.text}
      />

      {details.map(({ title, text, image, action }, index) => (
        <DetailsSection
          className={index % 2 ? "bg-muted shadow-sm" : ""}
          key={title}
          imageLeft={!(index % 2)}
          image={
            <DetailsImage
              image={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
            />
          }
          text={
            <DetailsText title={title} text={text}>
              {action && (
                <Link
                  className="border border-foreground p-4 text-center text-lg font-semibold"
                  href={action.link}
                >
                  {action.title}
                </Link>
              )}
            </DetailsText>
          }
        />
      ))}

      <CardSection
        className="h-content mb-4 mt-4 bg-fixed pb-10 pt-10 lg:mb-44 lg:h-screen lg:pb-0 lg:pt-96"
        image="/images/nature.jpg"
      >
        {cards.map(({ image, title, text }) => (
          <Card key={title} image={image} title={title} text={text} />
        ))}
      </CardSection>

      <IconSection className="my-6">
        {icons.map(({ image, title }) => (
          <Icon key={title} image={image} title={title} />
        ))}
      </IconSection>
      <QuoteSection className=" my-20" quote={quote} author={author} />
    </main>
  );
}
