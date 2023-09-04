import { routes } from "@/lib/routes";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center gap-10 py-48">
      <h1 className="text-3xl font-bold">Страницата не бе открита</h1>
      <Link
        className="border border-foreground p-4 text-center text-lg font-semibold"
        href={routes.home}
      >
        Към началната страница
      </Link>
    </main>
  );
}
