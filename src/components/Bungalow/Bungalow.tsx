import ExportedImage from "next-image-export-optimizer";

import Container from "@/components/Container/Container";
import Section from "@/components/Section/Section";

import { bungalows } from "@/data";

export default function BungalowSection({ className }: { className?: string }) {
  return (
    <Section className={`${className}`}>
      <Container className={`flex flex-col gap-10 md:flex-row`}>
        {bungalows.map(({ title, image, price }) => (
          <div
            key={title}
            className="flex flex-col gap-2 overflow-hidden rounded-md bg-muted/40 pb-4 text-center shadow-md"
          >
            <ExportedImage
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-xl">
              Цена: <span className="text-2xl font-bold">{price}</span> лв.
            </p>
          </div>
        ))}
      </Container>
    </Section>
  );
}
