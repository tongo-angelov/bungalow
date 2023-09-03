import Container from "@/components/Container/Container";
import Section from "@/components/Section/Section";

export default function DetailsSection({
  image,
  text,
  imageLeft = true,
  className,
}: {
  image: React.ReactNode;
  text: React.ReactNode;
  imageLeft?: boolean;
  className?: string;
}) {
  return (
    <Section className={`${className}`}>
      <Container
        className={`my-8 flex flex-col items-center gap-4 text-center lg:w-2/3 lg:gap-20 lg:text-left xl:w-1/2 ${
          imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        <div className="lg:w-1/2">{image}</div>
        <div className="lg:w-1/2">{text}</div>
      </Container>
    </Section>
  );
}
