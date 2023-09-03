export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`container mx-auto px-2 md:px-0 ${className}`}>
      {children}
    </div>
  );
}
