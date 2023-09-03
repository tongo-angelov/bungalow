export default function DetailsText({
  title,
  text,
  children,
  className,
}: {
  title: string;
  text: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex h-full flex-col justify-evenly lg:py-8 ${className}`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-md py-8 leading-8 text-foreground/90">{text}</p>
      {children}
    </div>
  );
}
