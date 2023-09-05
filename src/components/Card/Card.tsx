import ExportedImage from "next-image-export-optimizer";

export default function Card({
  image,
  title,
  text,
  className,
}: {
  image: string;
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-background shadow-lg">
      <ExportedImage
        className="w-full"
        src={image}
        alt={title}
        width={512}
        height={512}
      />
      <div className="my-6 text-center">
        <h5 className="text-2xl font-bold text-foreground/90">{title}</h5>
        <p className="p-8 leading-7">{text}</p>
      </div>
    </div>
  );
}
