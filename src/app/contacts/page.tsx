import type { Metadata } from "next";

import Container from "@/components/Container/Container";
import Section from "@/components/Section/Section";
import Map from "@/components/Map/Map";
import { contacts } from "@/data";

export const metadata: Metadata = {
  title: "За контакти и резервации",
};

export default function Contacts() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Section>
        <Container className="flex flex-col items-center">
          <h1 className="my-8 w-2/3 text-center text-3xl font-semibold text-bungalow lg:w-1/2">
            Ако имате въпроси или нужда от консултация, не се колебайте да се
            свържете с нас!
          </h1>
        </Container>
      </Section>
      <Section className="py-6">
        <Container className="flex flex-col items-center justify-evenly gap-8 pb-10 text-center md:flex-row md:items-start">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Работно време:</h3>
            <h4 className="text-xl font-semibold">Понеделник - Неделя</h4>
            <p className="text-xl font-semibold">10:00 - 20:00</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Позвънете на:</h3>
            <a className="text-2xl font-bold" href={`tel:${contacts.phone}`}>
              {contacts.phone}
            </a>
          </div>
        </Container>
        <Container className="flex flex-col gap-4">
          <Map width="800" height="400" zoom={13} scale={1} noMarkers />
          <h3 className="text-center text-xl font-medium">
            {contacts.address.street}, {contacts.address.city}
          </h3>
        </Container>
      </Section>
    </main>
  );
}
