import Container from "@/components/Container/Container";
import Section from "@/components/Section/Section";

export default function QuoteSection({
  className,
  quote,
  author,
}: {
  className?: string;
  quote: string;
  author: string;
}) {
  return (
    <Section className={`${className}`}>
      <Container className="flex flex-col justify-center gap-10 text-center lg:px-64">
        <q className="text-xl font-medium text-foreground/80">{quote}</q>
        <p className="text-2xl font-bold text-bungalow">{author}</p>
      </Container>
    </Section>
  );
}
