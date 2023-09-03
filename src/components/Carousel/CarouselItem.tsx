export default function CarouselItem({
  image,
  className,
  children,
}: {
  image: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`w-screen aspect-video bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="w-full flex h-full justify-center items-center font-bold text-4xl text-white">
        {children}
      </div>
    </div>
  );
}
