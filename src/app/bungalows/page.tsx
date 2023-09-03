import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бунгала",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1>bungalows</h1>
    </main>
  );
}
