import ExportedImage from "next-image-export-optimizer";

import Container from "@/components/Container/Container";
import Section from "@/components/Section/Section";

export default function FriendsSection({ className }: { className?: string }) {
  return (
    <Section className={`${className}`}>
      <Container className="flex flex-col justify-center gap-10 text-center lg:px-64">
        <h4 className="text-xl font-semibold text-foreground/90">
          Наши приятели
        </h4>
        <div className="flex flex-col items-center justify-evenly md:flex-row">
          <a
            href="https://www.facebook.com/profile.php?id=100093593215040"
            className="w-[200px] overflow-hidden rounded-lg shadow-md"
          >
            <ExportedImage
              src="/images/friends_1.jpg"
              alt="Discover the dam"
              width={512}
              height={335}
            />
            <p className="pb-2 font-bold text-foreground/80">
              Discover the dam
            </p>
          </a>
        </div>
      </Container>
    </Section>
  );
}
