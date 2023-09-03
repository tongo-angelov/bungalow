import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";

export default function CardSection({
  className,
  image,
  children,
}: {
  className?: string;
  image?: string;
  children: React.ReactNode;
}) {
  return (
    <Section className={`${className}`} image={image}>
      <Container className="grid grid-flow-row grid-cols-1 gap-10 lg:grid-cols-3">
        {children}
      </Container>
    </Section>
  );
}
