import Container from "@/components/Container/Container";
import Section from "@/components/Section/Section";

export default function DescriptionSection({
  title,
  text,
  className,
}: {
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <Section className={`${className}`}>
      <Container className="my-8 flex flex-col items-center text-center">
        <h1 className="my-6 text-3xl font-semibold text-foreground/90">
          {title}
        </h1>
        <p className="w-2/3 font-semibold leading-8 text-foreground/80">
          {text}
        </p>
      </Container>
    </Section>
  );
}
