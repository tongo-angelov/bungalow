/* eslint-disable @next/next/no-img-element */

export default function DetailsImage({
  image,
  alt,
  className,
}: {
  image: string;
  alt: string;
  className?: string;
}) {
  return (
    <div>
      <img src={image} alt={alt} />
    </div>
  );
}
