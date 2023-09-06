import { Metadata } from "next";

import { routes } from "./lib/routes";

export const baseURL = new URL(
  process.env.SITE_URL || "https://svetinikola-montana.com",
);

export const metadata: Metadata = {
  title: {
    default: 'Вилно селище "Свети Никола"',
    template: '%s | Вилно селище "Свети Никола"',
  },
  description:
    'Вилно селище "Свети Никола" гр.Монтана, бунгала и стаи под наем',
  keywords: [
    "бунгало",
    "бунгала",
    "свети",
    "никола",
    "свети никола",
    "отдих",
    "язовир",
    "монтана",
    "язовир монтана",
  ],
  metadataBase: baseURL,
  openGraph: {
    title: 'Вилно селище "Свети Никола"',
    description:
      'Вилно селище "Свети Никола" гр.Монтана, бунгала и стаи под наем',
    url: baseURL,
    siteName: 'Вилно селище "Свети Никола"',
    images: [
      {
        url: "/images/og.png",
        width: 768,
        height: 591,
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  authors: [
    {
      url: "https://github.com/tongo-angelov",
      name: "Anton Angelov",
    },
    {
      url: "https://devplayground.online",
      name: "tongo",
    },
  ],
};

export const map = {
  latitude: "43.3902063",
  longitude: "23.2160587",
  key: process.env.MAP_KEY,
  icon: "https://svetinikola-montana.com/images/marker.png",
  url: "https://goo.gl/maps/feVLcwB6jXeaghn39",
};

export const description = {
  title: "Добре дошли във Вилно селище „Свети Никола“",
  text: "Нашите очарователни бунгала са разположени до живописния град Монтана, България. Разположени са само на 200 метра от спокойния язовир Огоста и на кратка разходка от 400 метра до текущата река Огоста. Това е превъзходно място за вашия любим спорт или отдих – риболов, кану или сърфиране на язовир Огоста. Предлагаме безплатно паркиране за Вашите лодки. Това е невероятно място за пълно релаксиране и наслаждаване на мирната природа. В близост се намират и допълнителни удобства, като басейн и ресторант за вашето удобство. Вилното селище предлага и външно барбекю, перфектно за вечери на открито в топлите летни вечери. Добре дошли и се наслаждавайте на тази българска живописна дестинация!",
};

export const details = [
  {
    title: "Вилно селище „Свети Никола“",
    text: "Разполага се с три бунгала, всяко с по пет стаи, оборудвани с двойни и единични легла, както и с просторна веранда. Във всяка стая има интернет, телевизия и собствена баня, оборудвана с всички необходими аксесоари.",
    image: {
      src: "/images/details_1.png",
      width: 768,
      height: 591,
      alt: "вилно селище „Свети Никола“",
    },
  },
  {
    title: "Двойна стая на цена от 60 лв.",
    text: "Насладете се на незабравими моменти на отдих, на релаксация, риболов или разходки, в обгърната от природата атмосфера на нашите уютни къщи.",
    image: {
      src: "/images/details_2.png",
      width: 780,
      height: 900,
      alt: "двойна стая",
    },
    action: {
      title: "Още Детайли",
      link: routes.bungalows,
    },
  },
  {
    title: "Заслушайте се в Мелодията на Тишината",
    text: "Открийте българската красота в нашите бунгала. Тук ще намерите идеалното място за отдих и релакс в сърцето на природата. Насладете се на спокойните звуци на природата, докато се забавлявате с любимите си активности на открито.",
    image: {
      src: "/images/details_3.png",
      width: 768,
      height: 591,
      alt: "язовир Монтана",
    },
    action: {
      title: "Резервирай",
      link: routes.contacts,
    },
  },
];

export const contacts = {
  phone: "+359 98 870 9990",
  address: {
    name: "Вилно селище „Свети Никола“",
    street: "бул. „Монтана“, 3400 Аугуста",
    city: "Монтана, България",
  },
};

export const cards = [
  {
    image: "/images/card_1.jpg",
    title: "Велосипеден Рай",
    text: "Свеж въздух, извити пътеки и вълшебството на природата ви очакват. Гостите могат да донесат своите велосипеди и да се насладят на изумителните пътеки около язовир Огоста и река Огоста. Невероятен начин да изследвате и да се насладите на тази красива област!",
  },
  {
    image: "/images/card_2.jpg",
    title: "Кану Приключения",
    text: "Язовир Огоста е идеално място за кану и други водни спортове. Предлагаме безплатно паркиране за Вашите кану и Ви обещаваме незабравими преживявания сред природата!",
  },
  {
    image: "/images/card_3.jpg",
    title: "Уютни Бунгала",
    text: "Нашите бунгала са оборудвани с всичко необходимо за вашето удобство и комфорт. Запазете своята ваканция в тази уникална и живописна дестинация, и се наслаждавайте на тишината и спокойствието на Монтана, България.",
  },
];

export const icons = [
  {
    image: "/images/icon_1.png",
    title: "Собствена баня",
  },
  {
    image: "/images/icon_2.png",
    title: "Заведения",
  },
  {
    image: "/images/icon_3.png",
    title: "Безплатен WiFi",
  },
  {
    image: "/images/icon_4.png",
    title: "Удобни легла",
  },
  {
    image: "/images/icon_5.png",
    title: "Климатик",
  },
];

export const quote = {
  quote:
    "Природата е книга, отворена пред очите на всички, но трябва да се научим да четем в нея, за да можем да разберем нейната истинска красота и значение.",
  author: "Жан-Жак Русо",
};
