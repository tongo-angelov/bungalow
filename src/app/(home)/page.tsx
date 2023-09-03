import Card from "@/components/Card/Card";
import CardSection from "@/components/Card/CardSection";
import Carousel from "@/components/Carousel/Carousel";
import DescriptionSection from "@/components/Description/DescriptionSection";
import Icon from "@/components/Icon/Icon";
import IconSection from "@/components/Icon/IconSection";
import QuoteSection from "@/components/Quote/QuoteSection";
import { cards, description, icons, quote as q } from "@/data";

const { quote, author } = q;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <Carousel /> */}

      <DescriptionSection
        className="my-8"
        title={description.title}
        text={description.text}
      />

      <CardSection
        className="h-content mb-4 mt-4 bg-fixed pb-10 pt-10 lg:mb-44 lg:h-screen lg:pb-0 lg:pt-96"
        image="/images/nature.jpg"
      >
        {cards.map(({ image, title, text }) => (
          <Card key={title} image={image} title={title} text={text} />
        ))}
      </CardSection>

      <IconSection className="my-6">
        {icons.map(({ image, title }) => (
          <Icon key={title} image={image} title={title} />
        ))}
      </IconSection>
      <QuoteSection className=" my-20" quote={quote} author={author} />
    </main>
  );
}
