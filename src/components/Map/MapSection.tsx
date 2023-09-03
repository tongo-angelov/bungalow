/* eslint-disable @next/next/no-img-element */

import Container from "@/components/Container/Container";
import Section from "@/components/Section/Section";
import Map from "./Map";

export default function MapSection({
  zoom = 16,
  scale = 2,
  width,
  height,
  className,
}: {
  zoom?: number;
  scale?: number;
  width: string;
  height: string;
  className?: string;
}) {
  return (
    <Section>
      <Container className={`flex justify-center ${className}`}>
        <Map zoom={zoom} scale={scale} width={width} height={height} />
      </Container>
    </Section>
  );
}
