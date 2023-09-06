import type { Metadata } from "next";

import ExportedImage from "next-image-export-optimizer";

import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
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
            <p className="text-xl font-semibold">10:00 - 22:00</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Позвънете на:</h3>
            <a className="text-2xl font-bold" href={`tel:${contacts.phone}`}>
              {contacts.phone}
            </a>
          </div>
        </Container>
        <Container className="flex flex-col items-center gap-4">
          <div className="relative h-[500px]">
            <ExportedImage
              src={"/images/staticmap_800x500.png"}
              alt="google map"
              width={800}
              height={500}
            />
            <iframe
              className="absolute top-0 w-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11597.481505411988!2d23.2163125!3d43.3901875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ab33127fbe0239%3A0xa5f60027e02910b5!2z0JLQuNC70L3QviDRgdC10LvQuNGJ0LUg4oCe0KHQstC10YLQuCDQndC40LrQvtC70LDigJw!5e0!3m2!1sbg!2sbg!4v1693923221056!5m2!1sbg!2sbg"
              width="800"
              height="500"
              loading="lazy"
            ></iframe>
          </div>
        </Container>
      </Section>
    </main>
  );
}
