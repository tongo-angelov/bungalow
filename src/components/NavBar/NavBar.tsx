import ExportedImage from "next-image-export-optimizer";

import NavLink from "./NavLink";
import Container from "@/components/Container/Container";

export default function NavBar() {
  return (
    <header className="h-20">
      <nav className="fixed left-0 right-0 top-0 flex h-20 items-center bg-muted shadow-xl">
        <Container className="flex justify-between">
          <div className="w-16">
            <NavLink href="/">
              <ExportedImage
                src={"/images/logo.png"}
                alt="Logo"
                width={395}
                height={395}
              />
            </NavLink>
          </div>
          <div className="flex items-center justify-between gap-6 ">
            <NavLink href="/bungalows">Бунгала</NavLink>
            <NavLink href="/about">За нас</NavLink>
            <NavLink href="/contacts">Контакти</NavLink>
          </div>
        </Container>
      </nav>
    </header>
  );
}
