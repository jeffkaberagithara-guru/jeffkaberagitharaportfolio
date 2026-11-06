type MonogramProps = {
  className?: string;
  title?: string;
};

export function Monogram({ className, title }: MonogramProps) {
  return (
    <svg
      aria-hidden={title ? undefined : "true"}
      className={className}
      fill="none"
      role={title ? "img" : undefined}
      viewBox="0 0 48 48"
    >
      {title ? <title>{title}</title> : null}
      <rect
        height="45.5"
        stroke="currentColor"
        strokeWidth="1"
        width="45.5"
        x="1.25"
        y="1.25"
      />
      <path
        d="M12 9v30M12 24h11M23 9v30"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M27 9h10M32 9v30M27 39h10"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="36" cy="12" fill="currentColor" r="2.2" />
    </svg>
  );
}
