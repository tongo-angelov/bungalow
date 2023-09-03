/* eslint-disable @next/next/no-img-element */

import MapSection from "@/components/Map/MapSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "За нас",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1>about us</h1>
      <MapSection
        className="my-8"
        width="800"
        height="300"
        scale={2}
        zoom={15}
      />
    </main>
  );
}
