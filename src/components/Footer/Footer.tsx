import ExportedImage from "next-image-export-optimizer";

import Container from "@/components/Container/Container";
import Section from "@/components/Section/Section";
import { contacts } from "@/data";

export default function Footer() {
  return (
    <footer>
      <Section className="bg-muted">
        <Container className="py-8">
          <div className="flex flex-col items-center gap-12 text-center md:flex-row md:items-start">
            <div className="flex flex-1 flex-col items-center">
              <div className="w-48 pb-4">
                <ExportedImage
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
            <div className="relative flex-1">
              <ExportedImage
                src={"/images/staticmap_300x300.png"}
                alt="google map"
                width={300}
                height={300}
              />
              <iframe
                className="absolute top-0"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11597.481505411988!2d23.2163125!3d43.3901875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ab33127fbe0239%3A0xa5f60027e02910b5!2z0JLQuNC70L3QviDRgdC10LvQuNGJ0LUg4oCe0KHQstC10YLQuCDQndC40LrQvtC70LDigJw!5e0!3m2!1sbg!2sbg!4v1693923221056!5m2!1sbg!2sbg"
                width="300"
                height="300"
                loading="lazy"
              ></iframe>
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
