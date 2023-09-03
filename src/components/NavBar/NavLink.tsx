import { ReactNode } from "react";
import Link from "next/link";

export default function NavLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`hover:text-bungalow font-semibold ${className}`}
    >
      {children}
    </Link>
  );
}
