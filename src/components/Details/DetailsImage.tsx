import ExportedImage from "next-image-export-optimizer";

export default function DetailsImage({
  image,
  width,
  height,
  alt,
  className,
}: {
  image: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}) {
  return (
    <div>
      <ExportedImage src={image} alt={alt} width={width} height={height} />
    </div>
  );
}
