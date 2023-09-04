export default function Section({
  className,
  image,
  children,
}: {
  className?: string;
  image?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`w-full bg-cover bg-center bg-no-repeat ${className}`}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      {children}
    </section>
  );
}
