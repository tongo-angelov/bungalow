/* eslint-disable @next/next/no-img-element */

export default function Icon({
  image,
  title,
  className,
}: {
  image: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-end gap-4 text-center ${className}`}
    >
      <img src={image} alt={title} width={50} height={50} />
      <h5 className="text-sm font-semibold text-foreground/80">{title}</h5>
    </div>
  );
}
