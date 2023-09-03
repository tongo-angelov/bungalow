import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";

export default function IconSection({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Section className={`${className}`}>
      <Container className="flex w-full flex-col justify-evenly gap-8 md:flex-row md:items-end">
        {children}
      </Container>
    </Section>
  );
}
