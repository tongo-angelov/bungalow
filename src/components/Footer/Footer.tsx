/* eslint-disable @next/next/no-img-element */

import { contacts } from "@/data";
import Container from "@/components/Container/Container";
import Section from "@/components/Section/Section";
import Map from "@/components/Map/Map";

export default function Footer() {
  return (
    <footer>
      <Section className="bg-muted">
        <Container className="py-8">
          <div className="flex flex-col items-center gap-12 text-center md:flex-row md:items-start">
            <div className="flex flex-1 flex-col items-center">
              <div className="w-48 pb-4">
                <img
                  src={"/images/logo.png"}
                  alt="Logo"
                  width={395}
                  height={395}
                />
              </div>
              <p className="font-semibold">
                Оазис на спокойствие за Вашият идеален отдих &nbsp;
                <span className="whitespace-nowrap">
                  Вилно селище „Свети Никола“
                </span>
              </p>
            </div>
            <div className="flex-1">
              <h4 className="pb-10 text-xl font-bold">Свържете се с нас</h4>
              <p>
                <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
              </p>
              <h4 className="py-10 text-xl font-bold">Локация</h4>
              <p>{contacts.address.name}</p>
              <p>{contacts.address.street}</p>
              <p>{contacts.address.city}</p>
            </div>
            <div className="flex-1">
              <Map width="300" height="300" scale={1} zoom={15} />
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-muted shadow-2xl">
        <Container className="py-4">
          <div className="text-center">
            <h5>{new Date().getFullYear()} - All Rights Reserved</h5>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
