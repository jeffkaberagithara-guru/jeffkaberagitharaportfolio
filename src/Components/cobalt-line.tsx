export function CobaltLine({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={["cobalt-line", className].filter(Boolean).join(" ")}
    >
      <span className="cobalt-line__dot" />
    </div>
  );
}
