import type { Metadata } from "next";

import Gallery from "@/components/Gallery/Gallery";

export const metadata: Metadata = {
  title: "Галерия",
};

export default function Bungalows() {
  return (
    <main>
      <Gallery />
    </main>
  );
}
