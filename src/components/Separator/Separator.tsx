export default function Separator({ className }: { className?: string }) {
  return (
    <div className={`my-8 w-3/4 border border-foreground/10 ${className}`} />
  );
}
